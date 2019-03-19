import Cookies from "universal-cookie";
import api from "../Api";

var cookie = new Cookies();

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_REQUEST_FAILED = "AUTH_REQUEST_FAILED";
export const AUTH_REQUEST_SUCCESS = "AUTH_REQUEST_SUCCESS";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export function Login(login, pass, saved) {
  return (dispatch) =>{
    api("POST", "Users", "auth", { login: login, pass: pass })
      .then(response => {
        if (response.Token) {
          if(saved)
            cookie.set("token", response.Token);
          dispatch({
            type: AUTH_REQUEST_SUCCESS,
            token: response.Token
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

export function Logout(token) {
  return (dispatch) =>{
    api("POST", "Users", "Logout", { token: token })
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
