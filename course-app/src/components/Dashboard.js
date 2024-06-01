import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseCompleted } from '../features/courses/coursesSlice';
import './Dashboard.css';

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const dispatch = useDispatch();

  return (
    <div className="dashboard-container">
      <h2>Enrolled Courses</h2>
      {enrolledCourses.map(course => (
        <div key={course.id} className="enrolled-course">
          <h3>{course.name}</h3>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Due Date:</strong> {course.dueDate}</p>
          <p><strong>Status:</strong> {course.status}</p>
          <button onClick={() => dispatch(markCourseCompleted(course.id))}>
            Mark as Completed
          </button>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
