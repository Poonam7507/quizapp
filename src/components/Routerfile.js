import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Home';
import Rules from './Rules';
// import Highscore from './Highscore';
import Quizbox from './Quizbox';

export default function Routerfile() {
    return (
        <div>
                    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rules" component={Rules} />
        {/* <Route path="/score" component={Highscore} /> */}
        <Route path="/quizbox" component={Quizbox} />
      
  </Switch>
  </Router>
        </div>
    )
}
