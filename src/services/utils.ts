import { tokenToString } from "typescript";
import AuthContext from "../context/AuthProvider"
import { AuthContextType } from "../types/AuthContextType"
export function authToken(){
    const user_str = localStorage.getItem('user');
    let user = null;

    if(user_str) user = JSON.parse(user_str);
    console.log(user);
    console.log(user_str);
    if(user&&user.token){
        return user.token
    } else {return ''}
    
}

export function getLoggedId(){
    const user_str = localStorage.getItem('user');
    let user = null;

    if(user_str) user = JSON.parse(user_str);
    if(user&&user.userId){
        return user.userId
    } else {return -1} 
}