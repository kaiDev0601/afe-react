import { SET_USER_TYPE
} from './types';

export const setUserType = (user) => async (dispatch) => {
    
    dispatch( {
      type:SET_USER_TYPE,
      payload:user
    });
  
};

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/
