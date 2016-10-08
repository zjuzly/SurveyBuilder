/**
 * Created by hzzhouliyang on 2016/10/8.
 */

var React = require('react');

var DragButton = React.createClass({
    render: function () {
        return (
            <div draggable="true" className="btn draggable" onDragStart={this.handleDragStart}>
                <span className="btn-text">{this.props.text}</span>
            </div>
        );
    },
    handleDragStart: function (ev) {
        ev.dataTransfer.setData('questionType', this.props.questionType);
    }
});

module.exports = DragButton;