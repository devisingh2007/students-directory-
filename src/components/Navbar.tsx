import Link from "next/link";

export default function Navbar()
{
return (
    <header className="border-b bg-white ">
    <nav className="mx-auto flex items-center gap-8 px-6 py-4">
        <Link href="/students" className="text-xl font-bold text-slate-900">Campus Directory</Link>
        <Link href="/students">Students</Link>
        <Link href="/departments">Departments</Link>
        <Link href="/about">About</Link>
        <span className="ml-auto hidden text-sm sm:block border-1 ">Frontend prectice</span>
    </nav>
    </header>
)
}