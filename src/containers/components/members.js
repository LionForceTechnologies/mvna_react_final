import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import GoogleApiWrapper from './GoogleApiWrapper.js';
import { Card, Divider, Table, Col, Row, Button, Checkbox, Form, Input, Select } from "antd";
import { getmemberweb,getcountry,getmemberwebcountry } from "../../appRedux/actions/Webauth";
import {hostname} from "../../hostname";
function Members() {
    const { Option } = Select;
    const dispatch = useDispatch();
    const [stop, setstop] = useState(0);
    const [countrys, setcountrys] = useState(0);
    
    const member = useSelector(({ crud }) => crud.getmember_web);
    const getcountrys = useSelector(({ crud }) => crud.getcountrys);
    useEffect(() => {
        if (stop === 0) {
            dispatch(getmemberweb())
            dispatch(getcountry())
        }
        setstop(1)
    })
    let data = [];
    let country = [];
    if(getcountrys.length > 0){
        for(let i=0;i<getcountrys.length;i++){
            if(getcountrys[i].country != null && getcountrys[i].country != undefined && getcountrys[i].country != 'undefined'){
                country.push(
                    <Option value={getcountrys[i].country}>{getcountrys[i].country}</Option>
                )
            }

        }
    }
    let pointers = []
    if(member.length > 0){
        for(let i=0;i<member.length;i++){
            let lat = []
            lat.push(member[i].lat)
            lat.push(member[i].lon)
            pointers.push(lat)
            data.push(
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Card className={`member_card`}>
                            <div className={`members_wrapper`}>
                                <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src={`${hostname}/uploads/${member[i].icon}`}></img></div>
            <p >{member[i].name}</p>
                            </div>
                            <div className={`member_bottom`}><p className={`click_explore`}><a href={`${member[i].link}`} style={{color : 'black'}} target="blank">click to explore</a></p></div>
                        </Card>
                    </Col>    
            )
        }
    }
    const onCurrencyChange = newCurrency => {
        dispatch(getmemberwebcountry(newCurrency))
        setcountrys(newCurrency)
    };
    return (
        <>
            <section id="iee433" class="flex-sect">
                <div id="ihvaeo" class="container-width">
                    <div id="ih51x7" class="flex-title">Members</div>
                </div>
            </section>
            <div className={`mapwrapper `}>
                <GoogleApiWrapper alap={pointers} />
            </div>
<div className={`about_members`}>
    <p>Med-Vet-Net Association Scientific Partners</p>
    <p >The association currently comprises 20 scientific partners from 13 European countries, retaining the majority of its original founding members. It numbers 9 public health and 11 food/veterinary institutes and aims to continue to build on the success of its predecessor by promoting cross-disciplinary harmonisation between a more extensive network of veterinary and medical research institutions and laboratories at an EU level and beyond. This approach will help foster the One Heath – One Medicine agenda.</p>
</div>
            <div className={`uline`}>-</div>
            <div className={`filters`}>
                <p>Filter by</p>
                <Form.Item className={`filter_bys`} name="role">
                    <Select
                        className={`filter_by`}
                        placeholder="All Country"
                        onChange={onCurrencyChange}
                    >
                        {/* <Option value={'admin'}>{'admin'}</Option>
                        <Option value={'user'}>{'user'}</Option>
                        <Option value={'superadmin'}>{'superadmin'}</Option> */}
                        {country}

                    </Select>
                </Form.Item>
            </div>
            <Row className={`membersui`}>
                {/* <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Card className={`member_card`}>
                        <div className={`members_wrapper`}>
                            <div className={`parent_member`}> <img className={`member_logo_image`} style={{ marginBottom: '8px' }} src="/images/MVNA_Logo_Color.png"></img></div>
                            <p >Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
sed diam nonumy eirmod</p>
                        </div>
                        <div className={`member_bottom`}><p className={`click_explore`}>click to explore</p></div>
                    </Card>
                </Col> */}
                {data}
            </Row>


        </>
    )
}
export default Members;