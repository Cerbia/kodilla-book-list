import React from 'react';
import './BooksList.css';
import BookItem from '../BookItem/BookItem';
import { Book } from './../../interfaces/Book.interface';

interface Props {
    books: Book[];
}

const BooksList: React.FC<Props> = ({ books }) => {
    return (
        <ul className="books-list"> {books.map((book: Book) => <BookItem key={book.id} book={book} />)}</ul>
    );
}

export default BooksList;