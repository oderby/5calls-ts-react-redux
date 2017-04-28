import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';



const reducers = combineReducers<any>({
  routing,
  books: BooksReducer,
  activeBook: ActiveBook
});

export default reducers;
