import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useCourseActions from '../hooks/useCourseActions';
import './CourseDetails.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const {
    course,
    enrolled,
    completed,
    handleEnroll,
    handleUnenroll,
    handleMarkCompleted
  } = useCourseActions(parseInt(courseId));

  const [syllabusOpen, setSyllabusOpen] = useState(false);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-details">
      <h2>{course.name}</h2>
      <p className="instructor"><strong>Instructor:</strong> {course.instructor}</p>
      <p className="description">{course.description}</p>
      <p className="duration"><strong>Duration:</strong> {course.duration}</p>
      <p className="schedule"><strong>Schedule:</strong> {course.schedule}</p>
      <p className="location"><strong>Location:</strong> {course.location}</p>
      <p className="enrollmentStatus"><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p className="prerequisites"><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      <div onClick={() => setSyllabusOpen(!syllabusOpen)} style={{cursor: 'pointer'}}>
        <h3>Syllabus {syllabusOpen ? '▲' : '▼'}</h3>
      </div>
      {syllabusOpen && (
        <ul>
          {course.syllabus.map((item, index) => (
            <li key={index}>
              <strong>Week {item.week}: {item.topic}</strong>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
      <div className="course-actions">
        {enrolled ? (
          <>
            <button onClick={handleUnenroll}>Unenroll</button>
            {!completed && <button onClick={handleMarkCompleted}>Mark as Completed</button>}
          </>
        ) : (
          <button onClick={handleEnroll}>Enroll</button>
        )}
      </div>
      {completed && <p className="completed-badge">Completed</p>}
      <Link to="/">Back to Courses</Link>
    </div>
  );
};

export default CourseDetails;
