const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const courses = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: './thumbnails/png-clipart-training-computer-icons-educational-technology-course-training-blue-text-thumbnail.png',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native, setting up your development environment.' },
      { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app using React Native components.' },
      // Additional weeks and topics...
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com' },
      // Additional enrolled students...
    ],
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    instructor: 'Jane Doe',
    description: 'Deep dive into advanced JavaScript concepts and improve your coding skills.',
    enrollmentStatus: 'Open',
    thumbnail: './thumbnails/png-clipart-training-computer-icons-educational-technology-course-training-blue-text-thumbnail.png',
    duration: '6 weeks',
    schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge'],
    syllabus: [
      { week: 1, topic: 'Closures and Scopes', content: 'Understanding closures and scopes in JavaScript.' },
      { week: 2, topic: 'Asynchronous JavaScript', content: 'Promises, async/await, and event loop.' },
      // Additional weeks and topics...
    ],
    students: [
      { id: 201, name: 'Charlie Brown', email: 'charlie@example.com' },
      { id: 202, name: 'Diana Prince', email: 'diana@example.com' },
      // Additional enrolled students...
    ],
  },
  {
    id: 3,
    name: 'Introduction to Python',
    instructor: 'John Doe',
    description: 'Learn the basics of Python programming.',
    enrollmentStatus: 'Open',
    thumbnail: './thumbnails/png-clipart-training-computer-icons-educational-technology-course-training-blue-text-thumbnail.png',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['No prior programming knowledge required'],
    syllabus: [
      { week: 1, topic: 'Python Basics', content: 'Understanding Python syntax and data types.' },
      { week: 2, topic: 'Control Flow', content: 'Learn about control flow in Python.' },
      // Additional weeks and topics...
    ],
    students: [
      { id: 301, name: 'Eve Adams', email: 'eve@example.com' },
      { id: 302, name: 'Frank Johnson', email: 'frank@example.com' },
      // Additional enrolled students...
    ],
  },
  {
    id: 4,
    name: 'Data Structures and Algorithms',
    instructor: 'Jane Smith',
    description: 'Learn about various data structures and algorithms.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '10 weeks',
    schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic programming knowledge'],
    syllabus: [
      { week: 1, topic: 'Introduction to Data Structures', content: 'Understanding various data structures.' },
      { week: 2, topic: 'Introduction to Algorithms', content: 'Learn about various algorithms.' },
      // Additional weeks and topics...
    ],
    students: [
      { id: 401, name: 'Grace Lee', email: 'grace@example.com' },
      { id: 402, name: 'Harry Potter', email: 'harry@example.com' },
      // Additional enrolled students...
    ],
  },
  // Add more course objects here...
];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id, 10);
  const course = courses.find(c => c.id === courseId);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
