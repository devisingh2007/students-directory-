"use client"

import { departments, students } from "@/lib/data"
import { useState } from "react"
import StudentCard from "@/components/StudentCard";
import "./students.css";

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
            select === "" || item.department.toLowerCase() === select.toLowerCase();
        return matchedDepartment && matchedSearch;
    });

    
    const start = (currentpage - 1) * limit;
    const paginateddata = filteredData.slice(start, start + limit);
    const from = start + 1;
    const to =from+8;

    return (
        <main className="students-page">
            <div className="page-head">
                <h1>Students</h1>
                <p>Browse students and view their profiles.</p>
            </div>

            <section className="toolbar">
                <div className="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search students"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setCurrentpage(1); }}
                    />
                </div>
                <div className="filter">
                    <label htmlFor="sortDepartment">Department:</label>
                    <select
                        id="sortDepartment"
                        value={select}
                        onChange={(e) => { setSelect(e.target.value); setCurrentpage(1); }}
                    >
                        <option value="">All departments</option>
                        {departments.map((item) => (
                            <option key={item.name} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>
            </section>

            <section>
                {paginateddata.length === 0 ? (
                    <p className="empty-state">No students match your search. Try a different name or department.</p>
                ) : (
                    <div className="student-grid">
                        {paginateddata.map((item) => (
                            <StudentCard key={item.id} student={item} />
                        ))}
                    </div>
                )}
            </section>

            <footer className="list-footer">
                <p>
                    Showing <strong>{from}-{to}</strong> of <strong>{filteredData.length}</strong> students
                </p>
                <div className="pagination">
                    <button onClick={() => setCurrentpage((p) => p - 1)} disabled={currentpage === 1}>Previous</button>
                    <button onClick={() => setCurrentpage((p) => p + 1)} >Next</button>
                </div>
            </footer>
        </main>
    )
}