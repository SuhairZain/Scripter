const React = require('react')
const Card = require('material-ui/lib/card/card');
const CardHeader = require('material-ui/lib/card/card-header');

const ScriptCard = React.createClass({
    propTypes: {
        title: React.PropTypes.number
    },
    render() {
        return (
        <div className="col-lg-3">
            <Card>
                <CardHeader
                    title={this.props.title}/>
            </Card>
        </div>
        );
    }
});

module.exports = ScriptCard;