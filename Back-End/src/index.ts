import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import {sendResponse} from "./api/Test";
import {POST} from "./api/testApi";

const app = express();

// Enable CORS for all origins
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000", // Allow requests from this origin
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Client connected');


    setInterval(POST,1000);

    socket.on('message1', (data) => {
        console.log('Recieved from API ::', data)
        io.emit('message2', data);
        io.emit('message3', data);
    })


    let interval = setInterval(POST,1000);


    socket.on('disconnect', () => {
        console.log('user disconnected');
        clearInterval(interval)
    });
});


httpServer.listen(3001, () => {
    console.log('listening on *:3001');
});