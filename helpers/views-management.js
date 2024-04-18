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

    if (!variables) {
        return html;
    }

    if (typeof variables !== 'object') {
        return "Not an object";
    }

    let dataScript = '';
    (Object.keys(variables)).forEach((variableName) => {
        dataScript += `<script>window.${variableName} = ${JSON.stringify(variables[variableName])};</script>\n`;
    });
 
    return html.replace('</head>', `${dataScript}</head>`);
}

module.exports = {
    view,
};