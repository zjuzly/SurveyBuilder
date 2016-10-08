/**
 * Created by hzzhouliyang on 2016/9/23.
 */

var React = require("react");
var Link = require('react-router').Link;

var MainNav = React.createClass({
    render: function () {
        return (
            <nav className="main-nav">
                <ul className="nav navbar">
                    <li className="tool-item"><Link to="list">问卷列表</Link></li>
                    <li className="tool-item"><Link to="add">制作调查问卷</Link></li>
                </ul>
            </nav>
        );
    }
});

module.exports = MainNav;