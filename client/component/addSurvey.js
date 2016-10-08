/**
 * Created by hzzhouliyang on 2016/9/27.
 */

var React = require('react');

var DragQuestion = require('./dragQuestion');

var AddSurvey = React.createClass({
    render: function () {
        return (
            <DragQuestion />
        );
    }
});

module.exports = AddSurvey;