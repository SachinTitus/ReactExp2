import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles/Header.css"
import {Link} from "react-router-dom";


export default class Header extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <nav className="navbar navbar-expand">
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#drawer">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="drawer">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/work" className="nav-link">Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link" id="navigation">Design</Link>
                            </li>
                            <li>
                                < Link to="./home" className="navbar-brand offset-md-1 order-sm-0" id="brand">OoO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">AboutMe</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}