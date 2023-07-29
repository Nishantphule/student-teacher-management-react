import { useContext } from "react"
import { TeachersContext } from "../App"
import { CardBuilder } from "./CardBuilder";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export function Teachers() {

    const context = useContext(TeachersContext);

    const navigate = useNavigate();

    const deleteTeacher = (id) => {
        if (window.confirm(`
        Deleting ${context.teachers[id - 1].name} Profile! 
        Confirm ?`)) {
            const newArray = [...context.teachers]
            newArray.splice(id - 1, 1)
            context.setTeachers(newArray)
        }

    }

    return (
        <div className="teachersContainer">
            <div className='AddBtn'>
                <Button variant="contained" onClick={() => navigate('/addteacher')}>{<AddIcon />} Add Teacher</Button>
            </div>
            <div className="CardContainer">
                {
                    context.teachers.map((teacher) => {
                        return <CardBuilder
                            key={teacher.id}
                            content={teacher}
                            editbtn={<IconButton title="Edit Teacher" onClick={() => navigate("/teacherEdit/" + teacher.id)}><EditIcon color="primary" /></IconButton>}
                            deletebtn={<IconButton title="Delete Teacher" onClick={() => deleteTeacher(teacher.id)}><DeleteIcon color="error" /></IconButton>}
                        />
                    })
                }
            </div>

        </div>
    )

}
