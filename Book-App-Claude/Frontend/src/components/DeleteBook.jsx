import React, { useState, useEffect } from 'react';
import './DeleteBook.css';

const DeleteBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load books from localStorage
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    setConfirmDelete(false);
  };

  const handleDeleteConfirm = () => {
    setConfirmDelete(true);
  };

  const handleDelete = () => {
    // Remove book from array
    const updatedBooks = books.filter(book => book.isbn !== selectedBook.isbn);
    
    // Update localStorage
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    
    // Update state
    setBooks(updatedBooks);
    setSelectedBook(null);
    setConfirmDelete(false);
    
    setMessage('Book deleted successfully!');
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleCancel = () => {
    setSelectedBook(null);
    setConfirmDelete(false);
  };

  return (
    <div className="delete-book-container">
      <h2>Delete Book</h2>
      
      {message && <div className="success-message">{message}</div>}
      
      {books.length === 0 ? (
        <p>No books available. Please add some books first.</p>
      ) : (
        <div className="delete-section">
          {!selectedBook ? (
            <div className="books-grid">
              <h3>Select a Book to Delete</h3>
              <div className="books-list">
                {books.map((book, index) => (
                  <div key={index} className="book-item" onClick={() => handleSelectBook(book)}>
                    <h4>{book.title}</h4>
                    <p>by {book.author}</p>
                    <p>ISBN: {book.isbn}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : !confirmDelete ? (
            <div className="book-details">
              <h3>Book Details</h3>
              <div className="book-info">
                <p><strong>Title:</strong> {selectedBook.title}</p>
                <p><strong>Author:</strong> {selectedBook.author}</p>
                <p><strong>ISBN:</strong> {selectedBook.isbn}</p>
                <p><strong>Published Year:</strong> {selectedBook.publishedYear || 'N/A'}</p>
                <p><strong>Genre:</strong> {selectedBook.genre || 'N/A'}</p>
              </div>
              <div className="button-group">
                <button onClick={handleDeleteConfirm} className="delete-btn">Delete Book</button>
                <button onClick={handleCancel} className="cancel-btn">Cancel</button>
              </div>
            </div>
          ) : (
            <div className="confirm-delete">
              <h3>Confirm Deletion</h3>
              <p>Are you sure you want to delete "{selectedBook.title}" by {selectedBook.author}?</p>
              <p className="warning">This action cannot be undone!</p>
              <div className="button-group">
                <button onClick={handleDelete} className="confirm-btn">Yes, Delete</button>
                <button onClick={() => setConfirmDelete(false)} className="cancel-btn">No, Keep Book</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DeleteBook;