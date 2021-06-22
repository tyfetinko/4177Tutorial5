import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Register from './register';
import Users from './user';
import Display from './display';

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/users" component={Users}/>
                <Route path="/users/:id" component={Display}/>
                <Route path="/" component={Register} />
            </Switch>
        </Router>
    );
}

export default App;