/**
 * Created by hzzhouliyang on 2016/9/23.
 */

require('./styles/main.less');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var App = require('./component/app');
var ListSurveys = require('./component/listSurveys');
var AddSurvey = require('./component/addSurvey');

var AppRouter = (
    <Router history={hashHistory}>
        <Route name="SurveyBuilder" component={App}>
            <Route path="/" component={ListSurveys}/>
            <Route path="/list" component={ListSurveys} />
            <Route path="/add" component={AddSurvey} />
        </Route>
    </Router>
);

ReactDOM.render(AppRouter, document.getElementById('main'));
