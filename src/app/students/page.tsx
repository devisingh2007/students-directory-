"use client"

import { departments, students } from "@/lib/data"
import { useState } from "react"
import studentCard from "@/components/StudentCard";

export default function Students() {
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("All")
    const [currentpage, setCurrentpage] = useState(1);
    const limit = 9;
    const filteredData = students.filter((item) => {
        const matchedSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.id.toLowerCase().includes(search.toLowerCase());
        const matchedDepartment = item.department.toLowerCase() === select.toLowerCase() || select === "";

        return matchedDepartment && matchedSearch;
    })
    const paginateddata = filteredData.slice(((currentpage - 1) * limit), limit)
    return (
        <main>
            <div>
                <h1>Student</h1>
                <p>Browse strudents and View their profiles.</p>
            </div>
            <section>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z" />
                    </svg>
                    <input type="text" placeholder="Search students" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="sortDepartment">Department : </label> <select id="sortDepartment" value={select} onChange={(e) => setSelect(e.target.value)}>
                        <optgroup>
                            <option value="">All deparment</option>
                            {departments.map((item, index) => (<option key={index}>{item.name}</option>))}
                        </optgroup>
                    </select>
                </div>
            </section>

            <section>
                {paginateddata.length == 0 ?
                    <p> No students match your search. Try a different name or department.</p> :
                    <div>
                        {paginateddata.map((item) => (<studentCard data={item} />))}
                    </div>}
            </section>


            <footer>
                <div>
                    <p>
                        showing <strong>{currentpage*limit}</strong> of <strong>{filteredData.length} </strong>
                    </p>
                </div>
                <div>
                    <button onClick={()=>setCurrentpage((pre)=>pre-1)} disabled={currentpage==1}>Previous</button>
                    <button onClick={()=>setCurrentpage((pre)=>pre+1)} >Next</button>
                </div>
                
            </footer>

        </main>
    )
}