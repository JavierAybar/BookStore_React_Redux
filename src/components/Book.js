import BooksButtons from './BookButtons';
import ProgressContainer from './ProgressContainer';
import '../style/BookList.css';

function Book() {
  return (
    <div className="book">
      <div className="book__info">
        <h4 className="book__category">Action</h4>
        <h2 className="book__title">The Hunger Games</h2>
        <h6 className="book__author">Suzanne Collins</h6>
        <BooksButtons />
      </div>
      <ProgressContainer />
    </div>
  );
}

export default Book;
