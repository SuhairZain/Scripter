const React = require('react');
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardMedia = require('material-ui/lib/card/card-media');
const CardTitle = require('material-ui/lib/card/card-title');
const RaisedButton = require('material-ui/lib/raised-button');

const ScriptCard = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    onButtonTap: function(event){
        console.log('Button Tapped');
    },

    render: function() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Card>
                    <CardMedia overlay={<CardTitle title={this.props.data.title} subtitle={this.props.data.subtitle}/>}>
                        <img src={"images/media/" + this.props.data.id + ".jpg"}/>
                    </CardMedia>
                    <CardActions>
                        <RaisedButton
                            label="Test"
                            onTouchTap={this.onButtonTap}/>
                    </CardActions>
                </Card>
            </div>
        );
    }
});

module.exports = ScriptCard;