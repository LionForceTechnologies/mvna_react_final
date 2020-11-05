// import React from "react";
// // import List from "./List";
// // import Form from "./Form";
// import Home from "./home";
// // import Post from "./Posts";
// import About from "./about";
// import Sample from "./sample";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';
// import { render } from "@testing-library/react";
// import "./ui_style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

// // if(window.location.pathname.indexOf('/user') !== -1) {
// //     require("./ui_style.css");

// // }
// // let i = 0;
// // if(i = 0){
// //     window.location.reload();
// //     i = i+1;
// // }

// class SubApp extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//             f_img_height: 100,
//             footer_div: 4,
//             footer_content: 0,
//             notation: 'px',
//             no_trans: ''
//         };
//     }

//     handleClick(e) {
//         if (this.state.footer_content === 0) {
//             this.setState({
//                 f_img_height: 30,
//                 footer_div: 45,
//                 footer_content: 100,
//                 notation: 'px',
//                 no_trans: ''
//             })
//         }
//         else {
//             setTimeout(
//                 () => this.setState({ footer_content: 0 }), 
//                 1500
//               );
//             this.setState({                
//                 footer_div: 4,                
//                 notation: '%',
//                 f_img_height: 100,
//                 // footer_content: 0,
//                 no_trans:'no_trans'
//             })
//         }

//     } 
//     render() {
//         let img_style = {
//             height: `${this.state.f_img_height}${this.state.notation}`
//         }
//         let f_whole_footer = {
//             height: `${this.state.footer_div}%`
//         }
//         let f_content = {
//             height: `${this.state.footer_content}%`
//         }
//         let no_trans = this.state.no_trans;
//         // console.log('vvvv');
//         // console.log(useLocation());
//         return (
//             <>
//                 <Router>
//                     <div className="main-container">
//                         <Navbar bg="light" expand="lg">
//                             <Navbar.Brand href="/home"><img className="nav-header-image" src="/images/MVNA_Logo_Color.png" /></Navbar.Brand>
//                             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                             <Navbar.Collapse id="basic-navbar-nav">
//                                 <Nav className="mr-auto">
//                                     <Nav.Link href="/user/about">Assosiation</Nav.Link>
//                                     <Nav.Link href="/">MVNA Grant</Nav.Link>
//                                     <Nav.Link href="/">Events & Agenda</Nav.Link>
//                                     <Nav.Link href="/">Partership</Nav.Link>
//                                     <Nav.Link href="/">News & Media</Nav.Link>
//                                     <Nav.Link href="/">Contact</Nav.Link>
//                                     <Nav.Link href="/">Member Login</Nav.Link>
//                                 </Nav>
//                             </Navbar.Collapse>
//                         </Navbar>
//                         <div className="middle-container">
//                             <Switch>
//                                 <Route exact path={`/user`} component={Home}>
//                                     {/* <Home /> */}
//                                 </Route>
//                                 <Route exact path="/user/about" component={About}>

//                                 </Route>
//                                 <Route exact path="/user/sample" component={Sample}>
//                                 </Route>
//                             </Switch>
//                         </div>
//                        {(window.location.pathname === '/user') ? (
//                             <div className="footer_container_home" style={f_whole_footer}>
//                             <img
//                                 className="footer_starter_home"
//                                 src="https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-1.2.1&w=1000&q=80"
//                                 alt="Third slide"
//                                 // style={img_style}
//                                 onClick={(e) => this.handleClick(e)}
//                             />

