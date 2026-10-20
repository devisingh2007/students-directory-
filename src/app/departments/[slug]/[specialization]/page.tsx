import Link from "next/link"
import { notFound } from "next/navigation"
import { departments, students } from "@/lib/data"
import { getSpecialization } from "@/lib/data"
import StudentCard from "@/components/StudentCard"

type Props = {
    params: Promise<{ slug: string; specialization: string }>
}

export default async function SpecializationPage({ params }: Props) {
    const { slug, specialization: specSlug } = await params

    const department = departments.find((d) => d.slug === slug)
    const specialization = getSpecialization(slug, specSlug)

    if (!department || !specialization) {
        notFound()
    }

    const enrolled = students.filter(
        (s) =>
            s.departmentSlug === department.slug &&
            s.specialization === specialization.name
    )
    const activeCount = enrolled.filter((s) => s.status === "Active").length

    const stats = [
        { label: "Academic Lead", value: specialization.lead },
        { label: "Primary Core Lab", value: specialization.lab },
        { label: "Total Enrollment", value: `${activeCount} Active Enrollees` },
        { label: "Curriculum Cycle", value: specialization.cycle },
    ]

    return (
        <div className="bg-[#f8f8fd]">
            <main className="mx-auto max-w-6xl px-6 pb-20 pt-8">
                
                <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
                    <Link href="/departments" className="hover:underline">Departments</Link>
                    <span className="mx-2 text-slate-400">/</span>
                    <Link href={`/departments/${department.slug}`} className="hover:underline">
                        {department.name}
                    </Link>
                    <span className="mx-2 text-slate-400">/</span>
                    <span className="font-semibold text-slate-900">{specialization.name}</span>
                </nav>

               
                <div className="mt-6 flex items-center justify-between border-b border-slate-300 pb-5">
                    <Link
                        href={`/departments`}
                        className="font-medium text-blue-700 hover:underline"
                    >
                        ← Return to {department.name} Department
                    </Link>
                    <Link href="/students" className="font-medium text-slate-600 hover:underline">
                        View all students →
                    </Link>
                </div>

                
                <section className="mt-8 rounded-sm border border-slate-300 bg-white p-8">
                    <div className="flex flex-col justify-between gap-6 sm:flex-row">
                        <div className="max-w-2xl">
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                                    {specialization.name}
                                </h1>
                                <span className="rounded-sm border border-slate-300 bg-indigo-50 px-3 py-1 text-sm font-medium text-slate-600">
                                    Specialization under {department.name}
                                </span>
                            </div>
                            <p className="mt-4 text-lg leading-8 text-slate-600">
                                {specialization.description}
                            </p>
                        </div>

                        <div className="sm:text-right">
                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Department Track
                            </p>
                            <p className="mt-3 inline-block rounded-sm border border-slate-300 bg-slate-50 px-4 py-2 text-lg font-semibold text-slate-900">
                                {specialization.code}
                            </p>
                        </div>
                    </div>

                    <hr className="my-8 border-slate-200" />

                    <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <dt className="text-sm font-semibold text-slate-500">{stat.label}</dt>
                                <dd className="mt-1 text-lg font-medium text-slate-900">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>


                <section className="mt-10">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-300 pb-4">
                        <h2 className="flex items-center gap-3 text-2xl font-semibold text-slate-900">
                            Students in this Specialization
                            <span className="rounded-sm bg-indigo-50 px-2 py-0.5 text-base font-medium">
                                {enrolled.length}
                            </span>
                        </h2>
                        <p className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="font-semibold">Filtered by Track:</span>
                            <span className="rounded-sm border border-slate-300 bg-indigo-50 px-2.5 py-1 font-medium text-slate-800">
                                {specialization.name}
                            </span>
                        </p>
                    </div>

                    {enrolled.length === 0 ? (
                        <p className="mt-6 rounded-sm border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
                            No students are enrolled in this specialization yet.
                        </p>
                    ) : (
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            {enrolled.map((student) => {
                        
                                return (
                               <StudentCard student={student} key={student.id}/>
                                )
                            })}
                        </div>
                    )}
                </section>
            </main>

            <footer className="border-t border-slate-300 bg-white">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-sm font-semibold text-slate-500">
                    <p>Campus Directory © Academic Informatics Core</p>
                    <p className="flex items-center gap-3">
                        Path: /departments/{department.slug}/{specialization.slug}
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    </p>
                </div>
            </footer>
        </div>
    )
}