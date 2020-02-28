import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndividualScoreboard from "./pages/IndividualScoreboard";
import DoublesScoreboard from './pages/DoublesScoreBoard';
import Home from './pages/Home';


export default function Routes() {
    return (
        <Switch>
            <Route path="/individual" exact component={IndividualScoreboard} />
            <Route path="/doubles" exact component={DoublesScoreboard} />
            <Route path="/" exact component={Home} />
        </Switch>
    );
}