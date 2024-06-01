import React from "react";
import { Link } from "react-router-dom";
import useCourseActions from "../hooks/useCourseActions";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const {
    enrolled,
    completed,
    handleEnroll,
    handleUnenroll,
    handleMarkCompleted,
  } = useCourseActions(course.id);

  return (
    <div className="card">
      <h3 className="card-title">{course.name}</h3>
      <div className="card-content">
        <div className="card-details">
          <p className="instructor">{course.instructor}</p>
          <p className="duration">{course.duration}</p>
          <p className="schedule">{course.schedule}</p>
        </div>
        <div className="card-buttons">
          <Link to={`/courses/${course.id}`}>View Details</Link>
          {enrolled ? (
            <>
              <button onClick={handleUnenroll}>Unenroll</button>
              {!completed && (
                <button onClick={handleMarkCompleted}>Mark as Completed</button>
              )}
            </>
          ) : (
            <button onClick={handleEnroll}>Enroll</button>
          )}
        </div>
      </div>
      {completed && <p className="completed-badge">Completed</p>}
    </div>
  );
};

export default CourseCard;
