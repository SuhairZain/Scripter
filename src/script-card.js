const React = require('react');
const Card = require('material-ui/lib/card/card');
const CardHeader = require('material-ui/lib/card/card-header');

const ScriptCard = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },
    render() {
        return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card>
                <CardHeader
                    title={this.props.data.title}
                    subtitle={this.props.data.subtitle}/>
            </Card>
        </div>
        );
    }
});

module.exports = ScriptCard;