import { apiListTodo } from './actions';
import { userDetails } from '../constants';

function fetchUserDetails() {
     return fetch(userDetails);
}

export default function getListSync() {
     var list = 'Middleware thunk';
     return function (dispatch) {
          return fetchUserDetails().then(
               (result) => dispatch(apiListTodo(list)),
               (error) => dispatch(apiListTodo(list))
          )
     }
}