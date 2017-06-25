import React, { Component } from 'react';


class Screen extends Component {
    render() {
        return (
          <div className="tv">
              <img src={this.props.channel} className="tv-screen" />
              <div className="tv-controls">
                <ul className="nav pull-left">
                  <li>O</li>
                </ul>
                <ul className="nav pull-right">
                  <li>O</li>
                </ul>
              </div>
          </div>
        );
    }
}


export default Screen;
