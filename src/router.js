import React from 'react'
import { NavLink, HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Buckets from './pages/buckets'
import Movable from './pages/movable'

export default ({}) => {
    return (
        <Router>
            <div className="top-menu">
                <NavLink exact activeClassName="top-menu-item-active" className="top-menu-item" to="/">Home</NavLink>
                <NavLink exact activeClassName="top-menu-item-active" className="top-menu-item" to="/buckets">Buckets</NavLink>
                <NavLink exact activeClassName="top-menu-item-active" className="top-menu-item" to="/movable">Movable</NavLink>
            </div>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/buckets" component={Buckets} />
                    <Route exact path="/movable" component={Movable} />
                </Switch>
            </div>
        </Router>
    )
}