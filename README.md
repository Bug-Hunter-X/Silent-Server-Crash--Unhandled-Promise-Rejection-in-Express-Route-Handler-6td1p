# Silent Server Crash: Unhandled Promise Rejection in Express Route Handler

This repository demonstrates a common yet often overlooked error in Express.js applications: silent server crashes due to unhandled promise rejections within asynchronous route handlers.

## The Problem

The `bug.js` file contains an Express.js server with a route (`/error`) that uses an asynchronous function which may reject a promise.  Crucially, the `catch` block only logs the error to the console; it does not handle the rejection gracefully, causing the server to crash without a clear indication of the problem.

## The Solution

The `bugSolution.js` file presents a corrected version.  It properly handles the promise rejection within the `catch` block, preventing the server from crashing and providing a more informative response to the client.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Access `/error` in your browser. Observe the silent crash (or lack of response).
5. Run `node bugSolution.js`.
6. Access `/error` again.  The server should respond with an error message.