import React, { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Card, Divider, Table } from "antd";
import { Button, Checkbox, Form, Input, Select } from "antd";
import axios from 'axios';
import { putlink,getlink,editlink,cleareditlink,deletelink,cleardeletelink,updatelink } from "../../appRedux/actions/Crud";
import { Col, Row, } from "antd";
import SweetAlert from "react-bootstrap-sweetalert";
import {hostname} from "../../hostname";
// import {Button, Card, Col, Row} from "antd";
const Quicklinks = (props) => {
  const red_data = useSelector(({ crud }) => crud.getlinks);
  const roleid = useSelector(({ crud }) => crud.editqlink);
  const ifdeleted = useSelector(({ crud }) => crud.deletedlink);
  const submenuid = useSelector(({ crud }) => crud.submenu_id);
  const m_menudeleteMessage = useSelector(({ crud }) => crud.menudeleteMessage);
  const checksubmenuMessage = useSelector(({ crud }) => crud.checksubmenu);
  const [menu, setmenu] = useState('');
  const [submenu, setsubmenu] = useState('');
  const [deleteid, setdeleteid] = useState('');
  const [mainmenu, setmainmenu] = useState('');
  const [imageUrl, setimageUrl] = useState('');
  const [image, setimage] = useState('');  
  const [edit, setedit] = useState(0);
  const [link, setlink] = useState('');
  const [deletes, setdeletes] = useState(0);
  const [deletestatus, setdeletestatus] = useState(false);
  const [nodeletestatus, setnodeletestatus] = useState(false);
  const [warningdelete, setwarningdelete] = useState(false);
  const [editimageurl,seteditimageurl] = useState(false);
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
    if (stop === 0) {
      dispatch(getlink())
    }
    setstop(1)
  })


  useEffect(()=>{
    if(roleid !== ''){
      if(edit !== 0){
        form.setFieldsValue({
          menu: roleid.data[0].name,
          link : roleid.data[0].link
        })
        setlink(roleid.data[0].link)
        setmenu(roleid.data[0].name)
        // setimage(roleid.data[0].icon)
        setimageUrl(`${hostname}/${roleid.data[0].icon}`)
        seteditimageurl(roleid.data[0].icon)
        setedit(0)
      }
    }
  })

  useEffect(()=>{
    if(ifdeleted == 'success' ){
      if(deletes != 0){
        setdeletestatus(true)
        dispatch(cleardeletelink(''))
        setdeletes(1)
      }
    }
  })


  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = values => {
    if(roleid == ''){
      // if(image == ''){
      //   alert('fill all fields')
      //   return;
      // }
      let kk = image
       if(image == ''){
kk = ''
       }
      //  return;
        dispatch(putlink({
            name : menu,
            link : link,
            icon : kk
        }))
        form.resetFields();
        document.getElementById('quickimage').value = '';
        
        setimageUrl('')
        }
        else if(roleid != ''){
          let img =  image
          if(image == '' || image == null || image == undefined || image == 'undefined'){
            img = editimageurl
          }
            dispatch(updatelink(
              {
                "name": menu,
                link : link,
                icon : img,
                'id': roleid.data[0].id
              }
            ))
            form.resetFields();
            document.getElementById('quickimage').value = '';
            setimageUrl('')
            seteditimageurl('')
            setedit(0);
          dispatch(cleareditlink(''))
          
          }
document.getElementById('quickimage').value = '';
imageUrl('')
    form.resetFields();
  };


  const columns = [
    {
      title: 'Link Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Links',
      dataIndex: 'link',
      key: 'link',
    },
    // {
    //   title: 'Icon',
    //   dataIndex: 'icon',
    //   key: 'icon',
    // },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    }
  ];

  function Edit(e) {
    dispatch(editlink(e.target.getAttribute('data-id')))
    setedit(1)
  }
  function Delete(e) {
    setdeleteid(e.target.getAttribute('data-id'))
setcustom(true)
  }

  // ******sweet alert****
  function confirmwarningdelete() {
    setwarningdelete(false);
    // setcustom(true);
  }
  function deleteconfirm() {
    setcustom(false)
    dispatch(deletelink({id : deleteid , status : 2}))
    setdeletes(1)
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
    // dispatch(submenudelete({ id: submenudeleteid, status: 2 }))
    setsubmenudeletes(1)
    setsub_menu_delete_custom(false)
  }
  // ******sweet alert**** 
  const onCurrencyChange = newCurrency => {
    setmainmenu(newCurrency)
  };
  function uploadimage(e){
    let file = e.target.files[0];
    setimage(file)
    let reader = new FileReader();
    let url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
        setimageUrl(reader.result)
      }.bind(this);
}
  let data = [];
  if (red_data.length > 0) {
    data = red_data.map((item, i) => {
      return {
        name: item.name,
        link: item.link,
        icon: item.icon,
        action: (<><div style={{ display: 'flex' }}><i style={{ marginRight: '7px', height: '15px' }} onClick={Edit} data-id={item.id} className="icon icon-edit" /><i data-id={item.id} onClick={Delete} style={{ height: '15px' }} className="icon icon-trash" /></div></>),
        index: item.id,
        key: item.id
      }
    });
  }
  // alert()
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
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Link name is required' }]} name="menu">
              <Input value={menu} onChange={(e) => {
                setmenu(e.target.value)
                console.log(red_data)
              }} placeholder="LinkName" />
            </Form.Item>
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'link is required' }]} name="link">
              <Input value={link} onChange={(e) => {
                setlink(e.target.value)
              }} placeholder="Link" />
            </Form.Item>
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>

              <input id='quickimage' type='file'  onChange={ uploadimage } />
          </Col>
          {/* <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            {imageUrl != '' ? <img width={`100px`} height={`100px`} src={imageUrl} /> : ''}            
          </Col> */}
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
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

export default Quicklinks;
