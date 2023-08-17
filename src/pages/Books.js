import Book from '../components/Book';
import AddBook from '../components/AddBook';
import '../style/Books.css';

function Books() {
  return (
    <div>
      <div className="books">
        <Book />
        <Book />
        <Book />
      </div>
      <AddBook />
    </div>
  );
}

export default Books;
