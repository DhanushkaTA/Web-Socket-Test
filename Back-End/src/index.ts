import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();

// Enable CORS for all origins
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001", // Allow requests from this origin
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');


    let array:string[] =['Hello','🥲','😂','😘','🤣','😍','😁','🙌','💕','💌','🎉','🏫',
        'Hello','🥲','😂','😘','🤣','😍','😁','🙌','💕','💌','🎉','🏫',
        'Hello','🥲','😂','😘','🤣','😍','😁','🙌','💕','💌','🎉','🏫','Hello',
        '🥲','😂','😘','🤣','😍','😁','🙌','💕','💌','🎉','🏫','Hello','🥲','😂','😘','🤣','😍','😁','🙌','💕','💌','🎉','🏫',
        'Hello','🥲','😂','😘','🤣','😍','😁','🙌','💕','💌','🎉','🏫','Hello','🥲','😂','😘','🤣','😍','😁','🙌','💕','💌','🎉','PPP']


   

    array.map(value => {
        // Send data to the client
        socket.emit('message', { message: value });
    })



    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});




server.listen(3000, () => {
    console.log('listening on *:3000');
});
