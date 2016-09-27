/**
 * Created by hzzhouliyang on 2016/9/27.
 */

var React = require('react');
var MainHeader = require('./mainHeader');

var App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <MainHeader />
                <div className="main-content container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;