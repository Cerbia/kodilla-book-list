import React from 'react';
import './BookItem.css';
import { Book } from './../../interfaces/Book.interface';

interface Props {
    book: Book;
    removeBook: (bookId: string) => void;
}

const BookItem: React.FC<Props> = ({ book, removeBook }) => {
    return (
        <li className='book-item'>
            {book.title} by {book.author}, {book.price}$ <div className="close" onClick={() => { removeBook(book.id) }} />
        </li>
    );
}

export default BookItem;
