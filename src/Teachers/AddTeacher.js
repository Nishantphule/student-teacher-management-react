import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { TeachersContext } from "../App";
import { Button, TextField } from "@mui/material";


export function AddTeacher() {
    const context = useContext(TeachersContext);
    const navigate = useNavigate();

    const [addTeacher, setAddTeacher] = useState({
        id: context.teachers.length + 1, name: '', subject: '', age: '', phonenumber: ''
    });


    const handleSubmit = (data) => {
        if (window.confirm(`
        Adding new Profile! 
        
        Name:- ${data.name} 
        Subject:- ${data.subject}
        Age:- ${data.age}
        Phonenumber:- ${data.phonenumber}
        
        Confirm ?`)) {
            const newArray = [...context.teachers];
            newArray.push(data);
            context.setTeachers(newArray);
            console.log(newArray)
            navigate('/teachers')
        }
    }


    return (
        <div className="form">
            <h1>Adding new Teacher Profile</h1>
            <TextField className="Input" placeholder='Enter Name...' onChange={e => setAddTeacher({ ...addTeacher, name: e.target.value })} />
            <TextField className="Input" placeholder='Enter Subject...' onChange={e => setAddTeacher({ ...addTeacher, subject: e.target.value })} />
            <TextField className="Input" placeholder='Enter Age...' onChange={e => setAddTeacher({ ...addTeacher, age: e.target.value })} />
            <TextField className="Input" placeholder='Enter Phone Number...' onChange={e => setAddTeacher({ ...addTeacher, phonenumber: e.target.value })} />
            <Button className="Btn" variant="outlined" color="error" type="cancel" onClick={() => navigate('/teachers')}>
                Cancel
            </Button>
            <Button className="Btn" variant="outlined" color="info" type="submit" onClick={() => handleSubmit(addTeacher)}>
                Submit
            </Button>
        </div>
    )

}
