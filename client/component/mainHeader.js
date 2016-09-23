/**
 * Created by hzzhouliyang on 2016/9/23.
 */

var React = require('react');
var Link = require('react-router').Link;

var MainNav = require('./mainNav');

var MainHeader = React.createClass({
    render: function () {
        return (
            <header className="main-header navbar container">
                <div className="container-fluid">
                    <Link to="list" className="navbar-brand logo">调查问卷制作工具</Link>
                    <MainNav />
                </div>
            </header>
        );
    }
});

module.exports = MainHeader;