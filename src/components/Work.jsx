import React, { Component } from 'react';

export class Work extends Component {
    render() {
        return (
            <section className="justify-content-center" id="myContainer">
                <div className="col" id="contactBox">
                    <div className="row justify-content-center mx-auto">
                        <div className="col-8" id="contactContentTitle">
                            <h4>Work!</h4>
                        </div>
                    </div>
                    <div className="row justify-content-center mx-auto">
                        <div className="col-8 justify-content-center ml-5 mr-5">
                            <h6 className="text-muted">Some good Content</h6>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}