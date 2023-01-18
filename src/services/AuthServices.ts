import {Api} from "../providers"
import { IProjectData, IUserData, LoginData } from "../types"
Api.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
Api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const login =  (data : LoginData) => {
  
  return  Api.post("/auth/login",data);
}
const logout=  () => {
  return  Api.post('/auth/logout');
}
const signup=  (data : IUserData) => {
  return  Api.post('/auth/signup',data);
}

export const AuthServices = {
    login,
    logout,
    signup
}