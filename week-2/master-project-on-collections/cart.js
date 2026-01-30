const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];


// Merge cart with course details
const detailedCart = cart.map(item => {
  const course = courses.find(c => c.id === item.courseId);
  return {
    ...course,
    qty: item.qty,
    total: course.price * item.qty
  };
});

// Total cart amount
const cartTotal = detailedCart.reduce((sum, item) => sum + item.total, 0);

// Increase quantity immutably (courseId = 101)
const updatedCart = cart.map(item =>
  item.courseId === 101
    ? { ...item, qty: item.qty + 1 }
    : item
);

// Remove course from cart (courseId = 103)
const filteredCart = cart.filter(item => item.courseId !== 103);

// Check if all cart items are paid courses
const allPaidCourses = detailedCart.every(item => item.price > 0);
