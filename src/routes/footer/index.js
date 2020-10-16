import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Divider, Table,Col, Row,Button, Checkbox, Form, Input, Select } from "antd";
import axios from 'axios';
import {  putrole,getrole,roleedit,clearrole,updaterole,roledelete,deleted,putfooter,getfooter,clearupdate } from "../../appRedux/actions/Crud";
import SweetAlert from "react-bootstrap-sweetalert";
const Footer = (props) => {
    const { TextArea } = Input;
    const getfooterdata = useSelector(({ crud }) => crud.getfooterdata);
    const update = useSelector(({ crud }) => crud.update);
    const [add1, setadd1] = useState('');
    const [add2, setadd2] = useState('');
    const [tel, settel] = useState('');
    const [edit, setedit] = useState(0);
    const [stop, setstop] = useState(0);
    const [stop1, setstop1] = useState(0);
    const [custom, setcustom] = useState(false);
    const [deleteid, setdeleteid] = useState(false);
    const red_data = useSelector(({ crud }) => crud.getrole);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [deletesuccess, setdeletesuccess] = useState(false);
    const [deletes, setdeletes] = useState(0);
    useEffect(() => {
        if (stop === 0) {
            dispatch(getfooter())
            setstop(1)
        }
    })
    useEffect(()=>{
      if(getfooterdata !== ''){        
          if(stop1 == 0){
            form.setFieldsValue({
                tel: getfooterdata.data[0].mobile,
                add1: getfooterdata.data[0].addressline1,
                add2: getfooterdata.data[0].addressline2
              })
              settel(getfooterdata.data[0].mobile)
              setadd1(getfooterdata.data[0].addressline1)
              setadd2(getfooterdata.data[0].addressline2)
              setstop1(1)
          }        
        }
    })
    useEffect(()=>{
        if(update == 1){  
            if(edit == 1){
              form.setFieldsValue({
                  tel: getfooterdata.data[0].mobile,
                  add1: getfooterdata.data[0].addressline1,
                  add2: getfooterdata.data[0].addressline2
                })
                settel(getfooterdata.data[0].mobile)
                setadd1(getfooterdata.data[0].addressline1)
                setadd2(getfooterdata.data[0].addressline2)
                setedit(0)
                dispatch(clearupdate())
            }

          }
      })


    // useEffect(()=>{
    //   if(deleteid != '' ){
    //     setcustom(true)
    //   }
    // })
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      const onFinish = values => {

        dispatch(putfooter(
          {
            "addressline1": add1,
            "addressline2": add2,
            "mobile" : tel
          }
        )) 
        setedit(1)
        form.resetFields();       
      };

// if(getfooterdata.length > 0){
//     alert(15)
// }

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

            <Card className={`footer-card`} title="Footer">
            <Form
        form={form}
        initialValues={{ remember: true }}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="gx-signin-form gx-form-row0">
        <Row>

          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Address is required' }]} name="add1">
              <TextArea rows={4} value={add1} onChange={(e) => {
                setadd1(e.target.value)
              }} placeholder="Address Line1...." />
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Address is required' }]} name="add2">
              <TextArea rows={4} value={add2} onChange={(e) => {
                setadd2(e.target.value)
                
              }} placeholder="Address Line2...." />
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Mobile is required' }]} name="tel">
              <Input type="text" value={tel} onKeyUp={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9+]/g, '');
                            }} onChange={(e) => {
                settel(e.target.value)
              }} placeholder="Tel/Mobile" />
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

export default Footer; 
