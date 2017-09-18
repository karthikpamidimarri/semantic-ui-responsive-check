import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import SemanticFrontPage from "./modules/trial/SemanticFrontPage";
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={SemanticFrontPage}/>
            </Router>
        );
    }
}

export default App;
