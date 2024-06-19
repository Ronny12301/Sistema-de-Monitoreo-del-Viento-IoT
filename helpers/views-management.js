const { readFile } = require('fs').promises;
const path = require('path');

/**
 * Returns a html page
 * 
 * @param {string} view 
 * @param {Object} variables list of variables to inject: {name: "value"}
 * @returns 
 */
async function view(view, variables) {
    const html = await readFile(path.join(__dirname, `../public/views/${view}.html`), 'utf8');

    if (!variables || typeof variables!== 'object') {
        return html;
    }

    const dataScript = Object.entries(variables)
           .map(([key, value]) => `<script>window.${key} = ${JSON.stringify(value)}</script>`)
           .join('');
 
    return html.replace('</head>', `${dataScript}</head>`);
}

module.exports = {
    view,
};