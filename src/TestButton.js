var React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');

const TestButton = React.createClass({
  render() {
    return (
        <RaisedButton label="Default" />
    );
  }
});

module.exports = TestButton;
