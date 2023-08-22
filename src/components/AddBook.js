import '../style/AddBook.css';

function AddBook() {
  return (
    <section className="addBook__Container">
      <h2 className="addBook__title">ADD NEW BOOK</h2>
      <div className="container__inputs">
        <input className="addBook__input" type="text" placeholder="Book Title" />
        <select className="addBook__select" name="" id="1">
          <option value="Action">Action</option>
        </select>
        <button className="addBook__btn" type="submit">ADD BOOK</button>
      </div>
    </section>
  );
}

export default AddBook;
