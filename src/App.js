import React, { Component } from 'react';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import {Route} from 'react-router-dom';
import {getAll} from './BooksAPI';

import './App.css';

class App extends Component {
  state = {
    books: [],
    bookResults: []
  };

  bookshelves = [
    {
      bookshelfTitle: "Currently Reading",
      shelfType: "currentlyReading"
    },
    {
      bookshelfTitle: "Want To Read",
      shelfType: "wantToRead"
    },
    {
      bookshelfTitle: "Read",
      shelfType: "read"
    }
  ];

  componentDidMount() {
    getAll().then((books) => this.setState({
      books
    }));
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact render={() => (
            <ListBooks books={this.state.books} bookshelves={this.bookshelves}/>
        )}/>
        <Route path="/search" exact render={() => (
            <SearchBooks/>
        )}/>
      </div>
    );
  }
}

export default App;
