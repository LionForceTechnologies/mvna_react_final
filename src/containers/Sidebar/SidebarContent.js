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

            <Menu.Item key="admin/role">
              <Link to="/admin/role"><i className="icon icon-widgets"/>
                <span>Role</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="admin/creation">
              <Link to="/admin/creation">
              <i className="icon icon-crypto"/>
                <span>User Creation</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="admin/rolepermission">
              <Link to="/admin/rolepermission">
              <i className="icon icon-crm"/>
                <span>Role permission</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="admin/menu">
              <Link to="/admin/menu">
              <i className="icon icon-apps"/>
                <span>Menu</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="admin/pagecreation">
              <Link to="/admin/pagecreation">
              <i className="icon icon-card"/>
                <span>Page Creation</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="admin/member">
              <Link to="/admin/member"><i className="icon icon-email"/>
                <span>Member</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="admin/footer">
              <Link to="/admin/footer">
                <i className="icon icon-check-square-o"/>
                <span>Footer</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="admin/quicklinks">
              <Link to="/admin/quicklinks"><i className="icon icon-contacts"/>
                <span>Quick Links</span>
              </Link>              
            </Menu.Item>
            <Menu.Item key="admin/fileupload">
              <Link to="/admin/fileupload"><i className="icon icon-chat-bubble -flex-column-reverse"/>
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

