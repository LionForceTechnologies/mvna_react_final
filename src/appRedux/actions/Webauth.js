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
  delete axios.defaults.headers.common['Authorization']
  export const webSignIn = ({ email, password }) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      dispatch({
        type: 'startlogin',
        payload: 'start'
      });
      axios.post('http://localhost:3002/api/auth/web_login', {
        email: email,
        password: password,
      }
      ).then((data) => {
        localStorage.setItem("token", JSON.stringify(data.data.Token));
        let hcredentials = {
          role_id: data.data.userdetail.role_id,
          userlog_id: data.data.userdetail.userlog_id
        }
        localStorage.setItem('hcredentials', JSON.stringify(hcredentials))
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
        // dispatch({ type: 'loginfailed', payload: error.message });
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
  export const getwebmenu = (data) => {
    return (dispatch) => {
      axios.get('http://localhost:3002/api/web_menu',{
        headers : {
          webloginroleid: 1,
        //   webloginid: 1,
          url : `/${localStorage.getItem('url')}` 
        }
      }).then((res) => {
        dispatch({
          type: 'webmenu',
          payload: res.data.data
        })
      }).catch(function (error) {
  
      });
  
    }
  };
  export const getlinkweb = (data) => {
    return (dispatch) => {
      axios.get('http://localhost:3002/api/quicklink?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getlinkweb',
          payload: res.data.data
        })
      }).catch(function (error) {
  
      });
    }
  };
  export const getfooterweb = (data) => {
    return (dispatch) => {
      axios.get('http://localhost:3002/api/footer?items_per_page=10&current_page_no=1&search=&status_connection=1').then((res) => {
      dispatch({
          type: 'getfooterweb',
          payload: res.data
        })
      }).catch(function (error) {
  
      });
  
    }
  };
  export const getwebpage = (data) => {
  
    let header = {
      headers: {
        "Access-Control-Allow-Origin": "*",        
      }
    }
  
    return (dispatch) => {
      let api = `http://localhost:3002/api/get_page/${data}`
      if(data == null){
  api = "http://localhost:3002/api/"
      }
      axios.get(`${api}`,  {
        headers: {
          "Access-Control-Allow-Origin": "*",        
          roleId : 1
        }
      } ).then((res) => {
        // alert();
        // console.log(JSON.parse(res));
        if (res.data.length == 0) {
          dispatch({ type: 'seteditor', payload: '0' })
        }
        else {
          dispatch({ type: 'seteditor', payload: res.data[0].id })
          dispatch({ type: 'get_webpage', payload: res.data })
        }
      }).catch((error) => {
  
      })
    }
  };
  export const gettwitter = (data) => {
    return (dispatch) => {
      axios.get('http://localhost:3002/api/twitter?items_per_page=10&current_page_no=').then((res) => {
        dispatch({
          type: 'gettwitters',
          payload: res.data.data
        })
      }).catch(function (error) {
  
      });
    }
  };