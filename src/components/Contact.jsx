import React, { Component } from 'react';
import "./styles/Contact.css"

export class Contact extends Component {
    render() {
        return (
            <div>
            <div className="row justify-content-center mx-auto align-items-center centerthing">
                <div className="col-10 mycol justify-content-center">
                    <h2 className="contactContentTitle" align="center">Drop me a line!</h2>
                    <h4 className="text-muted" align="center">reach@sachintitus.com</h4>
                    <h2 className="display-4 text-muted" align="center">|</h2>
                </div>

            </div>
            </div>
        );
    }
}