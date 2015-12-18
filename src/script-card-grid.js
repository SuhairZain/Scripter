/**
 * Created by SuhairZain on 18/12/15.
 */

const React = require('react');
const ScriptCard = require('./script-card');

const ScriptCardGrid = React.createClass({
    render() {
        function getCard(cardData) {
            return <ScriptCard key={cardData.key} data={cardData} />
        }

        return <div className="row">{this.props.data.map(getCard)}</div>;
    }
});

module.exports = ScriptCardGrid;