import React from 'react';
import { Component } from 'react';
import Nav from '../components/nav';

class App extends Component {
    render () {
     return (
         <div className="row">
          <div className="col-md-2">
            <Nav />
          </div>

          <div className="col-md-10">
            {this.props.children}
          </div>
         </div>
     );
    }
}

export default App;
