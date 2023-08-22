import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { booksItems } = useSelector((state) => state.books);

  return (
    <div className="books">
      {booksItems.map((books) => (
        <Book
          id={books.id}
          key={books.id}
          title={books.title}
          author={books.author}
          category={books.category}
        />
      ))}
    </div>
  );
};

export default BookList;
