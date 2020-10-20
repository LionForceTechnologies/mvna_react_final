import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { getwebpage, gettwitter } from "../../appRedux/actions/Webauth";
import "./demo.css";
function Web() {

    const [start, setstart] = useState(0);
    const [check, setcheck] = useState(0);
    const [pending, setpending] = useState(0);
    const [page, setpage] = useState(<div className={`show_output`}>
    </div>)
    const dispatch = useDispatch();
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const red_data = useSelector(({ webauth }) => webauth.seteditor);
    const geta_page = useSelector(({ webauth }) => webauth.get_webpage);
    const gettwitters = useSelector(({ webauth }) => webauth.gettwitters);
    useEffect(() => {
        if (geta_page.length > 0) {
            if (start == 0) {
                if (geta_page.length > 0) {
                    const Mystyles = createGlobalStyle`${geta_page[0].web_css}`
                    setpage(
                        <div className={`show_output`}>
                            <Mystyles />
                            <div className={`demo`} dangerouslySetInnerHTML={createMarkup(geta_page[0].web_html)}>
                            </div>
                        </div>
                    )
                }
                setstart(1)
            }
        }
    })
    useEffect(() => {
        let locations = window.location.pathname;
        if (((locations == '/user') || (locations == '/user/')) && (window.screen.width < 601) || ((locations == '/user') || (locations == '/user/')) && (window.screen.width < 992)) {
            if (document.getElementsByClassName('demo').length > 0) {
                document.getElementsByClassName('demo')[0].style.overflow = 'auto'
            }

        }
        if (((locations == '/user') || (locations == '/user/')) && (window.screen.width > 992)) {
            let nav_h = document.getElementsByClassName('navbar')[0].offsetHeight;
            let total_h = document.getElementsByClassName('blogpage')[0].offsetHeight - nav_h + 15;
            // let height_calc = total_h - nav_h - 22;
            if (document.getElementsByClassName('show_output').length > 0) {
                document.getElementsByClassName('show_output')[0].style.height = `${total_h}px`
            }

        }
        else {
            if (((locations == '/user') || (locations == '/user/')) && (window.screen.width > 992)) {
                document.getElementsByClassName('show_output')[0].style.flex = 'auto';
            } else {
                // document.getElementsByClassName('show_output')[0].style.flex = 'auto';
            }
            // document.getElementsByClassName('show_output')[0].style.height = '100%';
        }
    })
    if (gettwitters.length > 0) {
        let tweet = document.getElementsByClassName('twitter_text')
        if (tweet.length > 0) {
            for (let j = 0; j < tweet.length; j++) {
                tweet[j].innerHTML = gettwitters[j].text
            }
        }
    }
    useEffect(() => {
        if (pending == 0) {
            if (window.location.pathname == '/user' || window.location.pathname == '/user/') {
                dispatch(getwebpage(query.get("")))
            }
            dispatch(getwebpage(query.get("id")))
            dispatch(gettwitter())
        }
        setpending(1)

    })
    function createMarkup(drag) { return { __html: drag }; };
    return page

}
export default Web;