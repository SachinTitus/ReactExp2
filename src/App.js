import React, { Component } from 'react';
import './App.css';
import Root from './containers/Root'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {setWindowResize} from './actions/windowActions';
import {
    IndexRoute
} from 'react-router-dom'

class App extends Component {

    handleResize = function () {
        console.log("called");
        const resizedDimensions = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.setState(resizedDimensions);
    };
    constructor (){
        super();
        this.state = {
            width: 0,
            height: 0
        }
    }
    componentDidMount(){
        this.handleResize();
        window.addEventListener("resize", this.handleResize.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize.bind(this));
    }
  render() {
    return (
      <div>
          <Root windowWidth={this.state.width} windowHeight={this.state.height} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        windowWidth: state.width,
        windowHeight: state.height
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setWindowResize: (dimensions) => {
            console.log("work");
            dispatch(setWindowResize(dimensions));
        }
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
