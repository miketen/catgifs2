import {combineReducers} from 'redux';
import TvReducer from './reducer_tv';

const rootReducer = combineReducers({
    tv: TvReducer
});

export default rootReducer;