//                             <div className={`footer_content ${no_trans}`} style={f_content}>
//                                 <div className="footer_content_sub footer_content_sub-1">
//                                     <img className="footer_title_image" src="/images/MVNA_Logo_White.png" alt="footer_image"></img>
//                                     <p>14 rue Pierre et Marie Curie F94701 Maisons-Alfort</p>
//                                     <p>Cedex. FRANCE,</p><br></br>
//                                     <p>Tel: +33 1 49 77 38 68</p>
//                                 </div>
//                                 <div className="footer_content_sub footer_content_sub-2">
//                                     <div className="Quick_links">
//                                         <p className="Quick_links_headedr">Quick Links</p>
//                                         <p>Collaboration Platform</p>
//                                         <p>OHEJP</p>
//                                         <p>Publications </p>
//                                     </div>
//                                 </div>
//                                 <div className="footer_content_sub footer_content_sub-3">
//                                 <div className="Quick_links">
//                                         <p className="Quick_links_headedr">Quick Links</p>
//                                         <p>Collaboration Platform</p>
//                                         <p>OHEJP</p>
//                                         <p>Publications </p>
//                                     </div>
//                                 </div>
//                                 <div className="footer_content_sub footer_content_sub-4">
//                                 <div className="Quick_links">
//                                         <p className="Quick_links_headedr">Next Conference</p>
//                                         <p>Coming Soon</p>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>) : ( <div className={`footer_inner_pages`}>  
//                         <div className={`footer_inner_content`} >
//                                 <div className="footer_content_sub footer_content_sub-1">
//                                     <img className="footer_title_image" src="/images/MVNA_Logo_White.png" alt="footer_image"></img>
//                                     <p>14 rue Pierre et Marie Curie F94701 Maisons-Alfort</p>
//                                     <p>Cedex. FRANCE,</p><br></br>
//                                     <p>Tel: +33 1 49 77 38 68</p>
//                                 </div>
//                                 <div className="footer_content_sub footer_content_sub-2">
//                                     <div className="Quick_links">
//                                         <p className="Quick_links_headedr">Quick Links</p>
//                                         <p>Collaboration Platform</p>
//                                         <p>OHEJP</p>
//                                         <p>Publications </p>
//                                     </div>
//                                 </div>
//                                 <div className="footer_content_sub footer_content_sub-3">
//                                 <div className="Quick_links">
//                                         <p className="Quick_links_headedr">Quick Links</p>
//                                         <p>Collaboration Platform</p>
//                                         <p>OHEJP</p>
//                                         <p>Publications </p>
//                                     </div>
//                                 </div>
//                                 <div className="footer_content_sub footer_content_sub-4">
//                                 <div className="Quick_links">
//                                         <p className="Quick_links_headedr">Next Conference</p>
//                                         <p>Coming Soon</p>

//                                     </div>
//                                 </div>
//                             </div>



//                         </div>  )} 
//                     </div>
//                 </Router>

//             </>
//         );
//     }
// }


