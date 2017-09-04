import React, { Component } from 'react';
import Book from './Book';
class Bookshelf extends Component {
  state = {

  };

  filterBooksForShelf(books, shelfType) {
    return books.filter(book => book.shelf === shelfType);
  }

  render() {
    return (
        <div>
          <div className="bookshelf-title">
            <h2>{this.props.bookshelfTitle}</h2>
          </div>
          <div className="bookshelf">
            <ol className="books-grid">{this.filterBooksForShelf(this.props.books, this.props.shelfType).map((book) => (
                <li>
                  <Book book={book}/>
                </li>
            ))}</ol>
          </div>
        </div>);
  }
}
export default Bookshelf;