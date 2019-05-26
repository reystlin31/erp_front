import Cookies from "universal-cookie";
import api from "../Api";


var cookie = new Cookies();

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_REQUEST_FAILED = "AUTH_REQUEST_FAILED";
export const AUTH_REQUEST_SUCCESS = "AUTH_REQUEST_SUCCESS";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export function Login(login, pass, saved) {
  return (dispatch) =>{
    api("POST", "auth", "login", { login: login, pass: pass })
      .then(response => {
        if (response.token) {
          if(saved)
            cookie.set("token", response.token);
            api("GET", 'user', 'get-by-token',{ token: response.token })
            .then(user=>{
              dispatch({
                type: AUTH_REQUEST_SUCCESS,
                token: response.token,
                user: user
              });
           })
            .catch(error => {
              cookie.set("token", "");
              dispatch({
                type: AUTH_REQUEST_FAILED,
                error: error
              });
            });
        }
      })
      .catch(error => {
        cookie.set("token", "");
        dispatch({
          type: AUTH_REQUEST_FAILED,
          error: error
        });
      });
  }
}

export function Logout() {
  return (dispatch) =>{
    api("GET", "auth", "logout", null)
      .then(response => {
          cookie.set("token", '');
          dispatch({
            type: AUTH_LOGOUT,
            token: '',
            error: ''
          });
      })
      .catch(error => {
        cookie.set("token", '');
          dispatch({
            type: AUTH_LOGOUT,
            token: '',
            error: ''
          });
      });
  }
}

export function Check(token){
  return (dispatch) =>{
            api("GET", 'user', 'get-by-token',null)
            .then(user=>{
              dispatch({
                type: AUTH_REQUEST_SUCCESS,
                token: token,
                user: user
              });
           })
            .catch(error => {
              cookie.set("token", "");
              dispatch({
                type: AUTH_REQUEST_FAILED,
                error: error
              });
            });
        };
}
