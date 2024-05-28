import io from 'socket.io-client';
import {num} from "../util/num";
const socket = io('http://localhost:3001');



export async function POST(req:any, res:any) {

    try {
        // (like database operations, etc.)


        let array:string[] =['Hello','🥲','😂','😘','🤣','😍','😁','🙌','💕','💌']

        socket.emit('message1', {message:array[num]});

        // @ts-ignore
        if (num == 9) {num=0}
        // @ts-ignore
        num++

        // return res.json({ data: 'Success' }, { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        // return res.json({ error: error }, { status: 200 })
    }

}