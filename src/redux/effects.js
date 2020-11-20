import {userDetails} from '../constants';
import { addTodo } from './actions';

export const asyncApiCall = (values) => {
   return async dispatch => {
       try {
            const result = await fetch(userDetails)
            dispatch(addTodo(result));
       }
       catch(err) {
            dispatch(errorHandler(err));
       }
   }
}