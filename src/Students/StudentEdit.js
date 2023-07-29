import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { StudentsContext } from "../App";
import { Button, TextField } from "@mui/material";

export function StudentEdit() {
    const context = useContext(StudentsContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [updateStudent, setupdateStudent] = useState({
        id: '', name: '', course: '', age: '', phonenumber: ''
    });

    const userId = id - 1;

    function data() {
        setupdateStudent({ id: context.students[userId].id, name: context.students[userId].name, course: context.students[userId].course, age: context.students[userId].age, phonenumber: context.students[userId].phonenumber });
    }

    useEffect(() => {
        if (id) {
            data();
        }
        else {
            navigate('/students')
            console.log("no Student found");
        }
    }, [id])


    const handleSubmit = (data) => {
        if (window.confirm(`
        Updating ${data.name} Profile! 
        Confirm ?`)) {
            const newArray = [...context.students];
            newArray.splice(userId, 1, data);
            context.setStudents(newArray);
            navigate('/students')
        }

    }


    return (
        <div className="form">
            <h1>Updating {updateStudent.name} Profile</h1>
            <TextField className="Input" placeholder={updateStudent.name} onChange={e => setupdateStudent({ ...updateStudent, name: e.target.value })} />
            <TextField className="Input" placeholder={updateStudent.course} onChange={e => setupdateStudent({ ...updateStudent, course: e.target.value })} />
            <TextField className="Input" placeholder={updateStudent.age} onChange={e => setupdateStudent({ ...updateStudent, age: e.target.value })} />
            <TextField className="Input" placeholder={updateStudent.phonenumber} onChange={e => setupdateStudent({ ...updateStudent, phonenumber: e.target.value })} />
            <Button className="Btn" type="cancel" variant="outlined" color="error" onClick={() => navigate('/students')}>
                Cancel
            </Button>
            <Button className="Btn" type="cancel" variant="outlined" color="info" onClick={() => handleSubmit(updateStudent)}>
                Submit
            </Button>
        </div>
    )
}
