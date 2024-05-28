import {sk} from "../index";

export const sendResponse = () => {
    if (sk){
        sk.emit('message2', { message: 'Kohomada' });
        sk.emit('message3', { message: '🔥😁😍🤣💕💌' });
    }else {
        console.log('Waiting for user connect.................')
    }

}