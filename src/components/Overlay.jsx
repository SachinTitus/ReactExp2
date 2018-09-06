import React, { Component } from 'react';
import "./styles/Overlay.css"

export class Overlay extends Component {
    render() {
        return (
            <div className="graphicOverlay">
                <canvas>

                </canvas>
            </div>
        );
    }
}