import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { enrollCourse, unenrollCourse } from '../features/courses/coursesSlice';
import './CourseCard.css';

const CourseCard = ({ course, enrolled }) => {
  const dispatch = useDispatch();

  const handleEnroll = () => {
    dispatch(enrollCourse({ courseId: course.id }));
  };

  const handleUnenroll = () => {
    dispatch(unenrollCourse({ courseId: course.id }));
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-details">
          <h3>{course.name}</h3>
          <p>{course.instructor}</p>
        </div>
        <div className="card-buttons">
          <Link to={`/courses/${course.id}`}>View Details</Link>
          {enrolled ? (
            <button onClick={handleUnenroll}>Unenroll</button>
          ) : (
            <button onClick={handleEnroll}>Enroll</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
