import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnrollmentForm from './EnrollmentForm';
import { useDispatch } from 'react-redux';
import { enrollCourse } from '../features/courses/coursesSlice';
import './CourseCard.css';
import './EnrollmentForm.css';

const CourseCard = ({ course }) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const handleEnroll = (student) => {
    dispatch(enrollCourse({ courseId: course.id, student }));
    setShowForm(false);
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="card-details">
            <h3>{course.name}</h3>
            <p>{course.instructor}</p>
          </div>
          <div className="card-buttons">
            <Link to={`/courses/${course.id}`}>View Details</Link>
            <button onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Cancel' : 'Enroll'}
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="form-container">
          <EnrollmentForm onEnroll={handleEnroll} onCancel={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
};

export default CourseCard;
