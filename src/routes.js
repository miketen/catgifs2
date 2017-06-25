import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/app';
import About from './components/about';
import Tv from './components/tv';
import Welcome from './components/welcome';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Welcome} />
        <Route path="about" component={About} />
        <Route path="tv" component={Tv} />
    </Route>
);
