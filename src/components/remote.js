import React, { Component } from 'react';

 class Remote extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="tv-remote">
            <button type="button" className="btn btn-large next" onClick={this.props.fetchChannel}>Next</button>
            <span className="remote-label">Cat-TV Remote</span>
          </div>
        );
    }
}


export default Remote;
