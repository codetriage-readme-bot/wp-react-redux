import { 
    GET_POST, 
    GET_POST_SUCCESS,  
    GET_POST_FAILURE 
    } from './../actions/actions';


const INITIAL_STATE = {post:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
  case GET_POST:
    return {post:null, error:null, loading: true};
  case GET_POST_SUCCESS:
    return {post: action.payload, error:null, loading: false};
  case GET_POST_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return {post: null, error:error, loading:false};
 default:
    return state;
  }
}