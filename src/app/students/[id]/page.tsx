
import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/lib/data";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function StudentProfile({ params }: Props) {
    const { id } = await params;

    const student = students.find(
        (item) => item.id === id
    );

    if (!student) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-4xl px-6 py-10">
            <p className="mb-4 text-sm text-slate-500">
                Students / {student.name}
            </p>

            <Link
                href="/students"
                className="text-blue-600 hover:underline"
            >
                ← Back to students
            </Link>

            <section className="mt-6 rounded border border-slate-300 bg-white p-8">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                        {student.name[0]}{student.name[1].toUpperCase()}
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            {student.name}
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            {student.id}
                        </p>
                    </div>
                </div>

                <hr className="my-6" />

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <p className="text-sm text-slate-500">
                            Department
                        </p>
                        <p className="font-medium">
                            {student.department}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-500">
                            Study Year
                        </p>
                        <p className="font-medium">
                            {student.year}
                            {student.year === 1 ? "st" :
                                student.year === 2 ? "nd" :
                                    student.year === 3 ? "rd" : "th"} Year
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-500">
                            Email
                        </p>
                        <a
                            href={`mailto:${student.email}`}
                            className="break-all text-blue-600 hover:underline"
                        >
                            {student.email}
                        </a>
                    </div>

                    <div>
                        <p className="text-sm text-slate-500">
                            Enrolled
                        </p>
                        <p className="font-medium">
                            {student.enrolled}
                        </p>
                    </div>
                </div>

                <hr className="my-6" />

                <h2 className="text-xl font-semibold">About</h2>
                <p className="mt-3 leading-7 text-slate-600">
                    {student.about}
                </p>

                <hr className="my-6" />

                <h2 className="text-xl font-semibold">
                    Academic Details
                </h2>

                <div className="mt-4 flex justify-between gap-4 border-b py-3">
                    <span className="text-slate-500">Department</span>
                    <span className="text-right font-medium">
                        {student.department}
                    </span>
                </div>

                <div className="flex justify-between gap-4 border-b py-3">
                    <span className="text-slate-500">
                        Current Academic Standing
                    </span>
                    <span className="text-right font-medium">
                        Year {student.year} Undergraduate
                    </span>
                </div>

                <h2 className="mt-8 text-xl font-semibold">Enrolled subjects</h2>

                {student.subjects?.length ? (
                    <ul className="mt-4 divide-y divide-slate-200 rounded border border-slate-300 px-4">
                        {student.subjects.map((item) => (
                            <li
                                key={item.code}
                                className="flex items-center justify-between gap-4 py-3"
                            >
                                <p className="text-slate-600">
                                    <span className="font-medium text-slate-900">{item.code}</span>
                                    {" – "}
                                    {item.name}
                                </p>
                                <span className="shrink-0 text-sm text-slate-500">
                                    {item.credits} credits
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-4 text-slate-500">No subjects enrolled yet.</p>
                )}
            </section>
        </main>
    );
}
