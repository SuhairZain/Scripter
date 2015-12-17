const React = require('react')
const Card = require('material-ui/lib/card/card');
const CardHeader = require('material-ui/lib/card/card-header');

const ScriptCard = React.createClass({
    render() {
        return (
            <Card>
                <CardHeader
                    title="Title"/>
            </Card>
        );
    }
});

module.exports = ScriptCard;