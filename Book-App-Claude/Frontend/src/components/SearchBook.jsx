import React, { useState } from 'react';
import './SearchBook.css';

const SearchBook = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('title');
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setMessage('Please enter a search term.');
      return;
    }
    
    // Get books from localStorage
    const books = JSON.parse(localStorage.getItem('books')) || [];
    
    // Filter books based on search criteria
    const results = books.filter(book => {
      const value = book[searchBy]?.toString().toLowerCase();
      return value && value.includes(searchTerm.toLowerCase());
    });
    
    setSearchResults(results);
    setHasSearched(true);
    
    if (results.length === 0) {
      setMessage(`No books found matching "${searchTerm}" in ${searchBy}.`);
    } else {
      setMessage('');
    }
  };

  return (
    <div className="search-book-container">
      <h2>Search Books</h2>
      
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-inputs">
          <select 
            value={searchBy} 
            onChange={(e) => setSearchBy(e.target.value)}
            className="search-select"
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="isbn">ISBN</option>
            <option value="genre">Genre</option>
          </select>
          
          <input
            type="text"
            placeholder="Enter search term..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          <button type="submit" className="search-button">Search</button>
        </div>
      </form>
      
      {message && <div className="info-message">{message}</div>}
      
      {hasSearched && searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
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
              {searchResults.map((book, index) => (
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

export default SearchBook;