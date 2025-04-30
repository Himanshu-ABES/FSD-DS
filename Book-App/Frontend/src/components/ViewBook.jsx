import React, { useState, useEffect } from 'react';
import './ViewBook.css';

const ViewBook = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load books from localStorage
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
    
    if (storedBooks.length === 0) {
      setMessage('No books found. Add some books first!');
    }
  }, []);

  return (
    <div className="view-book-container">
      <h2>Book Collection</h2>
      
      {message && <div className="info-message">{message}</div>}
      
      {books.length > 0 && (
        <div className="books-table-container">
          <table className="books-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Published Year</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.publishedYear || 'N/A'}</td>
                  <td>{book.genre || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewBook;