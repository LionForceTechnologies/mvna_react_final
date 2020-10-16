/**
 *
 * This is the Timer grapesjs component, which generates JSX for its template representation and uses
 * a react component (react-compound-timer) to display the actual live Timer.
 *
 * The main trick here is that onRender() time we mount the actual react component onto the html that grapesjs uses
 * to represent our component (this is <div class="timer" data-gjs-type="${timerRef}"></div> as defines in blocks.js).
 *
 * Also, the component's model is represented as JSX, in this example a simplified version of the <Timer/> component.
 *
 * This example also includes traits for editing the live Timer's properties:
 * - startFrom: by default the timer will count forward. If startFrom is set it will start backwards from that date
 * - timerLabel: the label to display in front of the timer
 * - displayLabels: if unchecked displays time as 19, 22:10:15. If checked: 19 days 20 hours 10 minutes 15 seconds.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import {timerRef} from "./consts";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';

export default function (editor, opt = {}) {
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultView = defaultType.view;
    domc.addType(timerRef, {
            view: defaultView.extend({
            onRender({el}) {
                ReactDOM.render(
                    <>
<h1>Testing</h1>
                    </>
                    , el);
            },

        }),
    });
}

