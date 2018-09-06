import React, {Component, Fragment} from 'react';
import "./styles/Footer.css"


export class Footer extends Component {
    render() {
        return (
            <Fragment>
                <section className="row justify-content-center" id="footerSection">
                    <h3 className="col-4 text-muted" id="footerContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
                    <img id="homeContent" src="https://placeimg.com/640/480/tech" alt="Home About Picture"/>
                </section>
            </Fragment>
        );
    }
}