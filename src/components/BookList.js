import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getListBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const { booksItems } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListBooks());
  }, [dispatch]);

  return (
    <div className="books">
      {Object.keys(booksItems).map((itemKey) => booksItems[itemKey].map((book) => (
        <Book
          id={itemKey}
          key={itemKey}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      )))}
    </div>
  );
};

export default BookList;
