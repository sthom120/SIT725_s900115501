const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// Serve files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Runs whenever a browser connects
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for a new household expense
    socket.on('newExpense', (expense) => {
        console.log('New expense received:', expense);

        // Send the expense to every connected browser
        io.emit('expenseAdded', expense);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});