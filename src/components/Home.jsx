import React, {Component, Fragment} from 'react';
import "./styles/Home.css"

export class Home extends Component {

    render() {
        return (
            <Fragment>
                <section className="row justify-content-center" id="homeGraphicsSection">
                        <h1 className="" id="homeGraphicsTextOverlayPart1">
                            About
                        </h1>
                        <div className="col-12" id="homeGraphicsHolder" style={{height: window.innerHeight}}>
                        </div>
                </section>
                <section className="row justify-content-center" id="homeAboutSection">
                    <h1 className="" id="homeGraphicsTextOverlayPart2">
                        About
                    </h1>
                        <h3 className="col-4 display-4 " id="homeContent">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h3>
                        <img id="homeContent" src="https://dummyimage.com/600x400/FFF/000" alt="Home About Picture"/>
                </section>
            </Fragment>
        );
    }
}