
import Link from "next/link"
import { departments } from "@/lib/data"





export default function Department() {
    return (
        <main className="bg-[#f8f8fd] px-6 py-12">
            <div className="mx-auto max-w-[52rem]">
                <header className="flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                            Departments
                        </h1>
                        <p className="mt-2 text-lg text-slate-600">
                            Explore academic faculties, programs, and enrolled students.
                        </p>
                    </div>
                    <p className="mt-3 flex items-center gap-2 whitespace-nowrap text-slate-600">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-700" />
                        {departments.length} Active Academic Faculties
                    </p>
                </header>

                <hr className="my-8 border-slate-300" />

                <section className="divide-y divide-slate-300 rounded-md border border-slate-300 bg-white">
                    {departments.map((department) => (
                        <article
                            key={department.name}
                            className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                        >
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path fill="#0608f3" d="M16 18a1 1 0 1 0 0-2zm-8-2a1 1 0 1 0 0 2zm.707-8.707a1 1 0 1 0-1.414 1.414zM11 11l.707.707a1 1 0 0 0 0-1.414zm-3.707 2.293a1 1 0 1 0 1.414 1.414zM7 4h10V2H7zm13 3v10h2V7zm-3 13H7v2h10zM4 17V7H2v10zm3 3a3 3 0 0 1-3-3H2a5 5 0 0 0 5 5zm13-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zM17 4a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5zM7 2a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3zm9 14H8v2h8zM7.293 8.707l3 3l1.414-1.414l-3-3zm3 1.586l-3 3l1.414 1.414l3-3z" />
                                        </svg>


                                    </span>
                                    <h2 className="text-xl font-semibold text-slate-900">
                                        {department.name}
                                    </h2>
                                </div>

                                <p className="mt-3 text-slate-600">{department.description}</p>

                                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                                    <p className="flex items-center gap-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 48 48" aria-hidden="true">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M20 29H6v14h14zm4-25l10 17H14zm12 40a8 8 0 1 0 0-16a8 8 0 0 0 0 16" />
                                        </svg>
                                        {department.specializations} Specializations
                                    </p>
                                    <span className="text-slate-300" aria-hidden="true">·</span>
                                    <p className="flex items-center gap-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill="currentColor" d="M10 13H8c-2.76 0-5 2.24-5 5v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5m-5 5c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3zm7.73-11.49c-.08-.22-.19-.42-.3-.62v-.01c-.69-1.14-1.93-1.89-3.42-1.89c-2.28 0-4 1.72-4 4s1.72 4 4 4c1.49 0 2.73-.74 3.42-1.89v-.01c.12-.2.22-.4.3-.62c.02-.06.03-.12.05-.18c.06-.17.11-.34.15-.52c.05-.25.07-.51.07-.78s-.03-.53-.07-.78c-.03-.18-.09-.35-.15-.52c-.02-.06-.03-.12-.05-.18M9 10c-1.18 0-2-.82-2-2s.82-2 2-2s2 .82 2 2s-.82 2-2 2m6 0q-.165 0-.33-.03c-.22.66-.56 1.27-.98 1.81c.41.13.84.22 1.31.22c2.28 0 4-1.72 4-4s-1.72-4-4-4c-.47 0-.9.09-1.31.22c.43.53.76 1.14.98 1.81c.11-.01.21-.03.33-.03c1.18 0 2 .82 2 2s-.82 2-2 2m1 3h-1.11c.6.58 1.08 1.27 1.44 2.03C17.83 15.2 19 16.46 19 18h-2v1c0 .35-.07.69-.18 1H20c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5" />
                                        </svg>
                                        {department.enrolledStudents} Enrolled Students
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/students"
                                className="inline-flex shrink-0 items-center gap-2 font-medium text-blue-700 hover:underline"
                            >
                                View students
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m13.2 4.93l4.25 4.23c1.34 1.34 2 2 2 2.83s-.66 1.5-2 2.83l-4.24 4.25M4.29 12h14.84" />
                                </svg>
                            </Link>
                        </article>
                    ))}
                </section>

                <footer className="mt-4 flex flex-wrap justify-between gap-2 px-2 text-sm font-semibold tracking-wide text-slate-500">
                    <p>Curriculum Year 2024–2025</p>
                    <p className="text-slate-400">Updated daily via Campus Records API</p>
                </footer>
            </div>
        </main>
    )
}