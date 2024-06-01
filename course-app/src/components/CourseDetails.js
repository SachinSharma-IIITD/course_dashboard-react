import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import EnrollmentForm from './EnrollmentForm';
import { enrollCourse } from '../features/courses/coursesSlice';
import './CourseDetails.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = useSelector((state) =>
    state.courses.courses.find(course => course.id === parseInt(courseId))
  );
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const handleEnroll = (student) => {
    dispatch(enrollCourse({ courseId: course.id, student }));
    setShowForm(false);
  };

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="details-container">
      <h2>{course.name}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      <div className="syllabus">
        <h3>Syllabus</h3>
        <ul>
          {course.syllabus.map((week, index) => (
            <li key={index}>
              <strong>Week {week.week}:</strong> {week.topic} - {week.content}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Enroll'}
      </button>
      {showForm && <EnrollmentForm onEnroll={handleEnroll} />}
    </div>
  );
};

export default CourseDetails;
