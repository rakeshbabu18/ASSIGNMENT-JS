const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// Published courses
const publishedCourses = courses.filter(c => c.published);

// Sort by price (high → low)
const sortedByPrice = [...publishedCourses].sort((a, b) => b.price - a.price);

// Extract title & price
const courseSummary = publishedCourses.map(({ title, price }) => ({ title, price }));

// Total value of published courses
const totalCourseValue = publishedCourses.reduce((sum, c) => sum + c.price, 0);

// Add new course immutably
const newCourse = { id: 104, title: "MongoDB", price: 1199, published: true };
const updatedCourses = [...courses, newCourse];
