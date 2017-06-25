import React, {Component} from 'react';
import { Link } from 'react-router';


class Nav extends Component {

    render() {
        return (
            <ul className="nav nav-pills nav-stacked global-nav">
                <li>
                  <Link to="/" className="btn btn-primary">
                      Home
                  </Link>
                  </li>
                  <li>
                    <Link to="/tv" className="btn btn-primary">
                        Watch Cat TV
                    </Link>
                    </li>
                    <li>
                    <Link to="/about" className="btn btn-primary">
                        About Cat TV
                    </Link>
                    </li>
            </ul>
        );
    }
}

export default Nav
