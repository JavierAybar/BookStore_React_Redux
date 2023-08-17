import '../style/BooksButtons.css';

function BooksButtons() {
  return (
    <div className="action__buttons">
      <button className="act__btn" type="button">Comments</button>
      <button className="act__btn" type="button">Remove</button>
      <button className="act__btn" type="button">Edit</button>
    </div>
  );
}

export default BooksButtons;
