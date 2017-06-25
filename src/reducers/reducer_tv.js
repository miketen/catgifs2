import _ from 'lodash';
import {FETCH_CHANNEL} from '../actions/index';

export default function (state={watched:[], selected:''}, action) {
    switch (action.type) {
        case FETCH_CHANNEL: {
            let newState = _.cloneDeep(state);
            let {payload}  = action;
            let channel = payload.data.data.image_url;
            let channel_id  = payload.data.data.id;

            if(newState.watched.lastIndexOf(channel_id) >= 0) {
              newState = {
                selected_channel: null,
                watched: newState.watched
              };
            } else {
              newState = {
                selected_channel: channel,
                watched: [...newState.watched, channel_id]
              };
            }

            return newState;
          }
    }

    return state;
}
