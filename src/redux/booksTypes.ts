import { Book } from '../interfaces/Book.interface';

/* ACTIONS */
// action types
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// action creator interfaces
interface addBookAction {
    type: 'ADD_BOOK';
    payload: Book;
}

interface removeBookAction {
    type: 'REMOVE_BOOK';
    payload: string;
}

export type BookAction = addBookAction | removeBookAction;

// books state
export type BooksState = Array<Book>;