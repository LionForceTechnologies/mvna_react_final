import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { Redirect, Link, useLocation, BrowserRouter as Router,useHistory } from "react-router-dom";
import { getwebpage, gettwitter } from "../../appRedux/actions/Webauth";
import "./demo.css";
function Web() {

    const [start, setstart] = useState(0);
    const [check, setcheck] = useState(0);
    const [pending, setpending] = useState(0);
    const [page, setpage] = useState(<div className={`show_output`}> </div>)
    const dispatch = useDispatch();
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const red_data = useSelector(({ webauth }) => webauth.seteditor);
    const geta_page = useSelector(({ webauth }) => webauth.get_webpage);
    const gettwitters = useSelector(({ webauth }) => webauth.gettwitters);
    let history = useHistory();
    useEffect(() => {
        if (geta_page.length > 0) {
            if (start == 0) {
                if (geta_page.length > 0) {
                    const Mystyles = createGlobalStyle`${geta_page[0].web_css}`
                    if(geta_page[0].web_html.length == 0){

                        history.push('/');
                        return;
                    }
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
        if (((locations == '/') || (locations == '/')) && (window.screen.width < 601) || ((locations == '/') || (locations == '/')) && (window.screen.width < 992)) {
            if (document.getElementsByClassName('demo').length > 0) {
                document.getElementsByClassName('demo')[0].style.overflow = 'auto'
            }
        }
        if (((locations == '/') || (locations == '/')) && (window.screen.width > 992)) {
            let nav_h = document.getElementsByClassName('navbar')[0].offsetHeight;
            let total_h = document.getElementsByClassName('blogpage')[0].offsetHeight - nav_h + 15;
            // let height_calc = total_h - nav_h - 22;
            if (document.getElementsByClassName('show_output').length > 0) {
                document.getElementsByClassName('show_output')[0].style.height = `${total_h}px`
            }
            if (document.getElementsByClassName('home_slider_dependent')) {
                if(document.getElementsByClassName('home_slider_dependent').length > 0){
                    let calcheight = document.getElementsByClassName('home_slider_dependent')[0].offsetHeight
                    document.getElementsByClassName('home_slider_dependent')[0].style.setProperty('height',`${calcheight+15}px`,'important')                        
                    let parentheight = document.getElementsByClassName('homeinnercontainer')[0].offsetHeight;
                    document.getElementsByClassName('home_slider_container')[0].style.height = `${parentheight - (calcheight + 15)}px`
                }
            }

        }
        else {
            if (((locations == '/') || (locations == '/')) && (window.screen.width > 992)) {
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
        
            if (window.location.pathname != '/' || window.location.pathname != '/') {
                if(document.getElementsByClassName('demo')){
                    if(document.getElementsByClassName('demo').length > 0){
                        document.getElementsByClassName('demo')[0].style.lineHeight = '21px';
                    }
                }
            }


    })
    useEffect(() => {
        if (pending == 0) {
            if (window.location.pathname == '/' || window.location.pathname == '/') {
                dispatch(getwebpage(query.get("")))
            }
            if(query.get("id") == null){
                history.push('/')
            }
            dispatch(getwebpage(query.get("id")))
            dispatch(gettwitter())
        }
        setpending(1)

    })
    function createMarkup(drag) { return { __html: drag }; };
    useEffect(() => {
        let locations = window.location.pathname;
        if (((locations == '/') || (locations == '/'))) {

            if (window.screen.width > 992) {
                if (document.getElementsByClassName('home_slider_dependent')) {
                    if(document.getElementsByClassName('home_slider_dependent').length > 0){
                        let calcheight = document.getElementsByClassName('home_slider_dependent')[0].offsetHeight
                        document.getElementsByClassName('home_slider_dependent')[0].style.setProperty('height',`${calcheight+15}px`,'important')                        
                        let parentheight = document.getElementsByClassName('homeinnercontainer')[0].offsetHeight;
                        document.getElementsByClassName('home_slider_container')[0].style.height = `${parentheight - (calcheight + 15)}px`
                    }
                }



            }
            if (document.getElementsByClassName('gjs-lory-slides')) {

                if(document.getElementsByClassName('demo')){
                    if(document.getElementsByClassName('demo').length > 0){
                        if(document.getElementsByClassName('demo')[0].children.length > 0){
                            let elem = document.createElement('script')
                            elem.innerHTML = document.getElementById('tenet').innerHTML
                            document.body.appendChild(elem)
                        }
                    }
                }









                if (document.getElementsByClassName('gjs-lory-slides').length > 0) {
                    document.getElementsByClassName('prevbar')[0].style.left = 'unset'
                    document.getElementsByClassName('prevbar')[0].style.right = '0'
                    document.getElementsByClassName('prevbar')[0].style.top = 'unset'
                    document.getElementsByClassName('prevbar')[0].style.bottom = '50px'
                    document.getElementsByClassName('nxtbar')[0].style.left = 'unset'
                    document.getElementsByClassName('nxtbar')[0].style.right = '0'
                    document.getElementsByClassName('nxtbar')[0].style.top = 'unset'
                    document.getElementsByClassName('nxtbar')[0].style.bottom = '0'
                    if (document.getElementsByClassName('gjs-lory-slides')[0].children.length > 0) {
                        document.getElementsByClassName('gjs-lory-slides')[0].parentElement.style.width = '100%';
                        document.getElementsByClassName('gjs-lory-slides')[0].parentElement.parentElement.style.width = '100%';
                        document.getElementsByClassName('gjs-lory-slides')[0].style.width = '100%';
                        for (let i = 0; i < document.getElementsByClassName('gjs-lory-slides')[0].children.length; i++) {
                            document.getElementsByClassName('gjs-lory-slides')[0].children[i].style.width = '100%';
                        }
                        if (document.getElementsByClassName('gjs-lory-slides')[0].children.length - 1 != 0) {
                            let b = document.getElementsByClassName('gjs-lory-slides')[0].children.length
                            let c = b - 1;
                            document.getElementsByClassName('gjs-lory-slides')[0].children[c].style.display = 'none';
                            document.getElementsByClassName('gjs-lory-slides')[0].children[1].style.marginLeft = '-10px';
                            // localStorage.setItem('forchecking',1);
                        }
                    }
         
         

         
                }
            

            
            
            
            
            
            
            
            
            
            }
        }
    })
    return page

}
export default Web;