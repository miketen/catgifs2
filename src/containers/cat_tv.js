import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { bindActionCreators} from 'redux';
import { fetchChannel } from '../actions/index';
import Remote from '../components/remote';
import Screen from '../components/screen';

const tv_scramble = 'https://us.123rf.com/450wm/chatsimo/chatsimo1510/chatsimo151000037/46719317-tv-screen-with-static-noise-bad-signal.jpg?ver=6';

 class CatTV extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tv-container">
              <div className="row">
                <Screen channel={(_.isEmpty(this.props.tv.selected_channel) ? tv_scramble : this.props.tv.selected_channel )} />
              </div>
              <div className="row">
                <Remote fetchChannel={this.props.fetchChannel} />
              </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchChannel }, dispatch);
}

function mapStateToProps(state) {
  return {
      tv: state.tv
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatTV);
