"use client";

import { departments, students } from "@/lib/data";
import { useState } from "react";
import StudentCard from "@/components/StudentCard";

export default function Students() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [currentpage, setCurrentpage] = useState(1);

  const limit = 9;

  const filteredData = students.filter((item) => {
    const matchedSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());

    const matchedDepartment =
      select === "" ||
      item.department.toLowerCase() === select.toLowerCase();

    return matchedSearch && matchedDepartment;
  });

  const totalPages = Math.ceil(filteredData.length / limit);
  const start = (currentpage - 1) * limit;

  const paginateddata = filteredData.slice(start, start + limit);
  const from = filteredData.length === 0 ? 0 : start + 1;
  const to = Math.min(start + limit, filteredData.length);

  return (
    <main className="min-h-screen bg-[#f8f8fd] px-6 py-12 font-sans text-[#111827]">

      <div className="mx-auto max-w-300">
        <div className="page-head">
          <h1 className="m-0 text-[2.5rem] font-bold tracking-[-0.02em]">
            Students
          </h1>

          <p className="mt-2 text-lg text-[#5b6475]">
            Browse students and view their profiles.
          </p>
        </div>

        <section className="mt-8 flex items-center justify-between gap-4 rounded-md border border-[#cfd3e0] bg-white p-4">

          <div className="relative w-full max-w-135 flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=" absolute left-[0.85rem] top-1/2 h-5 w-5 -translate-y-1/2 text-[#5b6475]"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search students"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentpage(1);
              }}
              className="h-11 w-full rounded border border-[#cfd3e0] bg-white pl-[2.9rem] pr-4 text-base text-[#111827] "
            />
          </div>

          <div className="flex items-center gap-[0.6rem] text-[0.95rem] text-[#5b6475]">
            <label htmlFor="sortDepartment">Department:</label>

            <select
              id="sortDepartment"
              value={select}
              onChange={(e) => {
                setSelect(e.target.value);
                setCurrentpage(1);
              }}
              className="h-11 min-w-52 cursor-pointer rounded border border-[#cfd3e0] bg-white px-3 text-base text-[#111827] ]"
            >
              <option value="">All departments</option>

              {departments.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section>
          {paginateddata.length === 0 ? (
            <p className="mt-8 rounded-md border border-dashed border-[#cfd3e0] bg-white px-4 py-12 text-center text-[#5b6475]">
              No students match your search. Try a different name or department.
            </p>
          ) : (
            <div className="mt-7 grid grid-cols-3 gap-7">
              {paginateddata.map((item) => (
                <StudentCard key={item.id} student={item} />
              ))}
            </div>
          )}
        </section>

        <footer className="mt-10 flex items-center justify-between border-t border-[#cfd3e0] pt-6 text-[#5b6475]">
          <p>
            Showing{" "}
            <strong className="font-semibold text-[#111827]">
              {from}-{to}
            </strong>{" "}
            of{" "}
            <strong className="font-semibold text-[#111827]">
              {filteredData.length}
            </strong>{" "}
            students
          </p>

          <div className="flex gap-[0.6rem]">
            <button
              onClick={() => setCurrentpage((p) => p - 1)}
              disabled={currentpage === 1}
              className="rounded-sm border border-[#cfd3e0] bg-white px-[1.1rem] py-[0.55rem] text-[#5b6475] hover:border-[#5b6475] "
            >
              Previous
            </button>

            <button
              onClick={() => setCurrentpage((p) => p + 1)}
              disabled={totalPages === 0 || currentpage >= totalPages}
              className="rounded-sm border border-[#cfd3e0] bg-white px-[1.1rem] py-[0.55rem] text-[#5b6475] hover:border-[#5b6475] "
            >
              Next
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}
