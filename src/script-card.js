const React = require('react');
const Card = require('material-ui/lib/card/card');
const CardMedia = require('material-ui/lib/card/card-media');
const CardTitle = require('material-ui/lib/card/card-title');

const ScriptCard = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },
    render() {
        return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card>
                <CardMedia overlay={<CardTitle title={this.props.data.title} subtitle={this.props.data.subtitle}/>}>
                           <img src="file:///mnt/Data/Workspace/react/scripter/images/header_bg.jpg"/>
                </CardMedia>
            </Card>
        </div>
        );
    }
});

module.exports = ScriptCard;