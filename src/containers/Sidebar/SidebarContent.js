import React from "react";
import {useSelector} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";

const SidebarContent = () => {

  let {navStyle, themeType} = useSelector(({settings}) => settings);
  let {pathname} = useSelector(({common}) => common);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (<>

      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <Menu.Item key="role">
              <Link to="/role"><i className="icon icon-widgets"/>
                <span>Role</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="User Creation">
              <Link to="/creation"><i className="icon icon-widgets"/>
                <span>User Creation</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="Role permission">
              <Link to="/rolepermission"><i className="icon icon-widgets"/>
                <span>Role permission</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="Menu">
              <Link to="/sample"><i className="icon icon-widgets"/>
                <span>Menu</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="Page Creation">
              <Link to="/pagecreation"><i className="icon icon-widgets"/>
                <span>Page Creation</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="Member">
              <Link to="/member"><i className="icon icon-widgets"/>
                <span>Member</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="footer">
              <Link to="/footer"><i className="icon icon-widgets"/>
                <span>Footer</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="quicklinks">
              <Link to="/quicklinks"><i className="icon icon-widgets"/>
                <span>Quick Links</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="fileupload">
              <Link to="/fileupload"><i className="icon icon-widgets"/>
                <span>File Upload</span>
              </Link>              
            </Menu.Item>            
          </Menu>
          
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;