// export default SubApp;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav, FormControl, Button, NavDropdown } from 'react-bootstrap';
import Web from "./web";
import Members from "./members"
import Editor from "./editor";
import InnerEditor from './innereditor';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getwebmenu,getlinkweb,getfooterweb } from "../../appRedux/actions/Webauth";
import { Modal, Form, Input, Spin } from 'antd';
import { webSignIn, clearlogsuccess } from "../../appRedux/actions/Webauth";
import SweetAlert from "react-bootstrap-sweetalert";
// import "./ui_style.css";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
function SubApp(props) {
  const [f_img_height, setf_img_height] = useState(100)
  const [footer_div, setfooter_div] = useState('45px')
  const [footer_content, setfooter_content] = useState(25)
  const [mlogin, setmlogin] = useState(false)
  const [footer_content_inner_contents, setfooter_content_inner_contents] = useState(10)
  const [notation, setnotation] = useState('px')
  const [no_trans, setno_trans] = useState('')
  const [stop, setstop] = useState(0)
  const [warning, setwarning] = useState(false)
  const [success, setsuccess] = useState(false)
  const [loader, setloader] = useState(0)
  const webmenu = useSelector(({ webauth }) => webauth.webmenu);
  const logsuccess = useSelector(({ webauth }) => webauth.logsuccess);
  const startlogin = useSelector(({ webauth }) => webauth.startlogin);
  const forlink = useSelector(({ webauth }) => webauth. getlinksweb);
  const forfootercontent = useSelector(({ webauth }) => webauth.getfooterwebdata);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const Search = Input.Search;
  const token = useSelector(({auth}) => auth.token);
  let locations = window.location.pathname;
  let locations_host = window.location.hostname;
  let locations_port = window.location.port;
  let components;
  let f_whole_footer = {
    height: `${footer_div}`
  }
  let f_content = {
    height: `${footer_content}%`,
    marginTop: '-24px'
  }
  let footer_content_inner_content = {
    paddingTop: `${footer_content_inner_contents}px`
  }
  // **************loader functions****************
  useEffect(() => {
    if (startlogin == 'start') {
      setloader(1)
    } else {
      setloader(0)
    }
  })

  useEffect(() => {
    if (logsuccess == 'success') {
      setmlogin(false)
      dispatch(clearlogsuccess())
      setsuccess(true)
    }
    if (logsuccess == 'fail') {
      setmlogin(false)
      dispatch(clearlogsuccess())
      setwarning(true)
    }
  })

  function confirmwarning() {
    setwarning(false)
  }
  function confirmsuccess() {
    setsuccess(false)
  }
  function permenu(e) {
localStorage.setItem('url',e.target.getAttribute('data-name'))
  }
  // **************loader functions****************
  useEffect(() => {
    if (stop == 0) {
      dispatch(getwebmenu())
      dispatch(getlinkweb())
      dispatch(getfooterweb())
      setstop(1)
    }
  })
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log("finish", values)
    dispatch(webSignIn(values));
    document.getElementById('basic_password').value = null;
    document.getElementById('basic_email').value = null;

    // form.resetFields();
  };
  function oncancel(e) {
    e.preventDefault()
    setmlogin(false)
  }
  function loginfun() {
    setmlogin(true)
  }
  let menus = [];
  let nbrand = 0;
  let ref;  
  let footer_address = [];
  if(forfootercontent.data){
    if(forfootercontent.data.length > 0){
      footer_address.push(<p>{forfootercontent.data[0].addressline1}</p>)
      footer_address.push(<p>{forfootercontent.data[0].addressline2}</p>)
      footer_address.push(<p>{forfootercontent.data[0].mobile}</p>)    
    }
    // else{
    //   footer_address.push(<p>14 rue Pierre et Marie Curie F94701 Maisons-Alfort</p>)
    //   footer_address.push(<><p>Cedex. FRANCE,</p><br></br></>)
    //   footer_address.push(<p>Tel: +33 1 49 77 38 68</p>)
    // }
  }
