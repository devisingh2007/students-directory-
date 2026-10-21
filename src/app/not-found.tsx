import Link from "next/link"


export default function NotFound() {
    return (
        <main>
         
            <header className="border-b border-slate-300 bg-[#f8f8fd]">
                <div className="mx-auto max-w-6xl px-6 py-3 text-sm">
                    <Link href="/students" className="text-slate-500 ">
                        Directory / 
                    </Link>
                    
                    <span className="font-medium text-slate-900"> Not Found</span>
                </div>
            </header>

            <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
               
                <div className="flex items-center gap-2 rounded border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-slate-600" />
                    <p>404 . Route not found</p>
                </div>

          
                <div className="mt-8">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Student or department not found
                    </h1>
                    <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
                        The requested directory entry or path could not be located. It may
                        have moved or the identifier might be invalid.
                    </p>
                </div>

             
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    <Link
                        href="/students"
                        className="rounded-sm bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                    >
                        Return to Students Directory
                    </Link>
                    <Link
                        href="/departments"
                        className="rounded-sm border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
                    >
                        Browse All Departments
                    </Link>
                </div>

                
                <div className="mt-14 w-full max-w-2xl overflow-hidden rounded-sm border border-slate-300 bg-white text-left">
                    <div className="flex items-center justify-between border-b border-slate-300 bg-[#f8f8fd] px-4 py-3 text-sm">
                        <p className="font-semibold uppercase tracking-wider text-slate-600">
                            Suggested starting points
                        </p>
                        <p className="text-slate-500">Internal Routes</p>
                    </div>

                    <ul className="divide-y divide-slate-200">
                       <li >
                                <Link
                                    href="/students"
                                    className="flex items-center justify-between gap-4 px-4 py-4 hover:bg-slate-50"
                                >
                                    <span className="font-medium text-slate-800">Students Directory</span>
                                    <span className="flex items-center gap-3 font-mono text-sm text-slate-500">
                                       /students
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M5 12h14M13 6l6 6-6 6" />
                                        </svg>
                                    </span>
                                </Link>
                            </li>
                       <li >
                                <Link
                                    href="/departments"
                                    className="flex items-center justify-between gap-4 px-4 py-4 hover:bg-slate-50"
                                >
                                    <span className="font-medium text-slate-800">All Departments</span>
                                    <span className="flex items-center gap-3 font-mono text-sm text-slate-500">
                                       /departments
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M5 12h14M13 6l6 6-6 6" />
                                        </svg>
                                    </span>
                                </Link>
                            </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}