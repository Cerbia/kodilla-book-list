import React from 'react';
import './BooksList.css';
import BookItem from '../BookItem/BookItem';
import { Book } from './../../interfaces/Book.interface';

interface Props {
    books: Book[];
    removeBook: (bookId: string) => void;
}

const BooksList: React.FC<Props> = ({ books, removeBook }) => {
    return (
        <ul className="books-list"> {books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={removeBook} />)}</ul>
    );
}

export default BooksList;
