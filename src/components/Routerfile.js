import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Home';
import Rules from './Rules';
import Quizbox from './Quizbox';

export default function Routerfile() {
    return (
        <div>
                    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/quizbox" component={Quizbox} />
      
  </Switch>
  </Router>
        </div>
    )
}
