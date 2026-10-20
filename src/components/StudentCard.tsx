// components/StudentCard.tsx
import Link from "next/link"
import type { students } from "@/lib/data"


const avatarColors = [
  "bg-blue-100 text-blue-900",
  "bg-indigo-100 text-indigo-900",
  "bg-orange-100 text-orange-950",
  "bg-rose-100 text-rose-900",
  "bg-violet-100 text-violet-900",
  "bg-amber-100 text-amber-900",
]

function avatarColorFor(id: string) {
  let sum = 0
  for (const ch of id) sum += ch.charCodeAt(0)
  return avatarColors[sum % avatarColors.length]
}

export default function StudentCard({ student }: { student: students }) {
 

  return (
    <article className="rounded-md border border-slate-300 bg-white p-6">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl text-lg font-semibold ${avatarColorFor(student.id)}`}
        >
         {student.name[0].toUpperCase()}{ student.name[1].toUpperCase()}
        </div>
        <span className="rounded border border-slate-300 bg-indigo-50 px-2 py-0.5 font-mono text-sm text-slate-500">
          {student.id}
        </span>
      </div>

      <h2 className="mt-6 text-xl font-semibold text-slate-900">{student.name}</h2>

      <div className="mt-3 flex items-center gap-3">
        <span
          className={`rounded border px-2.5 py-0.5 text-sm font-medium ${
            "border-slate-300 bg-slate-50 text-slate-600"
          }`}
        >
          {student.department}
        </span>
        <span className="text-slate-600">{student.year} Year</span>
      </div>

      <hr className="mt-6 border-slate-300" />

      <Link
        href={`/students/${student.id}`}
        className="mt-5 inline-flex items-center gap-2 font-medium text-blue-700 hover:underline"
      >
        View profile
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </article>
  )
}