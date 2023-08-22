import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../style/AddBook.css';
import { addBook } from '../redux/books/booksSlice';
import Selected from './Selected';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = () => {
    if (title !== '' && author !== '' && category !== '') {
      const id = uuidv4();
      dispatch(addBook({
        id,
        title,
        author,
        category,
      }));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <section className="addBook__Container">
      <h2 className="addBook__title">ADD NEW BOOK</h2>
      <div className="container__inputs">
        <input className="addBook__input" type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="addBook__author" type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Selected selectValue={category} onChangeCategory={handleChangeCategory} />
        <button className="addBook__btn" type="submit" onClick={handleAddBook}>ADD BOOK</button>
      </div>
    </section>
  );
}

export default AddBook;
