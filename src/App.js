import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import {SignIn, Users, Detail} from "./component";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/users" component={Users}/>
                <Route path="/users/:id" component={Detail}/>
                <Route path="/" component={SignIn} />
            </Switch>
        </Router>
    );
}

export default App;
