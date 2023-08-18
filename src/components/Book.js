import React from 'react';
import PropTypes from 'prop-types';
import BooksButtons from './BookButtons';
import ProgressContainer from './ProgressContainer';
import '../style/BookList.css';

function Book({ category, title, author }) {
  return (
    <div className="book">
      <div className="book__info">
        <h4 className="book__category">{category}</h4>
        <h2 className="book__title">{title}</h2>
        <h6 className="book__author">{author}</h6>
        <BooksButtons />
      </div>
      <ProgressContainer />
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
