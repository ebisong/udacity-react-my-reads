import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import {getAll} from './BooksAPI';

import './App.css';

class App extends Component {
  state = {
    books: []
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
        <div className="list-books-title">
          <h1>My Reads Application</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf-books">
            {this.bookshelves.map(bookshelf => (
                <Bookshelf bookshelfTitle={bookshelf.bookshelfTitle} shelfType={bookshelf.shelfType} books={this.state.books}/>)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
