import { IBookListAction } from './index';
import { IBook } from './../model';
import { Action } from 'redux';
/*
 * This file holds Action Creators
 * Action Creators return an Action
 *
 */
export interface IBookSelectedAction extends Action {
  type: string;
  payload: IBook;
}

export function selectBook(book): IBookSelectedAction {
  // returns an action that is an object
  // that must contain a type (string,
  // usually uppercased)
  // and a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export const books: IBook[] = [
      {title: 'JavaScript: The Good Parts', pages: 99},
      {title: 'Harry Potter', pages: 1001},
      {title: 'The Dark Tower', pages: 1234},
      {title: 'Eloquent Java', pages: 1}
    ];



export interface IBookListAction extends Action {
  type: string;
  payload: IBook[];
}

export function findBooks(): IBookListAction {
  return {
    type: 'FIND_BOOKS',
    payload: books
  };
}
