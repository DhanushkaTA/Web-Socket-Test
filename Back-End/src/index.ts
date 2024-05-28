import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import {sendResponse} from "./api/Test";

const app = express();

// Enable CORS for all origins
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Allow requests from this origin
        methods: ["GET", "POST"]
    }
});

//use global socket object
export let sk :any= null;

io.on('connection', (socket) => {
    console.log('a user connected');


    //assign given socket to global oblect
    sk=socket

    // array.map(value => {
    //     console.log(value)
    //     // Send data to the client
    //     setInterval(function () {
    //         socket.emit('message', { message: value });
    //     },10000)
    // })
    let interval = setInterval(sendResponse,1000);


    socket.on('disconnect', () => {
        console.log('user disconnected');
        sk=null;
        clearInterval(interval)
    });
});



server.listen(3002, () => {
    console.log('listening on *:3002');
});
