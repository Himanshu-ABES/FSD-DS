import React, { useState } from 'react';
import './AddBook.css';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedYear: '',
    genre: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prevBook => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!book.title || !book.author || !book.isbn) {
      setMessage('Please fill in all required fields.');
      return;
    }
    
    // Get existing books from localStorage or initialize empty array
    const existingBooks = JSON.parse(localStorage.getItem('books')) || [];
    
    // Check if book with same ISBN already exists
    if (existingBooks.some(existingBook => existingBook.isbn === book.isbn)) {
      setMessage('A book with this ISBN already exists.');
      return;
    }
    
    // Add new book to array
    const updatedBooks = [...existingBooks, book];
    
    // Save back to localStorage
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    
    // Clear form and show success message
    setBook({
      title: '',
      author: '',
      isbn: '',
      publishedYear: '',
      genre: ''
    });
    setMessage('Book added successfully!');
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      {message && <div className={message.includes('successfully') ? 'success-message' : 'error-message'}>{message}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="author">Author *</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="isbn">ISBN *</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="publishedYear">Published Year</label>
          <input
            type="number"
            id="publishedYear"
            name="publishedYear"
            value={book.publishedYear}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={book.genre}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;