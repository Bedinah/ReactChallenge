// import { createSlice } from "@reduxjs/toolkit";

// const movieList = createSlice({
//   name: "movies",
//   initialState: [
//     {
//       title: "THE LORD OF THE RINGS: THE RINGS OF POWER",
//       type: "TV-series",
//       date: "2022-09-01",
//     },
//     {
//       title: "BULLET TRAINR",
//       type: "MOVIE",
//       date: "2022-07-03",
//     },
//     {
//       title: "HALLOWEEN ENDS",
//       type: "MOVIES",
//       date: "2022-10-12",
//     },
//     {
//       title: "WEREWOLF BY NIGHT",
//       type: "MOVIES",
//       date: "2022-09-25",
//     },
//     {
//       title: "HOUSE OF THE DRAGON",
//       type: "TV-series",
//       date: "2022-08-21",
//     },
//     {
//       title: "SHE-HULK: ATTORNEY AT LAW",
//       type: "TV-series",
//       date: "2022-08-18",
//     },
//     {
//       title: "STAR WARS: ANDOR",
//       type: "TV-series",
//       date: "2022-09-21",
//     },
//     {
//       title: "HOCUS POCUS 2",
//       type: "MOVIE",
//       date: "2022-09-27",
//     },
//     {
//       title: "THE LORD OF THE RINGS: THE RINGS OF POWER",
//       type: "TV-series",
//       date: "2022-09-01",
//     },
//     {
//       title: "THE LORD OF THE RINGS: THE RINGS OF POWER",
//       type: "TV-series",
//       date: "2022-09-01",
//     },
//     {
//       title: "THE LORD OF THE RINGS: THE RINGS OF POWER",
//       type: "TV-series",
//       date: "2022-09-01",
//     },
//   ],
//   reducers: {
//     addMovie: (state, action) => {
//       const newMovie = {
//         id: Date.now(),
//         title: action.payload.title,
//       };
//       state.push(newMovie);
//     },
//     deleteMovie: (state, action) => {
//       return;
//       state.filter(action.payload.id);
//     },
//   },
// });

// export const { addMovie, deleteMovie } = movieList.actions;

// export default movieList.reducer;

const movieReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100) + 1,
          poster: "/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
          title: action.payload.title,
          date: "2022-02-22",
          media_type: "tv",
          vote_average: 8,
        },
      ];
    case "DELETE_MOVIE":
      return state.filter((movie) => movie.id != action.payload);
    case "GET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};
export default movieReducer;
