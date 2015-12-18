const React = require('react');
const ReactDOM = require('react-dom');

const ScriptCardGrid = require('./script-card-grid.js');
const ArrayUniqueKeys = require('./utils/array-unique-keys');

const data = [
    {title: "Youtube link converter", subtitle: "youtu.be <-> youtube.com"},
    {title: ""}
];

ArrayUniqueKeys.assignKeys(data);

ReactDOM.render(
    <ScriptCardGrid data={data}/>,
    document.getElementById('scripts')
);
