const INIT_STATE = {
data : [],
subdata : [],
menu_id : '',
submenu_id : '',
menudeleteMessage : '',
submenudeleteMessage : '',
checksubmenu : '',

getpage : '',
getrole : '',
role_id : '',
deleted : '',
spinner : 'end',

member : [],
memberid : '',
deletedmember : '',
ucreationid : '',
ucreation : [],
deleteducreation : '',
pagepermission : [],
rolepermissionid : '',
rolepermission : [] ,
deletepermissionid : '',

h_credentials : '',
getfooterdata : '',
update : 0,
getlinks : [],
editqlink : '',
deletedlink : '',
getmember_web : [],

getcountrys : [],
getfiles : [],
getfilesweb : [],
editfiles : '',
deletedfile : '',

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case 'menuadd': {
        return {
          ...state,
         data: action.payload,
        }
      }
      case 'menuedit': {
        return {
          ...state,
          menu_id: action.payload
        }
      }
      case 'submenuadd': {
        return {
          ...state,
          subdata: action.payload
        }
      }
      case 'submenuedit': {
        return {
          ...state,
          submenu_id : action.payload
        }
      }
      case 'menudeleteMessage': {
        return {
          ...state,
          menudeleteMessage : action.payload
        }
      }
      case 'submenudeleteMessage': {
        return {
          ...state,
          submenudeleteMessage : action.payload
        }
      }
      case 'checksubmenu': {
        return {
          ...state,
          checksubmenu : action.payload
        }
      }

      case 'getpage' : {
        return {
          ...state,
          getpage : action.payload
        }
      }
      case 'getrole' : {
        return {
          ...state,
          getrole : action.payload
        }
      }
      case 'roledit' : {
        return {
          ...state,
          role_id : action.payload
        }
      }
      case 'deleted' : {
        return {
          ...state,
          deleted : action.payload
        }
      }
      case 'setspinner' : {
        return {
          ...state,
          spinner : action.payload
        }
      }

      case 'getmember' : {
        return {
          ...state,
          member : action.payload
        }
      }
      case 'editmember' : {
        return {
          ...state,
          memberid : action.payload
        }
      }
      case 'deletedmember' : {
        return {
          ...state,
          deletedmember : action.payload
        }
      }
      case 'editucreation' : {
        return {
          ...state,
          ucreationid : action.payload
        }
      }
      case 'getucreation' : {
        return {
          ...state,
          ucreation : action.payload
        }
      }
      case 'deleteducreation' : {
        return {
          ...state,
          deleteducreation : action.payload
        }
      }
      case 'pagepermission' : {
        return {
          ...state,
          pagepermission : action.payload
        }
      }
      case 'editrolepermission' : {
        return {
          ...state,
          rolepermissionid : action.payload
        }
      } 
      case 'getrolepermission' : {
        return {
          ...state,
          rolepermission : action.payload
        }
      }
      case 'deletepermission' : {
        return {
          ...state,
          deletepermissionid : action.payload
        }
      }

      case 'hcredentials' : {
        return {
          ...state,
          h_credentials : action.payload
        }
      }

      case 'getfooter' : {
        return {
          ...state,
          getfooterdata : action.payload
        }
      }
      case 'update' : {
        return {
          ...state,
          update : action.payload
        }
      }
      case 'getlink' : {
        return {
          ...state,
          getlinks : action.payload
        }
      }
      case 'editqlink' : {
        return {
          ...state,
          editqlink : action.payload
        }
      }
      case 'deletedlink' : {
        return {
          ...state,
          deletedlink : action.payload
        }
      }
      case 'getmember_web' : {
        return {
          ...state,
          getmember_web : action.payload
        }
      }
      case 'getlinkweb' : {
        return {
          ...state,
          getlinksweb : action.payload
        }
      }
      case 'getcountry' : {
        return {
          ...state,
          getcountrys : action.payload
        }
      }
      case 'getfiles' : {
        return {
          ...state,
          getfiles : action.payload
        }
      }
      case 'getfilesweb' : {
        return {
          ...state,
          getfilesweb : action.payload
        }
      }
      case 'editfiles' : {
        return {
          ...state,
          editfiles : action.payload
        }
      }
      case 'deletedfile' : {
        return {
          ...state,
          deletedfile : action.payload
        }
      }
      case 'seteditor' : {
        return {
          ...state,
          seteditor : action.payload
        }
      }
      default:
        return state;
    }
  }
  