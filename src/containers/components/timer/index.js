/**
 * Timer plugin.
 *
 * Defined various plugin defautl values and loads the timer block and timer component provided by the plugin
 */

import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
// import loadCommands from './commands';
// import loadPanels from './panels';
// import parserHtmlCaseSensitive from './ParserHtmlCaseSensitive';
// import parserHtmlOrig from './ParserHtmlOrig';

import {
    timerPluginRef
} from './consts';

export default function addTimerPlugin(setHtmlString, setCssString) {
    grapesjs.plugins.add(timerPluginRef, (editor, opts = {}) => {
        let c = opts;

        // Add components
        loadComponents(editor, c);

        // Add components
        loadBlocks(editor, c);
    });
}

