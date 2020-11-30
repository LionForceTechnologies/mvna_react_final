import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Divider, Table, Col, Row, Button, Checkbox, Form, Input, Select } from "antd";
import axios from 'axios';
import {cleardeleterolepermission, getpagepermission, getrole, putpagepermission, editrolepermission,getrolepermission,updatepagepermission,deletepermission,clearrolepermission } from "../../appRedux/actions/Crud";
import SweetAlert from "react-bootstrap-sweetalert";
const Rolepermission = (props) => {
    const rolepermissionid = useSelector(({ crud }) => crud.rolepermissionid);
    const rolepermission = useSelector(({ crud }) => crud.rolepermission);
    const ifdeleted = useSelector(({ crud }) => crud.deletepermissionid);
    const roles = useSelector(({ crud }) => crud.getrole);
    const pagepermissions = useSelector(({ crud }) => crud.pagepermission);
    const [role, setrole] = useState('');
    const [pass, setpass] = useState('');
    const [name, setname] = useState('');
    const [contact, setcontact] = useState('');
    const [email, setemail] = useState('');
    const [edit, setedit] = useState(0);
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
    const [permissionsmapped, setpermissionsmapped] = useState([]);
    const [permissionid, setpermissionid] = useState('');
    const [swarning, setswarning] = useState(false);
    const [end, setend] = useState(0);
    const [turnoff, setturnoff] = useState(false);
    const { Option } = Select;
    useEffect(() => {
        if (stop === 0) {
            dispatch(getrole())
            dispatch(getpagepermission())
            dispatch(getrolepermission())
        }
        setstop(1)
    })
    useEffect(() => {
        if (ifdeleted == 'success') {
            if (deletes != 0) {
                setdeletesuccess(true)
                dispatch(cleardeleterolepermission(''))
                setdeletes(1)
            }
        }
    })
    useEffect(() => {
    
    })
    if (rolepermissionid !== '') {
        
        if (edit !== 0) {            
            if ((rolepermissionid != 'no data found')) {
                form.setFieldsValue({
                    role: rolepermissionid.data[0].role,
                })
                // console.log(rolepermissionid.data[0].role_permission)
                setrole(rolepermissionid.data[0].role_id)
                setpermissionsmapped(rolepermissionid.data[0].role_permission)
                setend(0)

            } else {
                alert('there is no record')
            }
            setturnoff(true)
            setedit(0)
        }
    }
useEffect(()=>{

    if(rolepermissionid != ''){
        if(end === 0){

            setpermissionsmapped([])
            for(let i=0;i<rolepermissionid.data[0].role_permission.length;i++){
                if(document.getElementById(rolepermissionid.data[0].role_permission[i])){
                    document.getElementById(rolepermissionid.data[0].role_permission[i]).checked = true
                    setpermissionsmapped(old => [...old, rolepermissionid.data[0].role_permission[i]])
                }
                // alert(rolepermissionid.data[0].role_permission[i])
            }
setend(1)

        }

        
    }
})
    useEffect(() => {
        if (permissionid !== '') {

            // let permission = permissionsmapped;
            if (permissionsmapped.indexOf(permissionid) == -1) {
                // let pmapped = permissionsmapped;
                // permission.push(permissionid);
                setpermissionsmapped(old => [...old, permissionid])
            }
            if (permissionsmapped.indexOf(permissionid) != -1) {
                // let pmapped = permissionsmapped;
                // permission.push(permissionid);
                let droid  = permissionsmapped;
                let droid2 = []
                droid.filter((item)=>{
                    // alert(permissionid)
                    return item != permissionid 
                }).map((item)=>{
                    droid2.push(item)
                    return item
                })
                // alert(droid2.length)
                // // console.log(droid)
                setpermissionsmapped(droid2)
            }
        }


    }, [permissionid])
    function Edit(e) {
        if(rolepermissionid != ""){
            if(rolepermissionid != "no data found"){
            //  alert(rolepermissionid.data.length)
                if(rolepermissionid.data.length > 0){
                    dispatch(clearrolepermission())

                }
            }
        }
        dispatch(editrolepermission(e.target.getAttribute('data-id')))
        setedit(1)
    }

    function access(e) {
        // if(e.target.value == 'on'){
        //     e.target.value = 'off'
        // }
        // let pmapped = permissionsmapped
        if (e.target.checked == true) {
            setpermissionid(e.target.getAttribute('data-id'))

        }
        if (e.target.checked == false) {
            setpermissionid(e.target.getAttribute('data-id'))

        }
    }

    function Delete(e) {
        setdeleteid(e.target.getAttribute('data-id'))
        setcustom(true)
    }
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = values => {
        
        if (rolepermissionid != '') {
            if (permissionsmapped.length == 0) {
                setswarning(true)
            }
            else {
                dispatch(updatepagepermission({
                    role_id: role,
                    role_permission: permissionsmapped,
                    id : rolepermissionid.data[0].id
                }))
            }
            setturnoff(false)
        }
        else if (rolepermissionid == '') {

            if (permissionsmapped.length == 0) {
                setswarning(true)
            }
            else {
                dispatch(putpagepermission({
                    role_id: role,
                    role_permission: permissionsmapped
                }))
            }
            setedit(0);
        }
        // alert(permissionsmapped.length)

        let checks = document.getElementsByTagName('input');
        for(let i=0;i<checks.length;i++)
        {
            if(checks[i].getAttribute('type') == "checkbox")
            {
                checks[i].checked = false;
            }
        }
        form.resetFields();

    };
    const columns = [
        {
            title: 'Page',
            dataIndex: 'page',
            key: 'page',
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        }
    ];
    let data = [];
    // alert(typeof pagepermissions)
    if (pagepermissions.length > 0) {
        if (rolepermissionid !== '') {
            // rolepermissionid.data[0].role_permission[0]
            data = pagepermissions.map((item, i) => {
                return {
                    page: item.menu,
                    action: (<><div style={{ display: 'flex' }}><input type="checkbox" style={{ marginRight: '7px', height: '15px' }} onChange={access} id={item.id} data-id={item.id} /></div></>),
                    index: item.id,
                    key: item.id
                }
            });
        } else {            
            data = pagepermissions.map((item, i) => {
                return {
                    page: item.menu,
                    action: (<><div style={{ display: 'flex' }}><input type="checkbox" style={{ marginRight: '7px', height: '15px' }} onChange={access} data-id={item.id} /></div></>),
                    index: item.id,
                    key: item.id
                }
            });
        }
    }

    const columns1 = [
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
    let data1 = [];

    if (rolepermission.length > 0) {
        data1 = rolepermission.map((item, i) => {
            return {
                role: item.role,
                action: (<><div style={{ display: 'flex' }}><i style={{ marginRight: '7px', height: '15px' }} onClick={Edit} data-id={item.id} className="icon icon-edit" /><i data-id={item.id} onClick={Delete} style={{ height: '15px' }} className="icon icon-trash" /></div></>),
                index: item.id,
                key: item.id
            }
        });
    }


let datas2 = [];
if (rolepermission.length > 0) {
    datas2 = rolepermission.map((item, i) => {
        return item.role_id
    });
}
console.log('roles',datas2)
    function deleteconfirm() {
        setcustom(false)
        dispatch(deletepermission({ id: deleteid, status: 2 }))
        setdeletes(1)
    }
    function deletecancel() {
        setcustom(false)
    }
    function confirmwarning() {
        setswarning(false)
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
    if (roles.length > 0) {
        
        role_data = roles.filter((item)=>{
            return datas2.includes(`${item.id}`) != true
        }).map((item, i) => {          
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
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Card title="Roles capability">
                            <Form.Item
                                rules={[{ required: true, message: 'This field is required' }]} name="role">
                                <Select
                                    value={role}
                                    onChange={onCurrencyChange}
                                    placeholder="Role"
                                    disabled = {turnoff}
                                >
                                    {role_data}
                                </Select>
                            </Form.Item>
                            <Table  pagination={false} className="gx-table-responsive" columns={columns} dataSource={data} />

                            <Col xl={4} lg={4} md={4} sm={24} xs={24}>
                                <Form.Item>
                                    <Button type="primary" className="gx-mb-0" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Col>

                        </Card>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Card title="List Of Roles Capability">
                            <Table className="gx-table-responsive" columns={columns1} dataSource={data1} />
                        </Card>
                    </Col>
                </Row>
            </Form>
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
            <SweetAlert show={swarning} warning title={`Select any page for this role `}
                onConfirm={confirmwarning}>
                {/* <IntlMessages id="sweetAlerts.btnClicked"/> */}
            </SweetAlert>
        </div>
    );
};

export default Rolepermission; 
