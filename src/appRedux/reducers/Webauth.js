const INIT_STATE = {
    logsuccess: '',
    startlogin: 'end',
    getfooterwebdata : '',
    getlinksweb : [],
    webmenu : [],
    seteditor : '',
    get_webpage : '',
    gettwitters : [],
    getglobelsearch : []
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'logsuccess': {
            return {
                ...state,
                logsuccess: action.payload
            }
        }
        case 'startlogin': {
            return {
                ...state,
                startlogin: action.payload
            }
        }
        case 'getfooterweb' : {
            return {
              ...state,
              getfooterwebdata : action.payload
            }
          }
          case 'getlinkweb' : {
            return {
              ...state,
              getlinksweb : action.payload
            }
          }  
          case 'webmenu' : {
            return {
              ...state,
              webmenu : action.payload
            }
          }
          case 'seteditor' : {
            return {
              ...state,
              seteditor : action.payload
            }
          }
          case 'get_webpage' : {
            return {
              ...state,
              get_webpage : action.payload
            }
          }
          case 'gettwitters' : {
            return {
              ...state,
              gettwitters : action.payload
            }
          }
          case 'getglobelsearch' : {
            return {
              ...state,
              getglobelsearch : action.payload
            }
          }
          
        default:
            return state;
    }

}
