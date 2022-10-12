import React from "react";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@material-ui/core";
import "./singlecontent.css";
import DetailPage from "../detailPage";

const Singlecontent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <DetailPage media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 7 ? "primary" : "secondary"}
      />
      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <h2 className=" tittle">{title}</h2>
      <p className="subtitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
      </p>
      <p className=" subtitle">{date}</p>
    </DetailPage>
  );
};

export default Singlecontent;
