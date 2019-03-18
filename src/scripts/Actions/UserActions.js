import Cookies from "universal-cookie";
import api from '../Api'

var cookie = new Cookies;

export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_REQUEST_FAILED = 'AUTH_REQUEST_FAILED'
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export function Login(login, pass) {
  api('POST','Users','auth',{login:login, pass:pass})
  .then(response=>{
    if(response.Token)
    {
      cookie.set('token', response.Token)
      return {
        type: AUTH_REQUEST_SUCCESS,
        token: response.Token
      }}
    })     
  .catch(error=>{
    cookie.set('token', '')
    return {
      type: AUTH_REQUEST_FAILED,
      error: error
    }})
}
   
export function Logout(token) {
  cookie.set('token', '')
  return {
    type: AUTH_LOGOUT,
    token: ''
  };
}
