import { IBook } from './../model';
import { IBookSelectedAction } from './../actions/index';
/**
 * State is not application state,
 * only the state this reducer
 * is responsible for.
 */
const ActiveBook = (state: IBook, action: IBookSelectedAction) => {
  if (!state) {
    state = {title: 'Please select a book'};
  }
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
};

export default ActiveBook;

