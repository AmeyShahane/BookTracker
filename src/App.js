import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import BookList from "./components/book-list.component";
import EditBook from "./components/edit-book.component";
import CreateBook from "./components/create-book.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Routes>
      <Route path="/" exact component={BookList} />
      <Route path="/edit/:id" component={EditBook} />
      <Route path="/create" component={CreateBook} />
      <Route path="/user" component={CreateUser} />
      </Routes>
    </Router>
  );
}

export default App;
