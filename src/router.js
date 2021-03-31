import React from 'react'
import { NavLink, HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Buckets from './pages/buckets'
import Movable from './pages/movable'
import ClassLess from './pages/classless'

export default ({}) => {
    return (
        <Router>
            <div className="top-menu">
                <NavLink exact activeClassName="top-menu-item-active" className="top-menu-item" to="/">Home</NavLink>
                <NavLink exact activeClassName="top-menu-item-active" className="top-menu-item" to="/buckets">Buckets</NavLink>
                <NavLink exact activeClassName="top-menu-item-active" className="top-menu-item" to="/movable">Movable</NavLink>
                <NavLink exact activeClassName="top-menu-item-active" className="top-menu-item" to="/classless">ClassLess</NavLink>
            </div>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/buckets" component={Buckets} />
                    <Route exact path="/movable" component={Movable} />
                    <Route exact path="/classless" component={ClassLess} />
                </Switch>
            </div>
        </Router>
    )
}