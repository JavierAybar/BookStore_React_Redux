import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pUQDeLSPx32lJXYPSYtN/books';

export const createIdUser = createAsyncThunk('user/createIdUser', async () => {
  const response = await axios.post(url);
  return response.data;
});

export const getListBooks = createAsyncThunk('user/getListBooks', async (_, rejectWithValue) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteBook = createAsyncThunk('user/deleteBook', async (itemId, thunkAPI) => {
  try {
    const response = await axios.delete(`${url}/${itemId}`);
    thunkAPI.dispatch(getListBooks());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createNewBook = createAsyncThunk('user/createNewBook', async (data, thunkAPI) => {
  try {
    const response = await axios.post(url, data);
    thunkAPI.dispatch(getListBooks());
    return response.data;
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
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksItems = state.booksItems.filter((item) => item.id !== bookId);
    },
  },
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
  },
});

export const { removeBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
