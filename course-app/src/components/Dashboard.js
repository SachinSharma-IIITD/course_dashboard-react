import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, unenrollCourse, markCourseCompleted } from '../features/courses/coursesSlice';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const status = useSelector((state) => state.courses.status);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  const handleUnenroll = (courseId) => {
    dispatch(unenrollCourse({ courseId }));
  };

  const handleMarkCompleted = (courseId) => {
    dispatch(markCourseCompleted({ courseId }));
  };

  return (
    <div className="student-dashboard">
      <h1>My Enrolled Courses</h1>
      {status === 'loading' && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {enrolledCourses.length === 0 && <div>No enrolled courses</div>}
      <div className="course-cards">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-info">
              <h3>{course.name}</h3>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Status:</strong> {course.completed ? 'Completed' : 'In Progress'}</p>
              <Link to={`/courses/${course.id}`} className="details-link">View Details</Link>
            </div>
            <div className="course-actions">
              <button onClick={() => handleUnenroll(course.id)}>Unenroll</button>
              {!course.completed && (
                <button onClick={() => handleMarkCompleted(course.id)}>Mark as Completed</button>
              )}
            </div>
            <div className="progress-container">
              <progress value={course.completed ? 100 : 50} max="100"></progress>
              <span>{course.completed ? '100%' : '50%'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
