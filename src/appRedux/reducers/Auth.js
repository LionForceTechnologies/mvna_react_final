import {INIT_URL, SIGNOUT_USER_SUCCESS, USER_DATA, USER_TOKEN_SET} from "../../constants/ActionTypes";
import React, {memo, useEffect} from "react";
import {Redirect, Route, Switch, useHistory, useLocation, useRouteMatch} from "react-router-dom";
const INIT_STATE = {
  token: localStorage.getItem('token'),
  initURL: '',
  authUser: localStorage.getItem('user'),
  signout : ''
};
 
export default (state = INIT_STATE, action) => {
  switch (action.type) {


    case INIT_URL: {
      return {...state, initURL: action.payload};
    }

    case SIGNOUT_USER_SUCCESS: {
      localStorage.setItem('signout','success')
      
      return {
        ...state,
        token: null,
        authUser: null,
        initURL: '',
        signout: 'success'
        // (<Redirect to="/signin" /> )
      }
    }
    case 'clearsignout': {
      // let a = <Redirect to="/signin" />
      return {
        ...state,
        signout: ''
        // (<Redirect to="/signin" /> )
      }
    }

    case USER_DATA: {
      return {
        ...state,
        authUser: action.payload,
      };
    }

    case USER_TOKEN_SET: {
      return {
        ...state,
        token: action.payload,
      };
    }

    default:
      return state;
  }
}
