/**
 * Block appearing in the block section of grapesjs. Can be dragged onto the canvas to generate a Timer.
 */

import {
    timerRef
} from './consts';

export default function (editor, opt = {}) {
    const c = opt;
    const bm = editor.BlockManager;


    bm.add(timerRef, {
        label: c.blockLabel,
        category: c.blockLabel,
        attributes: {class: 'fa fa-clock-o'},
        content: `
        <div class="timer" data-gjs-type="${timerRef}"></div>
      `
    });
}
