import { IBookListAction, books } from './../actions/index';
import { IBook } from './../model';

const BooksReducer = (state: IBook[] = books, action: IBookListAction) => {
  // if (!state) {
  //   state = books;
  // }
  switch (action.type) {
    case 'FIND_BOOKS':
      return state;
    default:
      return state;
  }
};

export default BooksReducer;
