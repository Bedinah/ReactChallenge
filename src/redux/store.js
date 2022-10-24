import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieList";

export default configureStore({
  reducer: {
    movies: movieReducer,
  },
  devTools: true,
});
