import React, { useState, useEffect } from 'react';
import './UpdateBook.css';

const UpdateBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [updatedBook, setUpdatedBook] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedYear: '',
    genre: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load books from localStorage
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  const handleSelectBook = (isbn) => {
    const book = books.find(book => book.isbn === isbn);
    
    if (book) {
      setSelectedBook(book);
      setUpdatedBook({ ...book });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook(prevBook => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    // Validation
    if (!updatedBook.title || !updatedBook.author) {
      setMessage('Title and author are required fields.');
      return;
    }
    
    // Update book in the array
    const updatedBooks = books.map(book => 
      book.isbn === selectedBook.isbn ? updatedBook : book
    );
    
    // Update localStorage
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    
    // Update state
    setBooks(updatedBooks);
    setSelectedBook(null);
    setUpdatedBook({
      title: '',
      author: '',
      isbn: '',
      publishedYear: '',
      genre: ''
    });
    
    setMessage('Book updated successfully!');
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="update-book-container">
      <h2>Update Book</h2>
      
      {message && <div className={message.includes('successfully') ? 'success-message' : 'error-message'}>{message}</div>}
      
      {!selectedBook ? (
        <div className="select-book-section">
          <h3>Select a Book to Update</h3>
          
          {books.length === 0 ? (
            <p>No books available. Please add some books first.</p>
          ) : (
            <div className="books-list">
              {books.map((book, index) => (
                <div key={index} className="book-item" onClick={() => handleSelectBook(book.isbn)}>
                  <h4>{book.title}</h4>
                  <p>by {book.author}</p>
                  <p>ISBN: {book.isbn}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleUpdate} className="update-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={updatedBook.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={updatedBook.author}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="isbn">ISBN (cannot be changed)</label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              value={updatedBook.isbn}
              disabled
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="publishedYear">Published Year</label>
            <input
              type="number"
              id="publishedYear"
              name="publishedYear"
              value={updatedBook.publishedYear}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={updatedBook.genre}
              onChange={handleChange}
            />
          </div>
          
          <div className="button-group">
            <button type="submit" className="update-btn">Update Book</button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => {
                setSelectedBook(null);
                setUpdatedBook({
                  title: '',
                  author: '',
                  isbn: '',
                  publishedYear: '',
                  genre: ''
                });
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateBook;