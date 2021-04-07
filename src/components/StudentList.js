import { useEffect, useState } from "react"

import {getStudentList} from "../service" 
const StudentList = () => {
    const [studentList, setStudentList] = useState([])

    useEffect(()=> {
        if (studentList.length === 0){
            getStudentList().then((list) => setStudentList(list))
        }
    }, [studentList])
    return(
        <table className="table">
            <thead>
                <tr className="row">
                    <th>
                        STUDENTS
                    </th>
                    <th>
                        GRADE
                    </th>
                    <th>
                        READING LEVEL
                    </th>
                </tr>
            </thead>
            <tbody>
                {studentList.map((student, i) => 
                <tr className="row" key={i}>
                    <td>
                        {student.first_name + " " + student.last_name}
                    </td>
                    <td>
                        {student.grade_level_id}
                    </td>
                    <td>
                        {student.reading_level_id}
                    </td>
                </tr>)}
            </tbody>
        </table>
    )

}
export default StudentList