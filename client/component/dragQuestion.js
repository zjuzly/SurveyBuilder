/**
 * Created by hzzhouliyang on 2016/10/8.
 */

var React = require('react');
var DragButton = require('./dragButton');

var DragQuestion = React.createClass({
    shouldComponentUpdate: function () {
        return false;  
    },
    render: function () {
        return (
            <ul className="modules list-question-style">
                <li><DragButton text="Yes / No" questionType="yes_no"/></li>
                <li><DragButton text="Multiple choice" questionType="multiple_choice"/></li>
                <li><DragButton text="Essay" questionType="essay"/></li>
            </ul>
        );
    }
});

module.exports = DragQuestion;