import Book from './Book';

function BookList() {
  const books = [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ];

  return (
    <div className="books">
      {books.map((item) => (
        <Book
          key={item.id}
          title={item.title}
          author={item.author}
          category={item.category}
        />
      ))}
    </div>
  );
}

export default BookList;
