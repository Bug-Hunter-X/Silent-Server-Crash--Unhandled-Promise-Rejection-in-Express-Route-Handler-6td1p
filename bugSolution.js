const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/error', async (req, res) => {
  try {
    const result = await someAsyncOperationThatMightFail();
    res.send(result);
  } catch (error) {
    // Proper error handling
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

function someAsyncOperationThatMightFail() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    reject(new Error('Something went wrong'));
  });
}