else{
  // footer_address.push(<p>14 rue Pierre et Marie Curie F94701 Maisons-Alfort</p>)
  // footer_address.push(<><p>Cedex. FRANCE,</p><br></br></>)
  // footer_address.push(<p>Tel: +33 1 49 77 38 68</p>)
}


  if(webmenu){
    for (let i = 0; i < webmenu.length; i++) {
      if (webmenu[i].menu.toUpperCase() == 'HOME') {
        nbrand = 1
        ref = '/user'
      }
      if (webmenu[i].menu.toUpperCase() != 'HOME') {
        // alert(webmenu[i].menu == 'Home')
        if (webmenu[i].sub_menus.length > 0) {
          let submenus = [];
          for (let j = 0; j < webmenu[i].sub_menus.length; j++) {
            if (webmenu[i].sub_menus[j].menu.toUpperCase() == 'MEMBERS') {
              submenus.push(<NavDropdown.Item onClick={permenu} data-name={webmenu[i].sub_menus[j].menu} href={`/user/${webmenu[i].sub_menus[j].menu.split(" ").join("").toLowerCase()}`}>{webmenu[i].sub_menus[j].menu}</NavDropdown.Item>)
            }
            else {
              submenus.push(<NavDropdown.Item onClick={permenu} data-name={webmenu[i].sub_menus[j].menu} href={`/user/${webmenu[i].sub_menus[j].menu.split(" ").join("")}?id=${webmenu[i].sub_menus[j].id}`}>{webmenu[i].sub_menus[j].menu}</NavDropdown.Item>)
            }
          }
          menus.push(<NavDropdown title={`${webmenu[i].menu}`} id="basic-nav-dropdown">
            {submenus}
          </NavDropdown>)
        } else { 
          menus.push(<Nav.Link onClick={permenu} data-name={webmenu[i].menu} href={`/user/${webmenu[i].menu.split(" ").join("")}?id=${webmenu[i].id}`}>{webmenu[i].menu}</Nav.Link>)
        }
      }
    }


  }

  function handleClick(e) {

    if (footer_content === 25) {

      let x = document.getElementsByClassName('blogpage')[0].offsetHeight / 2
      setf_img_height(30)
      setfooter_div('auto')
      setfooter_content(100)
      setnotation('px')
      setno_trans('')
      setfooter_content_inner_contents(5)

    }
    else {
      setTimeout(
        () => {
          setfooter_content(25)
          setfooter_content_inner_contents(10)
        }
        ,
        1500
      );

      setfooter_div('45px')
      setnotation('%')
      setf_img_height(100)
      // footer_content: 0,
      setno_trans('no_trans')

    }

  }
  if (locations.indexOf('user/admin/innerpage') !== -1) {
    components = (<Route exact path="/user/admin/innerpage" component={InnerEditor} />)
  }

  else if (locations.indexOf('user/admin') !== -1) {
    components = (<Route exact path={locations} component={Editor} />)

  }

  else if (locations.indexOf('user') !== -1) {
    let beautify = {
      height: '100%', position: 'relative', overflow: 'auto', overflowX: 'hidden'
    }
    if (((locations == '/user') || (locations == '/user/')) && (window.screen.width > 992)) {
      beautify = {
        height: '100%', position: 'relative', overflowX: 'hidden',overflow:'hidden'
      }
    }
     let footer = (
      <div className={`footer_content`}>
      <div className={`footer_content_inner_content`}>
        <div className="footer_content_sub footer_content_sub-1">
          <img className="footer_title_image" src="/images/MVNA_Logo_White.png" alt="footer_image"></img>
         {/* { forfootercontent.data != undefined ? (<p>{forfootercontent.data[0].addressline1}</p>) : (<p>14 rue Pierre et Marie Curie F94701 Maisons-Alfort</p>)} 
     {forfootercontent.data != undefined ? (<><p>{forfootercontent.data[0].addressline2}</p><br></br></>) : (<><p>Cedex. FRANCE,</p><br></br></>)}
     {forfootercontent.data != undefined ? (<p>Tel: {forfootercontent.data[0].mobile}</p>): (<p>Tel: +33 1 49 77 38 68</p>)}
      */}
      {footer_address}
        </div>
        <div className="footer_content_sub footer_content_sub-2">
          <div className="Quick_links">
            <div className="Quick_links_headedr_parent">
              <p className="Quick_links_headedr">Quick Links</p>
            </div>
            <p>Collaboration Platform</p>
            <p>OHEJP</p>
            <p>Publications </p>
          </div>
        </div>
        <div className="footer_content_sub footer_content_sub-3">
          <div className="Quick_links">
            <div className="Quick_links_headedr_parent">
              <p className="Quick_links_headedr">Quick Links</p>
            </div>
            <p>Collaboration Platform</p>
            <p>OHEJP</p>
            <p>Publications </p>
          </div>
        </div>
        <div className="footer_content_sub footer_content_sub-4">
          <div className="Quick_links">
            <div className="Quick_links_headedr_parent">
              <p className="Quick_links_headedr">Next Conference</p>
            </div>
            <p>Coming Soon</p>

          </div>
        </div>
      </div>

    </div>       
     )
     let firstfoot = [
      (<p>Collaboration Platform</p>),
      (<p>OHEJP</p>),
      (<p>Publications </p>)
     ]
     let secondfoot = [
      (<p>Collaboration Platform</p>),
      (<p>OHEJP</p>),
      (<p>Publications </p>)
     ]
     if((forlink.length > 0) && (forlink.length <= 3 )){
       for(let z=0;z<forlink.length;z++){
        firstfoot[z] = <p>{forlink[z].name}</p>
        secondfoot[z] = <p>{forlink[z].name}</p>
       }
     }else if(forlink.length > 0){
      firstfoot = []
      secondfoot = []
      for(let j=0;j<forlink.length;j++){
        if(j <= 2){
          firstfoot.push(<p>{forlink[j].name}</p>)
        }
        if(j > 2 && j <= 5)
        secondfoot.push(<p>{forlink[j].name}</p>)
      }
     }
    components = (
      <div className={`blogpage`} style={beautify}>

        <Navbar className={`mvna_navbar`} bg="light" expand="lg">
          {nbrand == 1 ? (<Navbar.Brand href={ref}><img className="nav-header-image" src="/images/MVNA_Logo_Color.png" /></Navbar.Brand>) : (<Navbar.Brand><img className="nav-header-image" src="/images/MVNA_Logo_Color.png" /></Navbar.Brand>)}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {menus}
              {/* <Nav.Link href="/user/about">Assosiation</Nav.Link>
                                     <Nav.Link href="/">MVNA Grant</Nav.Link>
                                     <Nav.Link href="/">Events & Agenda</Nav.Link>
                                     <Nav.Link href="/">Partership</Nav.Link>
                                     <Nav.Link href="/">News & Media</Nav.Link>
                                     <Nav.Link href="/">Contact</Nav.Link>
                                     <Nav.Link href="/">Member Login</Nav.Link> */}
              <Nav.Link onClick={loginfun} ><p className={`underline`}>Member Login</p></Nav.Link>
            </Nav>
            <Search
        placeholder="search..."
        className={`search_box`}
        onSearch={value => console.log(value)}
        style={{width: '175px'}}
      />           
          </Navbar.Collapse>
        </Navbar>
        <Route exact path={`/user/members`} component={Members} />
        { locations.indexOf('user/members') < 0 ? <Route exact path={locations} component={Web} /> : ''  } 
        {((locations == '/user') ||  (locations == '/user/')) && (window.screen.width > 992)  ? (
          <div className="footer_container_home" style={f_whole_footer}>
            <div className="footer_starter_home">
              <img
                src={`/images/Popup_arrow.png`}
                alt="Third slide"
                // style={img_style}
                onClick={handleClick}
              />
            </div>

            <div className={`footer_content ${no_trans}`} style={f_content}>
              <div className={`footer_content_inner_content`} style={footer_content_inner_content}  >
                <div className="footer_content_sub footer_content_sub-1">
                  <img className="footer_title_image" src="/images/MVNA_Logo_White.png" alt="footer_image"></img>
                  {/* {forfootercontent != '' ? (<p>{forfootercontent.data[0].addressline1}</p>) : (<p>14 rue Pierre et Marie Curie F94701 Maisons-Alfort</p>)} 
     {forfootercontent != '' ? (<><p>{forfootercontent.data[0].addressline2}</p><br></br></>) : (<><p>Cedex. FRANCE,</p><br></br></>)}
     {forfootercontent != '' ? (<p>Tel: {forfootercontent.data[0].mobile}</p>): (<p>Tel: +33 1 49 77 38 68</p>)} */}
     {footer_address}
                </div>
                <div className="footer_content_sub footer_content_sub-2">
                  <div className="Quick_links">
                    <p className="Quick_links_headedr">Quick Links</p>
                    {firstfoot}
                  </div>
                </div>
                <div className="footer_content_sub footer_content_sub-3">
                  <div className="Quick_links">
                    <p className="Quick_links_headedr">Quick Links</p>
                    {secondfoot}
                  </div>
                </div>
                <div className="footer_content_sub footer_content_sub-4">
                  <div className="Quick_links">
                    <p className="Quick_links_headedr">Next Conference</p>
                    <p>Coming Soon</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
            <div className={`footer_content`}>
              <div className={`footer_content_inner_content`}>
                <div className="footer_content_sub footer_content_sub-1">
                  <img className="footer_title_image" src="/images/MVNA_Logo_White.png" alt="footer_image"></img>
                  {/* {forfootercontent != '' ? (<p>{forfootercontent.data[0].addressline1}</p>) : (<p>14 rue Pierre et Marie Curie F94701 Maisons-Alfort</p>)} 
     {forfootercontent != '' ? (<><p>{forfootercontent.data[0].addressline2}</p><br></br></>) : (<><p>Cedex. FRANCE,</p><br></br></>)}
     {forfootercontent != '' ? (<p>Tel: {forfootercontent.data[0].mobile}</p>): (<p>Tel: +33 1 49 77 38 68</p>)} */}
     {footer_address}
                </div>
                <div className="footer_content_sub footer_content_sub-2">
                  <div className="Quick_links">
                    <div className="Quick_links_headedr_parent">
                      <p className="Quick_links_headedr">Quick Links</p>
                    </div>
                  {firstfoot}
                  </div>
                </div>
                <div className="footer_content_sub footer_content_sub-3">
                  <div className="Quick_links">
                    <div className="Quick_links_headedr_parent">
                      <p className="Quick_links_headedr">Quick Links</p>
                    </div>
                    {secondfoot}
                  </div>
                </div>
                <div className="footer_content_sub footer_content_sub-4">
                  <div className="Quick_links">
                    <div className="Quick_links_headedr_parent">
                      <p className="Quick_links_headedr">Next Conference</p>
                    </div>
                    <p>Coming Soon</p>

                  </div>
                </div>
              </div>

            </div>

          )}


      </div>
    )

  }
  return (
    <Router>
      {/* <div id="example-editor"/>        */}

      <Switch>

        {components}
      </Switch>


      <Modal
        title="Login"
        visible={mlogin}
        // onOk={this.handleOk}
        // onCancel={this.handleCancel}
        className={`login-modal`}
        footer={null}
      >
        {loader ? <Spin >
          <Form
            initialValues={{ remember: true }}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="gx-signin-form gx-form-row0">

            <Form.Item
              initialValue="demo@example.com"
              rules={[{ required: true, message: 'The input is not valid E-mail!' }]} name="email">
              <Input autoComplete="new-password" placeholder="Email" />
            </Form.Item>
            <Form.Item
              initialValue="demo#123"
              rules={[{ required: true, message: 'Please input your Password!' }]} name="password">
              <Input autoComplete="new-password" type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              {/* <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                <span className="gx-signup-form-forgot gx-link"><IntlMessages
                  id="appModule.termAndCondition"/></span> */}
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="gx-mb-0" htmlType="submit">
                Signin
            </Button>
              <Button type="primary" className="gx-mb-0" onClick={oncancel}>
                Cancel
            </Button>
              {/* <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signup"><IntlMessages
                id="app.userAuth.signUp"/></Link> */}
            </Form.Item>
            {/* <span
                className="gx-text-light gx-fs-sm"> demo user email: 'demo@example.com' and password: 'demo#123'</span> */}
          </Form>





        </Spin> :


          <Form
            initialValues={{ remember: true }}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="gx-signin-form gx-form-row0">

            <Form.Item
              initialValue="demo@example.com"
              rules={[{ required: true, message: 'The input is not valid E-mail!' }]} name="email">
              <Input autoComplete="new-password" placeholder="Email" />
            </Form.Item>
            <Form.Item
              initialValue="demo#123"
              rules={[{ required: true, message: 'Please input your Password!' }]} name="password">
              <Input autoComplete="new-password" type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              {/* <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                <span className="gx-signup-form-forgot gx-link"><IntlMessages
                  id="appModule.termAndCondition"/></span> */}
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="gx-mb-0" htmlType="submit">
                Signin
            </Button>
              <Button type="primary" className="gx-mb-0" onClick={oncancel}>
                Cancel
            </Button>
              {/* <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signup"><IntlMessages
                id="app.userAuth.signUp"/></Link> */}
            </Form.Item>
            {/* <span
                className="gx-text-light gx-fs-sm"> demo user email: 'demo@example.com' and password: 'demo#123'</span> */}
          </Form>



        }

      </Modal>
      <SweetAlert show={warning} warning title={`login failed `}
        onConfirm={confirmwarning}>
        {/* <IntlMessages id="sweetAlerts.btnClicked"/> */}
      </SweetAlert>
      <SweetAlert show={success} success title={`login successfull `}
        onConfirm={confirmsuccess}>
        {/* <IntlMessages id="sweetAlerts.btnClicked"/> */}
      </SweetAlert>
    </Router>

  );
}

export default SubApp;
