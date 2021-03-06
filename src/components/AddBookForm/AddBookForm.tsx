import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddBookForm.css'
import { randomID } from './../../utils/randomId';
import { Book } from './../../interfaces/Book.interface';
import { addBook as addBookAction } from './../../redux/booksRedux';

const AddBookForm: React.FC = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const addBook = (book: Book) => dispatch(addBookAction(book));


    const resetForm = () => {
        setTitle('');
        setAuthor('');
        setPrice(0);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const book: Book = {
            id: randomID(10),
            title,
            author,
            price
        }
        addBook(book);
        resetForm();
    }

    return (
        <form className="add-book-form" onSubmit={handleSubmit} >
            Title: <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            Author: <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" />
            Price: <input value={price} onChange={(e) => setPrice(parseInt(e.target.value))} type="number" />
            <button>Add book</button>
        </form >
    );
}

export default AddBookForm;