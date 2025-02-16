const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Uncommon error: Server crashes silently due to unhandled promise rejection in a route handler.

app.get('/error', async (req, res) => {
  try {
    const result = await someAsyncOperationThatMightFail();
    res.send(result);
  } catch (error) {
    // Missing error handling, this will crash the server silently
    console.error('Error:', error);
  }
});

function someAsyncOperationThatMightFail() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    reject(new Error('Something went wrong'));
  });
}