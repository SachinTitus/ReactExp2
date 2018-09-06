import React, {Component, Fragment} from 'react'
import Header from "../components/Header";
import {Route, Switch} from "react-router-dom";
import {Contact} from "../components/Contact";
import {Home} from "../components/Home";
import {About} from "../components/About";
import {Work} from "../components/Work";
import {Footer} from "../components/Footer";


export default class Root extends Component {

    render() {
        return (
            <Fragment>
                {/*<div className="col-12">*/}
                    {/*/!*<div className="row">*!/*/}
                        <Header style={{zIndex:0}}/>
                    {/*</div>*/}
                {/*</div>*/}
                <div className="col-12 justify-content-center align-items-center" id="rootMain" style={{zIndex:-1}}>
                    <div className="col-12 justify-content-center">
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                            <Route path="/home" component={Home}/>
                            <Route path="/contact" component={Contact} />
                            <Route path="/about" component={About}/>
                            <Route path="/work" component={Work}/>
                        </Switch>
                    </div>
                </div>
                {/*<div>*/}
                    {/*<Footer/>*/}
                {/*</div>*/}

            </Fragment>
        );
    }
}