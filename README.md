# Course Management Dashboard

This is a React-based Course Management Dashboard application. The application allows users to view a list of courses, enroll or unenroll from courses, mark courses as completed, and view detailed information about each course. The app is fully responsive and provides a smooth user experience across different devices.

## Features

- User authentication (login/logout)
- View a list of available courses
- Search courses by name or instructor
- View detailed information about each course
- Enroll in and unenroll from courses
- Mark courses as completed
- Responsive design for mobile and desktop

## User Flow

1. **Login**: The user starts on the login screen. After entering valid credentials, the user is redirected to the dashboard.
2. **Dashboard**: The user sees a list of enrolled courses with options to view details, mark as completed, or unenroll.
3. **Course List**: The user can view all available courses, search for specific courses, and enroll in new courses.
4. **Course Details**: The user can view detailed information about a course and enroll or unenroll from the course directly.
5. **Logout**: The user can log out, ending the session.

## Dependencies

- React
- Redux (for state management)
- React Router (for routing)
- Axios (for HTTP requests)
- Node.js (for running the development server)
- Express (for the backend API)
- React-Redux (bindings for React and Redux)
- react-router-dom (bindings for React Router)
- Redux Toolkit (for easier Redux setup)

## Setup and Installation

1. **Install frontend dependencies**:
    ```bash
    cd course-app
    npm install
    ```

2. **Install backend dependencies**:
    ```bash
    cd course-backend
    npm install
    cd ..
    ```

3. **Change the backend IP Address**:
    Change the API IP Address in `course-app/src/features/courses/coursesSlice.js` to that of your machine.

## Running the Application

1. **Start the backend server**:
    ```bash
    cd course-backend
    node index.js
    ```

2. **Start the frontend development server**:
    ```bash
    cd course-app
    npm start
    ```

3. **Access the application**:
    Open your web browser and navigate to `http://localhost:3000`.

