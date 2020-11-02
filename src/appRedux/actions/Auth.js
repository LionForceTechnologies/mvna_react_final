import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET
} from "../../constants/ActionTypes";
import axios from 'util/Api'
// https://dktiyxy955yvi.cloudfront.net/
// https://dktiyxy955yvi.cloudfront.net/
// https://dktiyxy955yvi.cloudfront.net/
export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const userSignUp = ({ email, password, name }) => {
  console.log(email, password);
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    localStorage.setItem("token", JSON.stringify('123'));
    axios.defaults.headers.common['authorization'] = "Bearer " + '123';
    dispatch({ type: FETCH_SUCCESS });
    dispatch({ type: USER_TOKEN_SET, payload: '123' });
    dispatch({ type: USER_DATA, payload: '123' });
    // axios.post('auth/register', {
    //     email: email,
    //     password: password,
    //     name: name
    //   }
    // ).then(({data}) => {
    //   console.log("data:", data);
    //   if (data.result) {

    //   } else {
    //     console.log("payload: data.error", data.error);
    //     dispatch({type: FETCH_ERROR, payload: "Network Error"});
    //   }
    // }).catch(function (error) {
    //   dispatch({type: FETCH_ERROR, payload: error.message});
    //   console.log("Error****:", error.message);
    // });
  }
};

export const userSignIn = ({ email, password }) => {
      delete axios.defaults.headers.common['Authorization']
      delete axios.defaults.headers.common['roleId']
      delete axios.defaults.headers.common['userlogid']
      delete axios.defaults.headers.common['id']
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    dispatch({
      type: 'startlogin',
      payload: 'start'
    });
    axios.post('https://dktiyxy955yvi.cloudfront.net/auth/login', {
      email: email,
      password: password,
    }
    ).then((data) => {
      // console.log("userSignIn: ",data.data.Token); 
      localStorage.setItem('signout','')
      console.log('success agirchi')
      console.log(data)
      let tok = "Bearer " + data.data.Token
      localStorage.setItem("token", tok);
      axios.defaults.headers.common['Authorization'] = "Bearer " + data.data.Token;
      axios.defaults.headers.common['roleId'] = data.data.userdetail.roleId;
      axios.defaults.headers.common['userlogid'] = data.data.userdetail.userlogid
      axios.defaults.headers.common['id'] = data.data.userdetail.id
      localStorage.setItem('roleId', data.data.userdetail.roleId)
      localStorage.setItem('userlogid', data.data.userdetail.userlogid)
      localStorage.setItem('id', data.data.userdetail.id)
      dispatch({
        type: 'logsuccess',
        payload: 'success'
      })
      dispatch({ type: FETCH_SUCCESS });
      dispatch({ type: USER_TOKEN_SET, payload: '123' });
      dispatch({
        type: 'startlogin',
        payload: 'end'
      });
    }).catch(function (error) {

      dispatch({ type: FETCH_ERROR, payload: error.message });
      console.log("Error****:", error.message);
      dispatch({
        type: 'logsuccess',
        payload: 'fail'
      })
      dispatch({
        type: 'startlogin',
        payload: 'end'
      });
    });
  }
};
export const clearlogsuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'logsuccess',
      payload: ''
    })

  }
};
export const getUser = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.post('auth/me',
    ).then(({ data }) => {
      console.log("userSignIn: ", data);
      if (data.result) {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: USER_DATA, payload: data.user });
      } else {
        dispatch({ type: FETCH_ERROR, payload: data.error });
      }
    }).catch(function (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
      console.log("Error****:", error.message);
    });
  }
};


export const userSignOut = () => {

  return (dispatch) => {
    dispatch({ type: FETCH_START });
    localStorage.removeItem("token");
    dispatch({ type: FETCH_SUCCESS });
    dispatch({ type: SIGNOUT_USER_SUCCESS });
    // axios.post('auth/logout').then(({data}) => {
    //   console.log("log out",data)
    //   if (data.result) {
    //     localStorage.removeItem("token");
    //     dispatch({type: FETCH_SUCCESS});
    //     dispatch({type: SIGNOUT_USER_SUCCESS});
    //   } else {
    //     dispatch({type: FETCH_ERROR, payload: data.error});
    //   }
    // }).catch(function (error) {
    //   dispatch({type: FETCH_ERROR, payload: error.message});
    //   console.log("Error****:", error.message);
    // });
  }
};
export const clearsignout = () => {

  return (dispatch) => {
    dispatch({ type: 'clearsignout' });
    // axios.post('auth/logout').then(({data}) => {
    //   console.log("log out",data)
    //   if (data.result) {
    //     localStorage.removeItem("token");
    //     dispatch({type: FETCH_SUCCESS});
    //     dispatch({type: SIGNOUT_USER_SUCCESS});
    //   } else {
    //     dispatch({type: FETCH_ERROR, payload: data.error});
    //   }
    // }).catch(function (error) {
    //   dispatch({type: FETCH_ERROR, payload: error.message});
    //   console.log("Error****:", error.message);
    // });
  }
};
