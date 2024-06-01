import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses, enrollCourse, unenrollCourse, markCourseCompleted } from '../features/courses/coursesSlice';
import './CourseList.css';
import CourseCard from './CourseCard';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        className="search-input"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="course-cards">
        {filteredCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={() => dispatch(enrollCourse({ courseId: course.id }))}
            onUnenroll={() => dispatch(unenrollCourse({ courseId: course.id }))}
            onMarkCompleted={() => dispatch(markCourseCompleted({ courseId: course.id }))}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
