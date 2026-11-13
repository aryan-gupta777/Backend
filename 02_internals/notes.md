
# Node.js Internals

## 1. JavaScript Engine

- JS has an engine that reads, interprets, and executes JavaScript code.
- A JavaScript engine runs inside the browser.

### Web APIs

The following are provided by the browser and are not necessarily part of core JavaScript:

- `setInterval()`
- `fetch()`
- Async operations
- Promises
- DOM

The browser also provides the Console.

## 2. Libuv

Libuv provides:

- Event Loop
- Thread Pool
- Non-blocking operations

### Node.js Architecture

**V8 + C++ + Libuv = Node.js**

| Component | Responsibility |
|---|---|
| V8 | JavaScript Engine |
| C++ | Connects and implements Node.js functionality |
| Libuv | Event Loop, Thread Pool, Non-blocking I/O |

---

## 3. Two Ways to Run a JavaScript File

1. Run JavaScript in the browser's console.
2. Run JavaScript using Node.js in your terminal.

```bash
node filename.js
```

As soon as you execute `node filename.js`, Node.js creates a process with a main thread.


## 4. What Happens When Node.js Starts?

The execution process follows these steps:

1. Initialize the project.
2. Execute top-level code.
3. Process import statements.
4. Register event callbacks.
5. Start the Event Loop.

### Top-Level Code

Top-level code includes:

- Variable assignments
- `if-else` statements
- `console.log()`
- Other synchronous statements

Top-level code executes first.

After executing top-level code:

1. Imports are completed.
2. Event callbacks are registered.
3. The Event Loop starts.

**Note:** Callback functions are registered, not immediately executed.

---

## 5. Event Loop

The Event Loop continuously checks and executes pending callbacks.

### Event Loop Phases

1. Expired / Timer Callbacks
2. I/O Polling
3. Set Immediate
4. Close Callbacks

### Event Loop Working

```text
while (true) {

    Expired Callbacks();

    I/O Polling();

    Set Immediate();

    Close Callbacks();

    Check if anything is pending;

    If nothing is pending:
        Exit;

    Otherwise:
        Continue;
}
```

### Important Points

- Expired callbacks are executed first.
- I/O Polling checks whether asynchronous I/O operations have completed and executes their callbacks.
- `setImmediate()` callbacks are executed in the check phase.
- Close callbacks handle closing events.

---

## 6. SIGINT Signal

When you press `Ctrl + C` in the terminal:

- It sends a `SIGINT` signal.
- The process receives the signal.
- Node.js can perform cleanup before terminating the process.

---

## 7. Callback Example

```javascript
const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
    console.log(data);
});
```

In this example:

- `fs.readFile()` performs an asynchronous file-reading operation.
- The callback function is registered.
- The callback executes when the operation completes.

---

## 8. Blocking Code

**Blocking code should be avoided** because it blocks the main thread.

When the main thread is blocked, it cannot process other JavaScript operations.

---

## 9. Thread Pool

- Thread Pool is a pool of worker threads.
- Libuv manages the Thread Pool.
- By default, the Thread Pool contains **4 threads**.
- The JavaScript main thread works independently.

### Thread Pool Working

When certain operations require background processing, Libuv can assign them to worker threads.

The Event Loop can continue handling other operations while these tasks are being processed.

### Important Points

- The default Thread Pool size is 4.
- You cannot directly decide which worker thread handles a particular task.
- The Event Loop checks whether asynchronous operations have completed.
- JavaScript executes on the main thread.

---

## 10. Node.js Architecture Diagram

```text
              NODE.JS PROCESS
                     |
          +----------+----------+
          |                     |
      Main Thread           Thread Pool
          |                     |
     Initialize Project     Worker Threads
          |                     |
      Top-Level Code        Background Tasks
          |
     Import Statements
          |
   Event Callback Register
          |
     Start Event Loop
          |
          v
      Event Loop
          |
    +-----+-----+---------+----------+
    |           |         |          |
  Timers     I/O Poll  SetImmediate  Close
    |           |         |          |
    +-----------+---------+----------+
                     |
              Check Pending Tasks
                     |
              +------+------+
              |             |
             Yes            No
              |             |
          Continue         Exit
```

---

## Quick Revision

| Term | Meaning |
|---|---|
| V8 | JavaScript Engine |
| Libuv | Provides Event Loop and Thread Pool |
| Event Loop | Handles asynchronous callbacks |
| Thread Pool | Pool of worker threads |
| Web APIs | Browser-provided APIs |
| Top-Level Code | Code executed during initial execution |
| Callback | Function executed after an operation completes |
| SIGINT | Signal sent when pressing Ctrl + C |
| Blocking Code | Code that blocks the main thread |
| Non-blocking I/O | Allows other operations to continue while I/O is processed |

```

**Source:** Your handwritten Node.js Internals notes (3 pages). :chatgpt-content-reference{index="0"}