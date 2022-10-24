import React from "react";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@material-ui/core";
import "./singlecontent.css";
import { useDispatch } from "react-redux";
import DetailPage from "../detailPage";
// import { deleteMovie } from "../../redux/movieList";

const Singlecontent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch({ type: "DELETE_MOVIE", payload: id });
  };
  return (
    <>
      <div style={{ display: "inline" }}>
        <DetailPage media_type={media_type} id={id}>
          <Badge
            badgeContent={vote_average}
            color={vote_average > 7 ? "primary" : "secondary"}
          />
          <img
            src={poster ? `${img_300}/${poster}` : unavailable}
            alt={title}
          />
          <h2 className=" tittle">{title}</h2>
          <p className="subtitle">
            {media_type === "tv" ? "TV Series" : "Movie"}
          </p>
          <p className=" subtitle">{date}</p>
        </DetailPage>
        <button
          onClick={handleDeleteClick}
          style={{
            padding: "1rem , 3rem",
            backgroundColor: "aliceblue",
            borderRadius: "1.5rem",
          }}
          type="button"
          class="btn btn-danger"
        >
          DELETE
        </button>
      </div>
    </>
  );
};

export default Singlecontent;
