import React from 'react';
import './BookItem.css';
import { Book } from './../../interfaces/Book.interface';

interface Props {
    book: Book;
}

const BookItem: React.FC<Props> = ({ book }) => {
    return (
        <li className='book-item'>
            {book.title} by {book.author}, {book.price}$
        </li>
    );
}

export default BookItem;