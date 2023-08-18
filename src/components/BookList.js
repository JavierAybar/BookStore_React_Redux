import Book from './Book';

function BookList() {
  return (
    <div className="books">
      <Book title="The Hunger Games" author="Suzanne Collins" />
      <Book title="Another Book Title" author="Another Author" />
      <Book title="Yet Another Title" author="Yet Another Author" />
    </div>
  );
}

export default BookList;
