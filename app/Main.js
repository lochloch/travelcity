import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import City from "./City";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>React Single Page Web App With Routing</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/City">City</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/City" component={City} />
                        <Route path="/contact" component={Contact} />

                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;