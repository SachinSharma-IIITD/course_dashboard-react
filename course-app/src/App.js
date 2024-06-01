import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";
import StudentDashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import "./App.css";


function App() {
  // const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <Router>
      <Header />
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/dashboard" element={<ProtectedDashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function ProtectedDashboard() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return <StudentDashboard />;
}

export default App;