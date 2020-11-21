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
  if(localStorage.getItem('webloginid') == null || localStorage.getItem('webloginid') == 'undefined'){
    delete axios.defaults.headers.common['webloginid']
  }else{
    axios.defaults.headers.common['webloginid'] = localStorage.getItem('webloginid')
  }
    delete axios.defaults.headers.common['Authorization']
    delete axios.defaults.headers.common['roleId']
    delete axios.defaults.headers.common['userlogid']
    delete axios.defaults.headers.common['id']
  export const webSignIn = ({ email, password }) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      dispatch({
        type: 'startlogin',
        payload: 'start'
      });      
      
      axios.post('https://dktiyxy955yvi.cloudfront.net/auth/web_login', {
        email: email,
        password: password,
      }
      ).then((data) => {
        localStorage.removeItem("token");
        localStorage.setItem('signout','success')
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: SIGNOUT_USER_SUCCESS });
        delete axios.defaults.headers.common['Authorization']
        delete axios.defaults.headers.common['roleId']
        delete axios.defaults.headers.common['userlogid']
        delete axios.defaults.headers.common['id']
        

        
        let hcredentials = {
          role_id: data.data.userdetail.role_id,
          userlog_id: data.data.userdetail.userlog_id
        }
        axios.defaults.headers.common['webloginid'] = data.data.userdetail.id 
        localStorage.setItem('webloginid',data.data.userdetail.id)
        localStorage.setItem('webloginroleid',data.data.userdetail.roleId)
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

        let url = `/${localStorage.getItem('url')}`;
        if(localStorage.getItem('url') == null){
          url = `/`
        }

        axios.get('https://dktiyxy955yvi.cloudfront.net/api/web_menu',{
          headers : {
            webloginroleid: localStorage.getItem('webloginroleid'),          
            url : url 
          }
        }).then((res) => {
          dispatch({
            type: 'webmenu',
            payload: res.data.data
          })
        }).catch(function (error) {
    
        });













      }).catch(function (error) {
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
    let url = `/${localStorage.getItem('url')}`;
    if(localStorage.getItem('url') == null){
      url = `/`
    }
    delete axios.defaults.headers.common['Authorization']
    delete axios.defaults.headers.common['roleId']
    delete axios.defaults.headers.common['userlogid']
    delete axios.defaults.headers.common['id']

    return (dispatch) => {
let role_id = localStorage.getItem('webloginroleid')
      if(localStorage.getItem('webloginroleid') == 'undefined' || localStorage.getItem('webloginroleid') == null){
        role_id = 2
}
      axios.get('https://dktiyxy955yvi.cloudfront.net/api/web_menu',{
        headers : {
          webloginroleid: role_id,          
          url : url 
        }
      }).then((res) => {
        dispatch({
          type: 'webmenu',
          payload: res.data.data
        })
      }).catch(function (error) {
  
      });
      localStorage.removeItem("token");
      localStorage.setItem('signout','success')
      dispatch({ type: FETCH_SUCCESS });
      dispatch({ type: SIGNOUT_USER_SUCCESS });  
    }
  };
  export const getlinkweb = (data) => {
    return (dispatch) => {
      axios.get('https://dktiyxy955yvi.cloudfront.net/api/quicklink?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
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
      axios.get('https://dktiyxy955yvi.cloudfront.net/api/footer?items_per_page=10&current_page_no=1&search=&status_connection=1').then((res) => {
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
    let url = `/${localStorage.getItem('url')}`;
    if(localStorage.getItem('url') == null){
      url = `/`
    }
    return (dispatch) => {
      let api = `https://dktiyxy955yvi.cloudfront.net/api/get_page/${data}`
      if(data == null){
  api = "https://dktiyxy955yvi.cloudfront.net/api/"
      }
      axios.get(`${api}`,  {
        headers: {
          "Access-Control-Allow-Origin": "*",        
          webloginroleid: localStorage.getItem('webloginroleid'),
          url : url
        }
      } ).then((res) => {
        if (res.data.length == 0) {
          // dispatch({ type: 'seteditor', payload: '0' })
        }
        else {
          // dispatch({ type: 'seteditor', payload: res.data[0].id })
          dispatch({ type: 'get_webpage', payload: res.data })
        }
      }).catch((error) => {
  
      })
    }
  };
  export const gettwitter = (data) => {
    return (dispatch) => {
      axios.get('https://dktiyxy955yvi.cloudfront.net/api/twitter?items_per_page=10&current_page_no=').then((res) => {
        dispatch({
          type: 'gettwitters',
          payload: res.data.data
        })
      }).catch(function (error) {
  
      });
    }
  };
  export const getmemberweb = (data) => {
    return (dispatch) => {
      axios.get('https://dktiyxy955yvi.cloudfront.net/api/member?items_per_page=&current_page_no=&search=&status_connection=1').then((res) => {
        dispatch({
          type: 'getmember_web',
          payload: res.data.data
        })
      }).catch(function (error) {
  
      });
    }
  };
  export const getmemberwebcountry = (data) => {
    return (dispatch) => {
      axios.get(`https://dktiyxy955yvi.cloudfront.net/api/member?country=${data}`).then((res) => {
        dispatch({
          type: 'getmember_web',
          payload: res.data.data
        })
      }).catch(function (error) {
  
      });
    }
  };
  export const getcountry = (data) => {
    return (dispatch) => {
      axios.get('https://dktiyxy955yvi.cloudfront.net/api/country').then((res) => {
        dispatch({
          type: 'getcountry',
          payload: res.data.data
        })
      }).catch(function (error) {
  
      });
    }
  };
  export const globelsearch = (data) => {
    return (dispatch) => {
      axios.get(`https://dktiyxy955yvi.cloudfront.net/api/search?search=${data}`).then((res) => {
        dispatch({
          type: 'getglobelsearch',
          payload: res.data.data
        })
      }).catch(function (error) {
  
      });
    }
  };
  