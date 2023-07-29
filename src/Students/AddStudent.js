import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { StudentsContext } from "../App";
import { Button, TextField } from "@mui/material";

export function AddStudent() {
    const context = useContext(StudentsContext);
    const navigate = useNavigate();

    const [addStudent, setAddStudent] = useState({
        id: context.students.length + 1, name: '', course: '', age: '', phonenumber: ''
    });

    const handleSubmit = (data) => {
        if (window.confirm(`
        Adding new Profile!
        
        Name:- ${data.name} 
        Course:- ${data.course}
        Age:- ${data.age}
        Phonenumber:- ${data.phonenumber}

        Confirm ?`)) {
            const newArray = [...context.students];
            newArray.push(data);
            context.setStudents(newArray);
            console.log(newArray)
            navigate('/students')
        }
    }


    return (
        <div className="form">
            <h1>Adding new Student Profile</h1>
            <TextField className="Input" placeholder='Enter Name...' onChange={e => setAddStudent({ ...addStudent, name: e.target.value })} />
            <TextField className="Input" placeholder='Enter Course...' onChange={e => setAddStudent({ ...addStudent, course: e.target.value })} />
            <TextField className="Input" placeholder='Enter Age...' onChange={e => setAddStudent({ ...addStudent, age: e.target.value })} />
            <TextField className="Input" placeholder='Enter Phone Number...' onChange={e => setAddStudent({ ...addStudent, phonenumber: e.target.value })} />
            <Button className="Btn" type="cancel" variant="outlined" color="error" onClick={() => navigate('/students')}>
                Cancel
            </Button>
            <Button className="Btn" type="submit" variant="outlined" color="info" onClick={() => handleSubmit(addStudent)}>
                Submit
            </Button>
        </div>
    )

}
