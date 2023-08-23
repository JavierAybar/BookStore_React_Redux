import { useDispatch } from 'react-redux';
import '../style/BooksButtons.css';
import { removeBook } from '../redux/books/booksSlice';

// eslint-disable-next-line react/prop-types
const BooksButtons = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div className="action__buttons">
      <button className="act__btn" type="button">Comments</button>
      <button className="act__btn" type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
      <button className="act__btn" type="button">Edit</button>
    </div>
  );
};

export default BooksButtons;
