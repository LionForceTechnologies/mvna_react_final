import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Divider, Table, Col, Row, Button, Checkbox, Form, Input, Select } from "antd";
import axios from 'axios';
import { putucreation, updateucreation, getucreation, editucreation, deleteucreation, cleardeleteucreation,getrole } from "../../appRedux/actions/Crud";
import SweetAlert from "react-bootstrap-sweetalert";
const Usercreation = (props) => {
    const memberid = useSelector(({ crud }) => crud.ucreationid);
    const ifdeleted = useSelector(({ crud }) => crud.deleteducreation);
    const roles = useSelector(({ crud }) => crud.getrole);
    const ucreation = useSelector(({ crud }) => crud.ucreation);
    const [role, setrole] = useState('');
    const [pass, setpass] = useState('');
    const [name, setname] = useState('');
    const [contact, setcontact] = useState('');
    const [email, setemail] = useState('');
    const [edit, setedit] = useState('');
    const [stop, setstop] = useState(0);
    const [custom, setcustom] = useState(false);
    const [deleteid, setdeleteid] = useState(false);
    const red_data = useSelector(({ crud }) => crud.getrole);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [deletesuccess, setdeletesuccess] = useState(false);
    const [deletes, setdeletes] = useState(0);
    const [datas, setdatas] = useState([]);
    const [edits, setedits] = useState('');
    const [forhk, setforhk] = useState(0);
    const { Option } = Select;
    useEffect(() => {
        if (stop === 0) {
            dispatch(getrole())
            dispatch(getucreation())
        }
        setstop(1)
    })
    useEffect(()=>{
        if(ifdeleted == 'success' ){
          if(deletes != 0){
            setdeletesuccess(true)
            dispatch(cleardeleteucreation(''))
            setdeletes(1)
          }
        }
      })
    useEffect(()=>{
        if(memberid !== ''){
          if(edit !== 0){
            form.setFieldsValue({
              role: memberid.data[0].role,
              uname: memberid.data[0].name,
              contact: memberid.data[0].mobile_number,
              email : memberid.data[0].email,
            })
            setname(memberid.data[0].name)    
            setrole(memberid.data[0].role_id)
            setcontact(memberid.data[0].mobile_number)
            setemail(memberid.data[0].email)
            setedit(0)
          }
        }
      })
    function Edit(e) {
        dispatch(editucreation(e.target.getAttribute('data-id')))
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
        if (memberid == '') {
            dispatch(putucreation(
                {
                    name: name,
                    email: email,
                    mobile_number: contact,
                    password: pass,
                    role_id: role,
                    // 'icon' : imge
                }
            ))
        }
        else if (memberid != '') {
            dispatch(updateucreation(
                {
                    name: name,
                    email: email,
                    mobile_number: contact,
                    password: pass,
                    role_id: role,
                    'id': memberid.data[0].id
                }
            ))
            setedit(0);
            dispatch(cleardeleteucreation(''))

        }



        form.resetFields();

    };
    // if(datas.length > 1){
    //     alert(datas[0].name)
    // }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
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

    if (ucreation.length > 0) {
        data = ucreation.map((item, i) => {
            return {
                email: item.email,
                name: item.name,
                role: item.role,
                action: (<><div style={{ display: 'flex' }}><i style={{ marginRight: '7px', height: '15px' }} onClick={Edit} data-id={item.id} className="icon icon-edit" /><i data-id={item.id} onClick={Delete} style={{ height: '15px' }} className="icon icon-trash" /></div></>),
                index: item.id,
                key: item.id
            }
        });
    }

    function deleteconfirm() {
        setcustom(false)
        dispatch(deleteucreation({id : deleteid , status : 2}))
        setdeletes(1)
    }
    function deletecancel() {
        setcustom(false)
    }
    function deletestatus() {

        // setdatas(newda)
        setdeleteid('')
        setdeletesuccess(false)
    }
    const onCurrencyChange = newCurrency => {
        setrole(newCurrency)
    };
let role_data = []
if(roles.length > 0){
    role_data = roles.map((item, i) => {
        return (<Option key={item.id} value={item.id}>{item.role}</Option>)
      });
}

    return (
        <div>
            <Form
                form={form}
                initialValues={{ remember: true }}
                name="usercreation"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="gx-signin-form gx-form-row0">
                <Row>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        <Form.Item
                            rules={[{ required: true, message: 'User Name is required' }]} name="uname">
                            <Input value={name} onChange={(e) => {
                                setname(e.target.value)
                                console.log(red_data)
                            }} placeholder="Name" />
                        </Form.Item>
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        <Form.Item
                            rules={[{ required: true, message: 'This field is required' }]} name="role">
                            <Select
                                value={role}
                                onChange={onCurrencyChange}
                                placeholder="Role"
                            >
                                {/* <Option value={'admin'}>{'admin'}</Option>
                                <Option value={'user'}>{'user'}</Option>
                                <Option value={'superadmin'}>{'superadmin'}</Option> */}
                                {role_data}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        <Form.Item
                            rules={[{ required: true, message: 'Password is required' }]} name="pass">
                            <Input.Password value={pass} onChange={(e) => {
                                setpass(e.target.value)
                                console.log(red_data)
                            }} autocomplete="new-password" placeholder="Password" />
                        </Form.Item>

                    </Col>
                </Row>
                <Row>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        <Form.Item
                            rules={[{ required: true, message: 'Contact is required' }]} name="contact">
                            <Input value={contact} onKeyUp={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                            }} onChange={(e) => {
                                setcontact(e.target.value)
                                console.log(red_data)
                            }} placeholder="Contact" />
                        </Form.Item>
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                        <Form.Item name="email" rules={[{
                            required: true, type: 'email', message: 'The input is not valid E-mail!',
                        }]} name="email">
                            <Input value={email} onChange={(e) => {
                                setemail(e.target.value)
                                console.log(red_data)
                            }} placeholder="Email" />
                        </Form.Item>
                    </Col>
                </Row>
                <Col xl={4} lg={4} md={4} sm={24} xs={24}>
                    <Form.Item>
                        <Button type="primary" className="gx-mb-0" htmlType="submit">
                            Submit
              </Button>
                    </Form.Item>
                </Col>
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

export default Usercreation; 
