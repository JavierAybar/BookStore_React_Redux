import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pUQDeLSPx32lJXYPSYtN/books';

export const getListBooks = createAsyncThunk('user/getListBooks', async (_, rejectWithValue) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteBook = createAsyncThunk('user/deleteBook', async (itemId, thunkAPI) => {
  try {
    await axios.delete(`${url}/${itemId}`);
    return itemId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createNewBook = createAsyncThunk('user/createNewBook', async (data, thunkAPI) => {
  try {
    await axios.post(url, data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  booksItems: [],
  isLoading: false,
  error: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListBooks.fulfilled, (state, action) => {
      state.booksItems = action.payload;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(getListBooks.rejected, (state, action) => {
      state.booksItems = [];
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      delete state.booksItems[action.payload];
    });
    builder.addCase(createNewBook.fulfilled, (state, action) => {
      state.loading = false;
      const newBook = action.payload;
      const itemId = newBook.item_id;

      state.booksItems[itemId] = [];
      state.booksItems[itemId].push(newBook);
    });
    builder.addCase(createNewBook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default booksSlice.reducer;
