import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  courses: [],
  status: 'idle',
  error: null,
  enrolledCourses: JSON.parse(localStorage.getItem('enrolledCourses')) || [],
};

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get(`http://192.168.29.36:5000/api/courses`);
  return response.data;
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      const course = state.courses.find(course => course.id === action.payload.courseId);
      if (course) {
        state.enrolledCourses.push({ ...course, completed: false });
        localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
      }
    },
    unenrollCourse: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(course => course.id !== action.payload.courseId);
      localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
    },
    markCourseCompleted: (state, action) => {
      const course = state.enrolledCourses.find(course => course.id === action.payload.courseId);
      if (course) {
        course.completed = true;
        localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { enrollCourse, unenrollCourse, markCourseCompleted } = coursesSlice.actions;

export default coursesSlice.reducer;
