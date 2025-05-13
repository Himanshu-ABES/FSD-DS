import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddBook from './components/AddBook';
import ViewBook from './components/ViewBook';
import SearchBook from './components/SearchBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Book Management System</h1>
          <nav className="main-nav">
            <Link to="/add">Add Book</Link>
            <Link to="/view">View Book</Link>
            <Link to="/search">Search Book</Link>
            <Link to="/update">Update Book</Link>
            <Link to="/delete">Delete Book</Link>
          </nav>
        </header>
        
        <main className="app-content">
          <Routes>
            <Route path="/" element={<ViewBook />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/view" element={<ViewBook />} />
            <Route path="/search" element={<SearchBook />} />
            <Route path="/update" element={<UpdateBook />} />
            <Route path="/delete" element={<DeleteBook />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} Book Management System</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;