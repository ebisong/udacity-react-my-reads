import React, { Component } from 'react';
class Book extends Component {
  bookCoverSpecs = {
    width: 128,
    height: 193
  };

  createBackgroundImageString(url) {
    return `url("${url}")`
  }

  render() {
    return(
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: this.bookCoverSpecs.width, height: this.bookCoverSpecs.height,
              backgroundImage: this.createBackgroundImageString(this.props.book.imageLinks.smallThumbnail)}}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors.join(", ")}</div>
        </div>
      );
  }
}
export default Book;