import { createContext, useState } from 'react';
import './App.css';
import { AppBar, Button, Paper, Toolbar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Home } from './components/Home';
import { Teachers } from './Teachers/Teachers';
import { TeacherEdit } from './Teachers/TeacherEdit';
import { AddTeacher } from './Teachers/AddTeacher';
import { Students } from './Students/Students';
import { StudentEdit } from './Students/StudentEdit';
import { AddStudent } from './Students/AddStudent';
import { About } from './components/About';
import { NotFound } from './components/NotFound';

export const StudentsContext = createContext();
export const TeachersContext = createContext();

function App() {

  let [teachers, setTeachers] = useState([
    {
      "id": 1,
      "name": "Shraddha Khapra",
      "age": "30",
      "subject": "Data-Science",
      "phonenumber": "9226205145",
    },
    {
      "id": 2,
      "name": "Raghav R. V.",
      "age": "25",
      "subject": "MERN",
      "phonenumber": "9873526873",
    },
    {
      "id": 3,
      "name": "Angela Yu",
      "age": "33",
      "subject": "AI-ML",
      "phonenumber": "9874526211",
    },
    {
      "id": 4,
      "name": "Nishant Chahar",
      "age": "45",
      "subject": "Blockchain",
      "phonenumber": "9226205180",
    }
  ]);

  let [students, setStudents] = useState([
    {
      "id": 1,
      "name": "Nishant Phule",
      "age": "22",
      "course": "FSD-MERN",
      "phonenumber": "8830406866",
    },
    {
      "id": 2,
      "name": "Priya Saini",
      "age": "23",
      "course": "AI-ML",
      "phonenumber": "9075425591",
    },
    {
      "id": 3,
      "name": "Shubham Rawale",
      "age": "25",
      "course": "Data-Science",
      "phonenumber": "8446695368",
    },
    {
      "id": 4,
      "name": "Aditya Ugale",
      "age": "21",
      "course": "Blockchain Devlopment",
      "phonenumber": "7972566341",
    },
  ]);

  const navigate = useNavigate();
  const [mode, setMode] = useState("dark")

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <Paper elevation={4} style={{ minHeight: "100vh", borderRadius: "0px" }}>

        <AppBar>
          <Toolbar>
            <Button startIcon={<HomeIcon />} variant="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button variant="inherit" onClick={() => navigate("/teachers")}>
              Teachers
            </Button>
            <Button variant="inherit" onClick={() => navigate("/students")}>
              Students
            </Button>
            <Button variant="inherit" onClick={() => navigate("/about")}>
              About
            </Button>
            <Button sx={{ marginLeft: 'auto' }} variant="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}{mode === "light" ? "dark" : "light"} MODE
            </Button>
          </Toolbar>
        </AppBar>


        <div className='App'>

          <StudentsContext.Provider value={{ students, setStudents }}>
            <TeachersContext.Provider value={{ teachers, setTeachers }}>
              <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/teachers" element={<Teachers />} />
                <Route path="/teacherEdit/:id" element={<TeacherEdit />} />
                <Route path="/addteacher" element={<AddTeacher />} />

                <Route path="/students" element={<Students />} />
                <Route path="/studentEdit/:id" element={<StudentEdit />} />
                <Route path="/addstudent" element={<AddStudent />} />

                <Route path="*" element={<Navigate replace to="/404" />} />
                <Route path="/404" element={<NotFound />} />

              </Routes>
            </TeachersContext.Provider>
          </StudentsContext.Provider>
        </div>



      </Paper>
    </ThemeProvider>

  );
}

export default App;
