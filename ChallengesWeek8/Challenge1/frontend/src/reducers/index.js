import { combineReducers } from 'redux'
import user from './userReducer';
import books from './booksReducer';

export default combineReducers({
  user,
  books
});