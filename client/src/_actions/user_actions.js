import axios from "axios";
import { Login_User } from "../_reducers/types";


export function loginUser(dataToSubmit){

    const request = axios.post('/api/user/login', dataToSubmit)
        .then(response => response.data);
    
    return {
        type: Login_User,
        payload: request
    }
}