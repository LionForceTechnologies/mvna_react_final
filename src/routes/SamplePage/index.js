import React, { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Card, Divider, Table } from "antd";
import { Button, Checkbox, Form, Input, Select } from "antd";
import axios from 'axios';
import { menuadd, menuedit, menuupdate, menudelete, getdata, submenuadd, getsubmenu, submenuedit, submenudelete, menudeleteMessage, checksubmenu,submenupdate,clearmenu,clearsubmenu } from "../../appRedux/actions/Crud";
import { Col, Row, } from "antd";
import SweetAlert from "react-bootstrap-sweetalert";
// import {Button, Card, Col, Row} from "antd";
const SamplePage = (props) => {
  const red_data = useSelector(({ crud }) => crud.data);
  const menuid = useSelector(({ crud }) => crud.menu_id);
  const getsubmenudata = useSelector(({ crud }) => crud.subdata);
  const submenuid = useSelector(({ crud }) => crud.submenu_id);
  const m_menudeleteMessage = useSelector(({ crud }) => crud.menudeleteMessage);
  const checksubmenuMessage = useSelector(({ crud }) => crud.checksubmenu);
  const [menu, setmenu] = useState('');
  const [submenu, setsubmenu] = useState('');
  const [deleteid, setdeleteid] = useState('');
  const [mainmenu, setmainmenu] = useState('');
  const [mainmenuid , setmainmenuid] = useState('');
  const [edit, setedit] = useState(0);
  const [deletes, setdeletes] = useState(0);
  const [deletestatus, setdeletestatus] = useState(false);
  const [nodeletestatus, setnodeletestatus] = useState(false);
  const [warningdelete, setwarningdelete] = useState(false);
  const [parent, setparent] = useState('');
  const [sub_edit, setsub_edit] = useState(0);
  const [nth, setnth] = useState('');
  const [sub_menu_delete_custom, setsub_menu_delete_custom] = useState(false);
  const [operation, setoperation] = useState(0);
  const [submenudeletes, setsubmenudeletes] = useState(0);
  const [submenudeleteid, setsubmenudeleteid] = useState('');
  const [dataManage, setdataManage] = useState([]);
  const [index, setindex] = useState('');
  const [custom, setcustom] = useState(false);
  const [checkover, setcheckover] = useState(0);
  const [stop, setstop] = useState(0);
  const [form] = Form.useForm();
  const [formsub] = Form.useForm();
  const dispatch = useDispatch();
  let ds = dataManage
  const { Option } = Select;

  useEffect(() => {
    setmenu(menu);
  }, [menu]);
  useEffect(() => {
    if (stop === 0) {
      dispatch(getdata())
      dispatch(getsubmenu())
    }
    setstop(1)
  })
  // delete functions
  useEffect(() => {
    if (checksubmenuMessage != '') {
      if (deletes != 0) {
        if (checksubmenuMessage == 'false') {
          setcustom(true)
        }
        if (checksubmenuMessage == 'true') {
          setwarningdelete(true)
          // setdeletes(0);
        }
        setdeletes(0);
        dispatch(checksubmenu(''))
      }
    }
  })
  useEffect(() => {
    if (m_menudeleteMessage != '') {
      if (checkover != 0) {
        if (m_menudeleteMessage == "success") {
          setdeletestatus(true)
        }
        if (m_menudeleteMessage == "failure") {
          setnodeletestatus(true)
        }
        dispatch(menudeleteMessage(''))
        setcheckover(0)
      }
    }
  })



  // delete functions
  useEffect(() => {
    if (menuid != "") {
      if (edit !== 0) {
        form.setFieldsValue({
          menu: menuid[0].menu
        })
        setmenu(menuid[0].menu)
        // alert(15)
        setedit(0)
      }
    }
    if (submenuid != "") {
      if (sub_edit != 0) {
        formsub.setFieldsValue({
          submenu: submenuid[0].menu,
          mainmenu: submenuid[0].parent_menu
        })
        setmainmenuid(submenuid[0].parent_id)
        setmainmenu(submenuid[0].id)
        setsubmenu(submenuid[0].menu)
        setsub_edit(0)
      }
    }

  })
  const onFinishsub = values => {
    if(submenuid == ''){
      dispatch(submenuadd(
        {
          "menu": submenu,
          "place": "w",
          "url": `/${submenu.split(" ").join("")}`,
          "serial": 1,
          "icon": "fa-fa user",
          "parent_id": mainmenuid
        }
      ))
      dispatch(getsubmenu())
    }
    else if(submenuid != ''){
      dispatch(submenupdate(
        {
          "menu": submenu,
          "place": "w",
          "url": `/${submenu.split(" ").join("")}`,
          "serial": 1,
          "icon": "fa-fa user",
          "parent_id": mainmenuid,
          'id': submenuid[0].id
        }
      ))
      dispatch(getsubmenu())
      setsub_edit(0)
      dispatch(clearsubmenu())
    }
    formsub.resetFields();
  };
  const onFinishFailedsub = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = values => {
    if ((menuid == '') && (deletes != 1)) {
      let new_data = {
        "menu": menu,
        "place": "w",
        "url": `/${menu.split(" ").join("")}`,
        "serial": 1,
        "icon": "fa-fa user",
        "parent_id": 0
      }
      dispatch(menuadd({
        "menu": menu,
        "place": "w", 
        "url": `/${menu.split(" ").join("")}`,
        "serial": 1,
        "icon": "fa-fa user",
        "parent_id": 0
      }));
      form.resetFields();
    }
    else if (menuid != '') {
      let bias = {
        datas_e: {
          "menu": menu,
          "place": "w",
          "url": `/${menu.split(" ").join("")}`,
          "serial": 1,
          "icon": "fa-fa user",
          "parent_id": 0,
          'id': menuid[0].id
        }
      }
      dispatch(menuupdate({
        "menu": menu,
        "place": "w",
        "url": `/${menu.split(" ").join("")}`,
        "serial": menuid[0].serial,
        "icon": "fa-fa user",
        "parent_id": 0,
        'id': menuid[0].id
      }));
      setedit(0);
      dispatch(clearmenu())
      form.resetFields();
    }
    else if (deletes === 1) {
      let delete_data = red_data.filter((item, i) => {
        if (index !== i) {
          return item
        }
      })

    }
    // dispatch(menuedit(new_data));
    // form.resetFields();
  };


  const columns = [
    {
      title: 'Menu Name',
      dataIndex: 'menu',
      key: 'menu',
    },
    {
      title: 'Links',
      dataIndex: 'links',
      key: 'links',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    }
  ];
  const columnssub = [
    {
      title: 'Menu Name',
      dataIndex: 'menu',
      key: 'menu',
    },
    {
      title: 'Sub Menu Name',
      dataIndex: 'submenu',
      key: 'submenu',
    },
    {
      title: 'Links',
      dataIndex: 'links',
      key: 'links',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    }
  ];
  function Edit(e) {
    dispatch(menuedit(e.target.getAttribute('data-id')))
    setedit(1)
  }
  function Delete(e) {
    // setcustom(true)
    // setwarningdelete(true)  
    dispatch(checksubmenu(e.target.getAttribute('data-id')))
    setdeleteid(e.target.getAttribute('data-id'))
    setdeletes(1)
  }
  function subedit(e) {
    dispatch(submenuedit(e.target.getAttribute('data-id')))
    setparent(e.target.getAttribute('data-parent'))
    setsub_edit(1)
  }
  function subdelete(e) {
    setsubmenudeleteid(e.target.getAttribute('data-id'))
    setsub_menu_delete_custom(true)
  }

  // ******sweet alert****
  function confirmwarningdelete() {
    setwarningdelete(false);
    // setcustom(true);
  }
  function deleteconfirm() {
    setcustom(false);
    // setdeletes(1);
    setcheckover(1)
    dispatch(menudelete({ id: deleteid, status: 2 }))
    setdeleteid('');
  }
  function deletecancel() {
    setcustom(false)
  }
  function deletesuccess() {
    setdeletestatus(false)
  }
  function deletewarning() {
    setnodeletestatus(false)
  }
  function submenudeletecancel() {
    setsub_menu_delete_custom(false)
  }
  function submenudeleteconfirm() {
    dispatch(submenudelete({ id: submenudeleteid, status: 2 }))
    setsubmenudeletes(1)
    setsub_menu_delete_custom(false)
  }
  // ******sweet alert**** 
  const onCurrencyChange = newCurrency => {
    setmainmenuid(newCurrency)
  };

  let data = [];
  let menu_data = [];
  let table_sub_menu_data = [];
  if (red_data.length > 0) {
    data = red_data.filter((item, i) => {
      return item.parent_id === 0
    }).map((item, i) => {
      return {
        menu: item.menu,
        links: item.url,
        action: (<><div style={{ display: 'flex' }}><i style={{ marginRight: '7px', height: '15px' }} onClick={Edit} data-id={item.id} className="icon icon-edit" /><i data-id={item.id} onClick={Delete} style={{ height: '15px' }} className="icon icon-trash" /></div></>),
        index: item.id,
        key: item.id
      }
    });
    menu_data = red_data.filter((item, i) => {
      return item.parent_id === 0
    }).map((item, i) => {
      return (<Option key={item.id} value={item.id}>{item.menu}</Option>)
    });
  }
  if (getsubmenudata.length > 0) {
    table_sub_menu_data = getsubmenudata.map((item, i) => {
      return {
        submenu: item.menu,
        menu: item.parent_menu,
        links: item.url,
        action: (<><div style={{ display: 'flex' }}><i style={{ marginRight: '7px', height: '15px' }} onClick={subedit} data-parent={item.parent_id} data-id={item.id} className="icon icon-edit" /><i data-id={item.id} data-parent={item.parent_id} onClick={subdelete} style={{ height: '15px' }} className="icon icon-trash" /></div></>),
        index: item.id,
        key: item.id
      }
    });
  }



  return (
    <div>
      <Form
        form={form}
        initialValues={{ remember: true }}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="gx-signin-form gx-form-row0">
        <Row>
          <Col className={`label`} xl={3} lg={3} md={3} sm={24} xs={24}>
            <p>Create Menu</p>
          </Col>
          <Col xl={5} lg={5} md={5} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Mwnu is required' }]} name="menu">
              <Input value={menu} onChange={(e) => {
                setmenu(e.target.value)
                console.log(red_data)
              }} placeholder="Menu" />
            </Form.Item>
          </Col>
          <Col xl={4} lg={4} md={4} sm={24} xs={24}>
            <Form.Item>
              <Button type="primary" className="gx-mb-0" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Card title="Menu Table">
          <Table className="gx-table-responsive" columns={columns} dataSource={data} />

        </Card>
      </Form>
      <Form
        form={formsub}
        initialValues={{ remember: true }}
        name="basic"
        onFinish={onFinishsub}
        onFinishFailed={onFinishFailedsub}
        className="gx-signin-form gx-form-row0">
        <Row>
          <Col className={`label_sub`} xl={4} lg={4} md={4} sm={24} xs={24}>
            <p>Create SubMenu</p>
          </Col>
          <Col xl={5} lg={5} md={5} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'This field is required' }]} name="mainmenu">
              <Select
                value={mainmenu}
                onChange={onCurrencyChange}
                placeholder="Main Menu"
              >
                {menu_data}
              </Select>
            </Form.Item>
          </Col>
          <Col xl={5} lg={5} md={5} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'This field is required' }]} name="submenu">
              <Input value={submenu} onChange={(e) => {
                setsubmenu(e.target.value)
              }} placeholder="Sub Menu" />
            </Form.Item>
          </Col>
          <Col xl={4} lg={4} md={4} sm={24} xs={24}>
            <Form.Item>
              <Button type="primary" className="gx-mb-0" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Card title="Sub Menu Table">
          <Table className="gx-table-responsive" columns={columnssub} dataSource={table_sub_menu_data} />
        </Card>
      </Form>
      <div className={`sweetalerts`}>
        <SweetAlert show={custom}
          custom
          showCancel
          confirmBtnText={`OK`}
          cancelBtnText={`Cancel`}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="default"
          // customIcon={"https://via.placeholder.com/500X330"}
          title={`Do you want to delete?`}
          onConfirm={deleteconfirm}
          onCancel={deletecancel}
        >
          {/* <IntlMessages id="sweetAlerts.youWillFind"/> */}
        </SweetAlert>
        <SweetAlert show={deletestatus} success title={`Deleted Successfully`}
          onConfirm={deletesuccess}>
          {/* <IntlMessages id="sweetAlerts.btnClicked"/> */}
        </SweetAlert>
        <SweetAlert show={nodeletestatus} warning title={`Failure`}
          onConfirm={deletewarning}>
          {/* <IntlMessages id="sweetAlerts.btnClicked"/> */}
        </SweetAlert>
        <SweetAlert show={warningdelete} warning title={`This menu have submenus`}
          onConfirm={confirmwarningdelete}>
          {/* <IntlMessages id="sweetAlerts.btnClicked"/> */}
        </SweetAlert>
        <SweetAlert show={sub_menu_delete_custom}
          custom
          showCancel
          confirmBtnText={`OK`}
          cancelBtnText={`Cancel`}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="default"
          // customIcon={"https://via.placeholder.com/500X330"}
          title={`Do you want to delete?`}
          onConfirm={submenudeleteconfirm}
          onCancel={submenudeletecancel}
        >
          {/* <IntlMessages id="sweetAlerts.youWillFind"/> */}
        </SweetAlert>
      </div>
    </div>
  );
};

export default SamplePage;
