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
            <div className="modules sidebar">
                <span className="list-question-title">题目类型</span>
                <ul className="list-question-style">
                    <li><DragButton text="单选题" questionType="yes_no"/></li>
                    <li><DragButton text="多选题" questionType="multiple_choice"/></li>
                    <li><DragButton text="问答题" questionType="essay"/></li>
                </ul>
            </div>
        );
    }
});

module.exports = DragQuestion;