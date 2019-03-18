import Cookies from "universal-cookie";
import * as types from '../Actions/UserActions'

var cookie = new Cookies;

const initialState = {
    token :  cookie.get('token'),
    error : ''
  }

export default function  User(state = initialState, action) {
    switch (action.type) {
  
      case types.AUTH_REQUEST:
        return {
          ...state,
          token : action.token
        }

      case types.AUTH_REQUEST_FAILED:
        return {
          ...state,
          error : action.error
        } 

      case types.AUTH_REQUEST_SUCCESS:
        return {
          ...state,
          token : action.token
        }

      case types.AUTH_LOGOUT:
        return{
          ...state,
          token: action.token
        }

      default:
        return state;
    }
  }