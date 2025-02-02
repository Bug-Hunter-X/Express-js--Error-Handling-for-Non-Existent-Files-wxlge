# Express.js: Error Handling for Non-Existent Files

This repository demonstrates a common error in Express.js applications: attempting to serve a file that does not exist. The `res.sendFile()` method will throw an error if the specified file path is invalid.  This example shows how to properly handle such errors and gracefully respond to the client.

## Bug

The `bug.js` file contains an Express.js application that attempts to serve `'./index.html'`. If this file does not exist in the same directory as the server file, the application will crash.

## Solution

The `bugSolution.js` file demonstrates a robust solution using error handling. It uses a `try...catch` block to catch potential errors from `res.sendFile()` and sends a suitable response to the client if the file is not found.