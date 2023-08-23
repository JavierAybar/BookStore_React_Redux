import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksItems: [
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
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksItems = state.booksItems.filter((item) => item.id !== bookId);
    },
    addBook: (state, action) => {
      state.booksItems.push(action.payload);
    },
  },
});

export const { removeBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
