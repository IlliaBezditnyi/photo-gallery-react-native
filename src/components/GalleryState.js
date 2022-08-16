import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async () => {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}`);
    const json = await response.json();
    return json;
  }
);

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    photos: [],
    isLoading: false,
  },
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default gallerySlice.reducer;