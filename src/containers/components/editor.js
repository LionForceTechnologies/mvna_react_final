import React, { useEffect, useState } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
// import "./ui_style.css";
import { useDispatch, useSelector } from "react-redux";
import {  getdata, seteditor,putpage,getpage,setspinner} from "../../appRedux/actions/Crud";
// import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../appRedux/actions/Auth";
import addTimerPlugin from './timer';
import GrapesJS from 'grapesjs';
import gjsBasicBlocks from 'grapesjs-blocks-basic';
import gjsNavbar from 'grapesjs-navbar';
import grapesjsCustomCode from 'grapesjs-custom-code';
import grapesjsLorySlider from 'grapesjs-lory-slider'
import plugin from 'grapesjs-style-bg';
import Bsmenu from './bsmenu';
import grapesjsPluginExport from 'grapesjs-plugin-export';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
import grapesjsBlocksFlexbox from 'grapesjs-blocks-flexbox';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { Spin } from "antd";
import axios from 'util/Api'
function Editor() {
  // const [htmlString, setHtmlString] = useState(null);
  // const [cssString, setCssString] = useState("");
  const [start, setstart] = useState(0);
  const [check, setcheck] = useState(0);
  const [spin, setspin] = useState('');
  const dispatch = useDispatch();
  // const red_data = useSelector(({ crud }) => crud.seteditor);
  const set_editor = useSelector(({ crud }) => crud.seteditor);
  const geta_page = useSelector(({ crud }) => crud.getpage);
  const spinner = useSelector(({ crud }) => crud.spinner);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  console.log('testing query');
  console.log(query.get("id"));
  if(geta_page.length > 0){
    if(check == 0){
      localStorage.removeItem('gjs-assets')
      localStorage.removeItem('gjs-components')
      localStorage.removeItem('gjs-css')
      localStorage.removeItem('gjs-html')
      localStorage.removeItem('gjs-styles')
      setcheck(1)
    }
  }
  // useEffect(()=>{
  //   alert(15)
  // })
  useEffect(() =>{
    if(spinner == 1){
      
    }
    if(spinner == 0){
      setspin('')
    }
  })
  useEffect(() =>{
    if(start == 0){
      dispatch(getpage(query.get("id")))
      setstart(1)
    } 
  })
  useEffect(() => {
    if(geta_page.length > 0){
      localStorage.setItem('gjs-assets',geta_page[0].mvna_assets)
      localStorage.setItem('gjs-components',geta_page[0].mvna_components)
      localStorage.setItem('gjs-css',geta_page[0].mvna_css)
      localStorage.setItem('gjs-html',geta_page[0].mvna_html)
      localStorage.setItem('gjs-styles',geta_page[0].mvna_styles)
    }
    else{
      localStorage.removeItem('gjs-assets')
      localStorage.removeItem('gjs-components')
      localStorage.removeItem('gjs-css')
      localStorage.removeItem('gjs-html')
      localStorage.removeItem('gjs-styles')
    }
    const e = GrapesJS.init({
      container: `#example-editor`,
      fromElement: true,
      plugins: [grapesjsLorySlider,grapesjsPresetWebpage,grapesjsPluginExport,grapesjsBlocksFlexbox],
      panels: {

      },
      commands: {

      },
      // canvas: {
      //   core:'canvas-clear'
      // }
    });

    let dashed = e.runCommand('sw-visibility');    
    const panelManager = e.Panels;
    const panel = e.Commands;
    const sm = e.StorageManager
    let newPanel = panelManager.addPanel({
      id: 'myNewPanel',
      visible: true,
      buttons: [{
        id: 'smile',
        className: 'fa fa-save',
        attributes: { title: 'Update Promo' },
        command: 'customCommand'
      }],
    });
    panel.add('customCommand', {
      run: function (editor, sender) {
        sm.load(['css', 'html'], function (res) {
          // console.log(res)
          let jar = {
            html: e.getHtml(),
            css: e.getCss()
          }

          localStorage.setItem('renderer', JSON.stringify(res));
          dispatch(putpage({
            gjs_styles : localStorage.getItem('gjs-styles'),
            gjs_css : localStorage.getItem('gjs-css'),
            gjs_components : localStorage.getItem('gjs-components'),
            gjs_html : localStorage.getItem('gjs-html'),
            gjs_assets : localStorage.getItem('gjs-assets'),
            id : query.get("id"),
            webHTML : e.getHtml(),
            webCss : e.getCss(),
            havedata : set_editor
          }))
        })
      }
    });
  });
  useEffect(()=> {
    document.getElementById('example-editor').style.height = '100%'
  })
  return (
    <>
    {spinner == 'start' ? (<Spin className={`geditor`}><div id="example-editor" ></div></Spin>) :(<div id="example-editor" ></div>)}
    

    </>
  );
}
export default Editor