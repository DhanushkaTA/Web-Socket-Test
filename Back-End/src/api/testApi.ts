import io from 'socket.io-client';
import {num} from "../util/num";
const socket = io('http://localhost:3001');


// this is a sample method we can edite this
//this method use to send data to front end as a common class
//this method call server socket (message1)
//then message 2/3 send data to front end
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