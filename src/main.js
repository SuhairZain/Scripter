const React = require('react');
const ReactDOM = require('react-dom');

const ScriptCardGrid = require('./script-card-grid.js');

const data = [
    {id: 0, title: "Youtube link converter", subtitle: "youtu.be <-> youtube.com"},
    {id: 1, title: "Another title", subtitle: "Another subtitle"}
];

ReactDOM.render(
    <ScriptCardGrid data={data}/>,
    document.getElementById('scripts')
);
