import '../style/AddBook.css';

// eslint-disable-next-line react/prop-types
const Selected = ({ selectValue, onChangeCategory }) => {
  const categories = [
    {
      id: 1,
      category: 'Categories',
    },
    {
      id: 2,
      category: 'Action',
    },
    {
      id: 3,
      category: 'Comedy',
    },
    {
      id: 4,
      category: 'Science Fiction',
    },
  ];

  return (
    <select className="select_category" value={selectValue} onChange={onChangeCategory}>
      {categories.map((item) => (
        <option key={item.id} value={item.category}>{item.category}</option>
      ))}
    </select>
  );
};

export default Selected;
