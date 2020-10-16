import React, { useEffect, useState } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
// import "./ui_style.css";
import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../appRedux/actions/Auth";
import GrapesJS from 'grapesjs';
import gjsBasicBlocks from 'grapesjs-blocks-basic';
import gjsNavbar from 'grapesjs-navbar';
import grapesjsCustomCode from 'grapesjs-custom-code';
import grapesjsLorySlider from 'grapesjs-lory-slider'
import plugin from 'grapesjs-style-bg';
import Bsmenu from './bsmenu';
import grapesjsPluginExport from 'grapesjs-plugin-export';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
function InnerEditor() {
  // const [htmlString, setHtmlString] = useState(null);
  // const [cssString, setCssString] = useState("");
  // const [pluginLoaded, setPluginLoaded] = useState(false);
  // const [editor, setEditor] = useState(null);
  useEffect(() => {
    // let jijo = document.getElementsByClassName("gjs-frame")[0].contentWindow.document.body.innerHTML
    // localStorage.setItem("lastname", jijo);

    const e = GrapesJS.init({
      container: `#example1-editor`,
      fromElement: true,
      plugins: [grapesjsLorySlider,grapesjsPresetWebpage,grapesjsPluginExport ],
      panels: {

      },
      commands: {

      },
      storageManager: {

      },
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
          // localStorage.setItem('getcontents',document.getElementsByClassName("gjs-frame")[0].contentWindow.document.body.innerHTML);

          // localStorage.removeItem('gjs-styles');
          // localStorage.removeItem('gjs-css');
          // localStorage.removeItem('gjs-components');
          // localStorage.removeItem('gjs-html');
          // localStorage.removeItem('gjs-assets');
          // localStorage.removeItem('renderer');
        })
      }
    });
    let pnm = e.Panels; 
    pnm.addButton('options', 
    [ { 
        id: 'save-database', 
        className: 'fa fa-floppy-o', 
        command: 'save-database', 
        attributes: {title: 'Save to database'} 
    } ]
    )
    // panel.add('save-database', 
    // { 
    //     run: function (em, sender) { 
    //         sender.set('active', true);
    //         let InnerHtml = this.frameEl.contentDocument.activeElement.innerHTML; 
    //         alert(InnerHtml)
    //     }
    // })
  });
  return (
    <>
      <div id="example1-editor" />
    </>
  );
}
export default InnerEditor