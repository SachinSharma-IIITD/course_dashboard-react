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
      const { courseId, student } = action.payload;
      const course = state.courses.find(course => course.id === courseId);
      if (course) {
        course.students.push(student);
        state.enrolledCourses.push(course);
        localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
      }
    },
    markCourseCompleted: (state, action) => {
      const course = state.enrolledCourses.find(course => course.id === action.payload);
      if (course) {
        course.status = 'Completed';
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

export const { enrollCourse, markCourseCompleted } = coursesSlice.actions;

export default coursesSlice.reducer;

// coursesSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   courses: [],
//   status: 'idle',
//   error: null,
//   enrolledCourses: JSON.parse(localStorage.getItem('enrolledCourses')) || [],
// };

// export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
//   const response = await axios.get('/api/courses');
//   return response.data;
// });

// const coursesSlice = createSlice({
//   name: 'courses',
//   initialState,
//   reducers: {
//     enrollCourse: (state, action) => {
//       state.enrolledCourses.push(action.payload);
//       localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
//     },
//     markCourseCompleted: (state, action) => {
//       const course = state.enrolledCourses.find(course => course.id === action.payload);
//       if (course) {
//         course.status = 'Completed';
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCourses.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCourses.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.courses = action.payload;
//       })
//       .addCase(fetchCourses.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { enrollCourse, markCourseCompleted } = coursesSlice.actions;

// export default coursesSlice.reducer;