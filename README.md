# Silent Crash in Node.js Server

This repository demonstrates a subtle bug in a Node.js HTTP server where the server crashes silently without providing any error messages to the console or client.  The issue arises from failing to send a response to the client's request.

## The Bug

The `bug.js` file contains a minimal HTTP server setup. However, it lacks a `res.end()` or similar call within the request handler. This omission prevents the server from completing the request-response cycle, ultimately leading to a crash.

## The Solution

The `bugSolution.js` file shows the corrected version.  A simple `res.end()` call has been added to send a basic response to the client, resolving the silent crash issue.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Observe that the server starts and then immediately crashes without any clear indication of the problem. The only clue is the server becoming unresponsive.
5. Run `node bugSolution.js`. The server starts and responds correctly.