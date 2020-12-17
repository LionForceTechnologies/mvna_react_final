import React, { useEffect, useState } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
// import "./ui_style.css";
import { useDispatch, useSelector } from "react-redux";
import {  getdata, seteditor,putpage,getpage,setspinner} from "../../appRedux/actions/Crud";
// import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../appRedux/actions/Auth";

import GrapesJS from 'grapesjs';
import gjsBasicBlocks from 'grapesjs-blocks-basic';
import gjsNavbar from 'grapesjs-navbar';
import grapesjsCustomCode from 'grapesjs-custom-code';
import grapesjsLorySlider from 'grapesjs-lory-slider'

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
  const location = useLocation();
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
  // useEffect(()=> {
    
  // })

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

          // localStorage.setItem('renderer', JSON.stringify(res));
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
  // useEffect(()=>{
  //   // alert(document.getElementsByClassName('ant-spin-nested-loading').length)
  //   alert(16)
  // })
  // alert(15)
  
useEffect(()=>{
  if(document.getElementsByTagName('iframe')){
    if(document.getElementsByTagName('iframe').length > 0){
      if(location.pathname.indexOf('/Home') != -1){
        let iframe = document.getElementsByTagName('iframe')[0];
        let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        
        if(localStorage.getItem('forchecking')){
          if(innerDoc.getElementsByClassName('gjs-lory-slides').length > 0){
            let elem = document.createElement('script')
            elem.innerHTML = document.getElementById('tenet').innerHTML
            innerDoc.body.appendChild(elem)
            innerDoc.getElementsByClassName('prevbar')[0].style.left = 'unset'
            innerDoc.getElementsByClassName('prevbar')[0].style.right = '0'
            innerDoc.getElementsByClassName('prevbar')[0].style.top = 'unset'
            innerDoc.getElementsByClassName('prevbar')[0].style.bottom = innerDoc.getElementsByClassName('prevbar')[0].offsetHeight
            innerDoc.getElementsByClassName('nxtbar')[0].style.left = 'unset'
            innerDoc.getElementsByClassName('nxtbar')[0].style.right = '0'
            innerDoc.getElementsByClassName('nxtbar')[0].style.top = 'unset'
            innerDoc.getElementsByClassName('nxtbar')[0].style.bottom = '0'
            if(innerDoc.getElementsByClassName('gjs-lory-slides')[0].children.length > 0){
              innerDoc.getElementsByClassName('gjs-lory-slides')[0].parentElement.style.width = '100%';
              innerDoc.getElementsByClassName('gjs-lory-slides')[0].parentElement.parentElement.style.width = '100%';
              innerDoc.getElementsByClassName('gjs-lory-slides')[0].style.width = '100%';              
              for( let i=0; i < innerDoc.getElementsByClassName('gjs-lory-slides')[0].children.length;i++)
              {
                innerDoc.getElementsByClassName('gjs-lory-slides')[0].children[i].style.width = '100%';
              }
              if(innerDoc.getElementsByClassName('gjs-lory-slides')[0].children.length-1 != 0){
                let b = innerDoc.getElementsByClassName('gjs-lory-slides')[0].children.length
                let c = b-1;
                innerDoc.getElementsByClassName('gjs-lory-slides')[0].children[c].style.display = 'none';
                innerDoc.getElementsByClassName('gjs-lory-slides')[0].children[1].style.marginLeft = '-10px';
                // localStorage.setItem('forchecking',1);
              }
            }
          }
        }
        innerDoc.addEventListener('drop', () => {
          localStorage.setItem('forchecking',0);
          let iframe = document.getElementsByTagName('iframe')[0];
          let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
          if(localStorage.getItem('forchecking')){
            if(innerDoc.getElementsByClassName('gjs-lory-slides').length > 0){
              if(innerDoc.getElementsByClassName('gjs-lory-slides')[0].children.length > 0){
                innerDoc.getElementsByClassName('gjs-lory-slides')[0].parentElement.style.width = '100%';
                innerDoc.getElementsByClassName('gjs-lory-slides')[0].parentElement.parentElement.style.width = '100%';
                innerDoc.getElementsByClassName('gjs-lory-slides')[0].style.width = '100%';
                for( let i=0; i < innerDoc.getElementsByClassName('gjs-lory-slides')[0].children.length;i++)
                {
                  innerDoc.getElementsByClassName('gjs-lory-slides')[0].children[i].style.width = '100%';
                }
                if(innerDoc.getElementsByClassName('gjs-lory-slides')[0].children.length-1 != 0){
                  let b = innerDoc.getElementsByClassName('gjs-lory-slides')[0].children.length
                  let c = b-1;
                  innerDoc.getElementsByClassName('gjs-lory-slides')[0].children[c].style.display = 'none';
                  // localStorage.setItem('forchecking',1);
                }
              }
            }
          }
        })

      }

    }

  }
})
// if(geta_page.length == 0){

// }
useEffect(()=>{
  let iframe = document.getElementsByTagName('iframe')[0];
        let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        if(innerDoc.getElementById('wrapper')){
          if(geta_page.length == 0){
            if(innerDoc.getElementById('wrapper').children.length){
              for(let dd = 0;dd<innerDoc.getElementById('wrapper').children.length;dd++){
                innerDoc.getElementById('wrapper').children[dd].remove()
              }
            }
            if(innerDoc.getElementsByClassName('sp-container')){
              if(innerDoc.getElementsByClassName('sp-container').length > 0){
                for(let cc = 0;cc < innerDoc.getElementsByClassName('sp-container').length;cc++){
                  innerDoc.getElementsByClassName('sp-container')[cc].style.display = 'none'
                }
              }
            }   
          }
        }
        // if(innerDoc.children){
        //   if(innerDoc.children.length > 0){
        //     let checkingdivs = innerDoc.children[0].children;
        //     for(let c=0;c<innerDoc.children[0].children.length;c++){
        //       if(checkingdivs[c].tagName == 'BODY'){
        //         if(geta_page.length == 0){
        //           for(let d=0;d<checkingdivs[c].children[1].children.length;d++){
        //             if(checkingdivs[c].children[1].children){
        //               checkingdivs[c].children[1].children[d].remove();
        //             }
        //           }
        //         }
        //       }
        //     }
        //   }
        // }
})

useEffect(()=>{
  let iframe = document.getElementsByTagName('iframe')[0];
  let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  if(innerDoc.getElementsByClassName('sp-container')){
    if(innerDoc.getElementsByClassName('sp-container').length > 0){
      for(let cc = 0;cc < innerDoc.getElementsByClassName('sp-container').length;cc++){
        innerDoc.getElementsByClassName('sp-container')[cc].style.display = 'none'
      }
    }
  }
  if(innerDoc.getElementsByClassName('gjs-pn-panels')){
    if(innerDoc.getElementsByClassName('gjs-pn-panels').length){
      innerDoc.getElementsByClassName('gjs-pn-panels')[0].style.display = 'none';
      innerDoc.getElementsByClassName('gjs-cv-canvas')[0].style.display = 'none';
    }
  }
})
  
  return (
    <>
    {spinner == 'start' ? (<Spin className={`geditor`} ><div id="example-editor" ></div></Spin>) :(<div id="example-editor" >  </div>)}
     

    </>
  );
}
export default Editor