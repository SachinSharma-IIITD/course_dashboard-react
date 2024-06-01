import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseCompleted } from '../features/courses/coursesSlice';

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Due Date:</strong> {course.dueDate}</p>
            <p><strong>Status:</strong> {course.status}</p>
            <button onClick={() => dispatch(markCourseCompleted(course.id))}>
              Mark as Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
