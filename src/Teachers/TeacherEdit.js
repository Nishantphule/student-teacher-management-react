import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { TeachersContext } from "../App";
import { Button, TextField } from "@mui/material";

export function TeacherEdit() {

    const context = useContext(TeachersContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [updateTeacher, setupdateTeacher] = useState({
        id: '', name: '', subject: '', age: '', phonenumber: ''
    });

    const userId = id - 1;

    function data() {
        setupdateTeacher({ id: context.teachers[userId].id, name: context.teachers[userId].name, subject: context.teachers[userId].subject, age: context.teachers[userId].age, phonenumber: context.teachers[userId].phonenumber });
    }

    useEffect(() => {
        if (id) {
            data();
        }
        else {
            navigate('/teachers')
            console.log("no teacher found");
        }
    }, [id])


    const handleSubmit = (data) => {
        if (window.confirm(`
        Updating ${data.name} Profile! 
        Confirm ?`)) {
            const newArray = [...context.teachers];
            newArray.splice(userId, 1, data);
            context.setTeachers(newArray);
            navigate('/teachers')
        }
    }


    return (
        <div className="form">
            <h1>Updating {updateTeacher.name} Profile</h1>
            <TextField className="Input" placeholder={updateTeacher.name} onChange={e => setupdateTeacher({ ...updateTeacher, name: e.target.value })} />
            <TextField className="Input" placeholder={updateTeacher.subject} onChange={e => setupdateTeacher({ ...updateTeacher, subject: e.target.value })} />
            <TextField className="Input" placeholder={updateTeacher.age} onChange={e => setupdateTeacher({ ...updateTeacher, age: e.target.value })} />
            <TextField className="Input" placeholder={updateTeacher.phonenumber} onChange={e => setupdateTeacher({ ...updateTeacher, phonenumber: e.target.value })} />
            <Button className="Btn" variant="outlined" color="error" type="cancel" onClick={() => navigate('/teachers')}>
                Cancel
            </Button>
            <Button className="Btn" variant="outlined" color="info" type="submit" onClick={() => handleSubmit(updateTeacher)}>
                Submit
            </Button>
        </div>
    )

}
