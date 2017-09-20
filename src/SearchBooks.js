import React, { Component } from 'react';
import {search} from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component{
  state = {
    bookResults: [],
    query: ''
  };

  updateQuery = (event) => {
    this.setState({query: event.target.value});
    search(event.target.value, 10)
        .then((bookResults) => {
          this.setState({
            bookResults
          })
        });
  };

  render() {
    return(
        <div>
          <div className="search-books-results">
            <div className="search-books-bar">
              <div className="search-books-input-wrapper">
                <input type="text"
                       placeholder="Search Books"
                       value={this.state.query}
                       onChange={this.updateQuery}/>
              </div>
              <ol className="books-grid">
                {this.state.bookResults.map((book) => (
                    <Book book="book"/>
                ))}
              </ol>
            </div>
          </div>
        </div>
    );
  }
}
export default SearchBooks;