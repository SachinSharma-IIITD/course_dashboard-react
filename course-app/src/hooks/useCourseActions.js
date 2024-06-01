import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse, unenrollCourse, markCourseCompleted } from '../features/courses/coursesSlice';

const useCourseActions = (courseId) => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.courses.find(c => c.id === courseId));
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const enrolled = enrolledCourses.some(c => c.id === courseId);
  const completed = enrolledCourses.some(c => c.id === courseId && c.completed);

  const handleEnroll = () => {
    dispatch(enrollCourse({ courseId }));
  };

  const handleUnenroll = () => {
    dispatch(unenrollCourse({ courseId }));
  };

  const handleMarkCompleted = () => {
    dispatch(markCourseCompleted({ courseId }));
  };

  return { course, enrolled, completed, handleEnroll, handleUnenroll, handleMarkCompleted };
};

export default useCourseActions;
