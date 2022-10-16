import React from "react";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@material-ui/core";
import "./singlecontent.css";
import { useDispatch } from "react-redux";
import DetailPage from "../detailPage";
import { deleteMovie } from "../../redux/movieList";

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
    dispatch(deleteMovie({ id: id }));
  };
  return (
    <DetailPage media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 7 ? "primary" : "secondary"}
      />
      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <h2 className=" tittle">{title}</h2>
      <p className="subtitle">{media_type === "tv" ? "TV Series" : "Movie"}</p>
      <p className=" subtitle">{date}</p>
      <button
        onClick={handleDeleteClick}
        style={{ margin: "2rem 7rem", padding: "1rem", backgroundColor: "red" }}
        type="button"
        class="btn btn-danger"
      >
        Delete
      </button>
    </DetailPage>
  );
};

export default Singlecontent;
