const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route 1
app.get('/route1', (req, res) => {
  // Simulate an error
  throw new Error('Error in Route 1');
});

// Sample route 2 (normal route)
app.get('/route2', (req, res) => {
  res.send('This is Route 2');
});

app.get('/route2/:id', (req, res) => {
  const paramId = req.params.id * 1;
  if (paramId !== 3) return res.send('This is Route 2');
  throw new Error('Error in Route 2');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error
  res.status(500).send('Something went wrong!'); // Send an error response
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
