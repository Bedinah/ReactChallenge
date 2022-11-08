import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Singlecontent from "../components/singlecontent/singlecontent";
import BasicModal from "../components/modal";
import "./homepge.css";
import AddMovie from "../components/addMovie";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  // const [Content, setContent] = useState([]);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const fetchHomepage = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({ type: "GET_MOVIES", payload: data.results });
    // setContent(data.results);
  };

  useEffect(() => {
    fetchHomepage();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      {/* <AddMovie /> */}
      <BasicModal />
      <div className="movies">
        {movies &&
          movies.map((c) => (
            <Singlecontent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default Homepage;
