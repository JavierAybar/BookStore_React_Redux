import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import '../style/Books.css';

function Books() {
  return (
    <div>
      <BookList />
      <AddBook />
    </div>
  );
}

export default Books;
