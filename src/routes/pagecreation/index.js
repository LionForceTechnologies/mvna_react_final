import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Divider, Table } from "antd";
import axios from 'axios';
import { Col, Row } from "antd";
import {  getdata, seteditor, getpage} from "../../appRedux/actions/Crud";

const PageCreation = (props) => {
    const [menu, setmenu] = useState('');
    const [edit, setedit] = useState(0);
    const [stop, setstop] = useState(0);
    const red_data = useSelector(({ crud }) => crud.data);
    const dispatch = useDispatch();
    useEffect(() => {
        if (stop === 0) {
            dispatch(getdata())
        }
        setstop(1)
    })
    function Edit(e) {
        dispatch(getpage(e.target.getAttribute('data-id')))        
    }
    function Delete(e) {

    }
    const columns = [
        {
            title: 'Menu Name',
            dataIndex: 'menu',
            key: 'menu',
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        }
    ];
    let data = [];
    if (red_data.length > 0) {
        data = red_data.map((item, i) => {
            let rts = '/'
            if(item.menu.toUpperCase() == 'HOME'){
                rts = '/web'
            }
            return {
                menu: item.menu,
                // <i data-id={item.id} onClick={Delete} style={{ height: '15px', marginLeft: '15px' }} className="icon icon-trash" />
                action: (<><div style={{ display: 'flex' }}><Link to={`/admin/editor${item.url.split(" ").join("")}?id=${item.id}`} onClick={Edit} data-id={item.id} >Go to Editor</Link><Link to={`${rts.split(" ").join("")}?id=${item.id}`} style={{marginLeft: '15px' }}  data-id={item.id} >Go to Page</Link></div></>),
                index: item.id,
                key: item.id
            }
        });
    }
    return (
        <div>
            <Card title="Pages">
                <Table className="gx-table-responsive" columns={columns} dataSource={data} />
            </Card>
        </div>
    );
};

export default PageCreation; 
