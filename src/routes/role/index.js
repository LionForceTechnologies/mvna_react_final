import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Divider, Table,Col, Row,Button, Checkbox, Form, Input, Select } from "antd";
import axios from 'axios';
import {  putrole,getrole,roleedit,clearrole,updaterole,roledelete,deleted } from "../../appRedux/actions/Crud";
import SweetAlert from "react-bootstrap-sweetalert";
const Role = (props) => {
    const roleid = useSelector(({ crud }) => crud.role_id);
    const ifdeleted = useSelector(({ crud }) => crud.deleted);
    const [role, setrole] = useState('');
    const [edit, setedit] = useState(0);
    const [stop, setstop] = useState(0);
    const [custom, setcustom] = useState(false);
    const [deleteid, setdeleteid] = useState(false);
    const red_data = useSelector(({ crud }) => crud.getrole);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [deletesuccess, setdeletesuccess] = useState(false);
    const [deletes, setdeletes] = useState(0);
    useEffect(() => {
        if (stop === 0) {
            dispatch(getrole())
        }
        setstop(1)
    })
    useEffect(()=>{
      if(roleid !== ''){
        if(edit !== 0){
          form.setFieldsValue({
            role: roleid.data[0].role
          })
          setrole(roleid.data[0].role)
          setedit(0)
        }
      }
    })
    // useEffect(()=>{
    //   if(deleteid != '' ){
    //     setcustom(true)
    //   }
    // })
    useEffect(()=>{
      if(ifdeleted == 'success' ){
        if(deletes != 0){
          setdeletesuccess(true)
          dispatch(deleted(''))
          setdeletes(1)
        }
      }
    })
    function Edit(e) {
        // alert(e.target.getAttribute('data-id'))
        dispatch(roleedit(e.target.getAttribute('data-id')))
        setedit(1)
    }
    function Delete(e) {
      setdeleteid(e.target.getAttribute('data-id'))
setcustom(true)
    }
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      const onFinish = values => {
        if(roleid == ''){
        dispatch(putrole(
          {
            "role": role,
          }
        )) 
        }
        else if(roleid != ''){
          dispatch(updaterole(
            {
              "role": role,
              'id': roleid.data[0].id
            }
          ))
        setedit(0);
        dispatch(clearrole(''))
        
        }
        form.resetFields();       
      };
    const columns = [
        {
            title: 'Role Name',
            dataIndex: 'role',
            key: 'role',
        },

        { 
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        }
    ];
    let data = [];
    console.log('getroles')
    console.log(red_data)
    if (red_data.length > 0) {
        data = red_data.map((item, i) => {
            return {
                role: item.role,
                action: (<><div style={{ display: 'flex' }}><i style={{ marginRight: '7px', height: '15px' }} onClick={Edit} data-id={item.id} className="icon icon-edit" /><i data-id={item.id} onClick={Delete} style={{ height: '15px' }} className="icon icon-trash" /></div></>),
                index: item.id,
                key: item.id
            }
        });
    }

    function deleteconfirm() {
      setcustom(false)
      dispatch(roledelete({id : deleteid , status : 2}))
      setdeletes(1)
    }
    function deletecancel() {
      setcustom(false)
    }
    function deletestatus() {
      setdeletesuccess(false)
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
            <p>Create Role</p>
          </Col>
          <Col xl={5} lg={5} md={5} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Role is required' }]} name="role">
              <Input value={role} onChange={(e) => {
                setrole(e.target.value)
                console.log(red_data)
              }} placeholder="Role" />
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
      </Form>
            <Card title="Roles">
                <Table className="gx-table-responsive" columns={columns} dataSource={data} />
            </Card>
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
        <SweetAlert show={deletesuccess} success title={`Deleted Successfully`}
          onConfirm={deletestatus}>
          {/* <IntlMessages id="sweetAlerts.btnClicked"/> */}
        </SweetAlert>
        </div>
    );
};

export default Role; 
