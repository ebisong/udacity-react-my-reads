import React, { Component } from 'react';
class Book extends Component {
  bookCoverSpecs = {
    width: 128,
    height: 193
  };

  options = [
    {
      title: 'Move to...',
      value: 'none',
      disabled: true
    },
    {
      title: 'Currently Reading',
      value: 'currentlyReading',
      disabled: false
    },
    {
      title: 'Want to Read',
      value: 'wantToRead',
      disabled: false
    },
    {
      title: 'Read',
      value: 'read',
      disabled: false
    },
    {
      title: 'none',
      value: 'none',
      disabled: false
    },
  ];

  createBackgroundImageString(url) {
    return `url("${url}")`
  }

  createBookCoverStyle(thumbnailUrl, width, height) {
    let style = {
      width,
      height,
    };
    if (thumbnailUrl) { style.backgroundImage = this.createBackgroundImageString(thumbnailUrl) }
    return style;
  }

  render() {
    return(
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={}></div>
            <div className="book-shelf-changer">`
              <select value={this.props.book.shelf}>
                {this.options.map((option) => {
                    if (option.disabled) {
                      return (<option value={option.value} disabled>{option.title}</option>)
                    } else {
                      return (<option value={option.value}>{option.title}</option>)
                    }
                  })
                }
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