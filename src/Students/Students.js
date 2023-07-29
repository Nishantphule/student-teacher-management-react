import { useContext } from "react"
import { StudentsContext } from "../App"
import { CardBuilder } from "./CardBuilder";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export function Students() {
    const context = useContext(StudentsContext);

    const navigate = useNavigate();

    const deleteStudent = (id) => {
        if (window.confirm(`
        Deleting ${context.students[id - 1].name} Profile! 
        Confirm ?`)) {
            const newArray = [...context.students]
            newArray.splice(id - 1, 1)
            context.setStudents(newArray)
        }
    }

    return (
        <div className="studentsContainer">
            <div className='AddBtn'>
                <Button variant="contained" onClick={() => navigate('/addstudent')}>{<AddIcon />} Add Student</Button>
            </div>
            <div className="CardContainer">
                {
                    context.students.map((student) => {
                        return <CardBuilder
                            key={student.id}
                            content={student}
                            editbtn={<IconButton title="Edit Student" onClick={() => navigate("/studentEdit/" + student.id)}><EditIcon color="primary" /></IconButton>}
                            deletebtn={<IconButton title="Delete Student" onClick={() => deleteStudent(student.id)}><DeleteIcon color="error" /></IconButton>}
                        />
                    })
                }
            </div>

        </div>
    )

}
