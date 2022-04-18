import {Login_User} from './types';

export default function(state = {}, action) {

    switch(action.type){

        case Login_User:
            return {...state, loginSuccess: action.payload}
        break;

        default:
            return state;
        break

    }

}