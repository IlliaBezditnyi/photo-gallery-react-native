import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './components/GalleryState';
import Home from './components/Home';

const store = configureStore({
  reducer: {
    gallery: galleryReducer
  }
});

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
)
