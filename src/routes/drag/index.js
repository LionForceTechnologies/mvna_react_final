import React, { useState, useEffect, useRef } from "react"

import { Link } from "react-router-dom";
import { Card, Divider, Table } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import axios from 'axios';
import { Col, Row } from "antd";

const Drag = (props) => {
    const [menu, setmenu] = useState('');
    const [edit, setedit] = useState(0);
    const [nth, setnth] = useState('');
    const [form] = Form.useForm();
    useEffect(() => {
        getmenus();
    });
    function getmenus() {
        axios.get('http://localhost:8000/api/getdata')
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
            });
    }
    useEffect(() => {
        if (document.getElementsByClassName("mydiv").length > 0) {
            dragElement(document.getElementsByClassName("mydiv")[0]);
        }
        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            elmnt.onmousedown = dragMouseDown;
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                if(elmnt.offsetTop - pos2 <0){
                    
                }
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                console.log(elmnt.offsetTop - pos2);
            }

            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

    });
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = values => {
        // axios.put('http://localhost:8000/api/putdata')
        alert(menu)
        form.resetFields();
    };
    const editmenu = (e) => {
        let current_index = e.target.getAttribute('id');
        console.log('menus');
        setedit(1);
        setnth(current_index);
    }
    const formenu = (e) => {
        setmenu(e.target.value);
    }
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

    const data = [];
    let menu_1 = menu;
    return (
        <div>
            <div className={`for_layout`}>
                <Card>
                    <div className={`inner_card`}>
                        <div className={`mydiv`}>
                            <div className={`mydivheader`}>Click here to move</div>
                            <p>Move</p>
                            <p>this</p>
                            <p>DIV</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Drag;
