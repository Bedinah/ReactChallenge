import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import axios from "axios";
import { useState } from "react";
import { img_500 } from "../config/config";
import { unavailable, unavailableLandscape } from "../config/config";
import "./detailPage.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DetailPage({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Content, setContent] = useState();
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    console.log(data);
    setVideo(data.results[0]?.key);
  };

  React.useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {Content && (
            <Box sx={style}>
              <div className="contentModal">
                <img
                  alt={Content.name || Content.title}
                  className="contentPortrait"
                  src={
                    Content.poster_path
                      ? `${img_500}/${Content.poster_path}`
                      : unavailable
                  }
                />

                <img
                  alt={Content.name || Content.title}
                  className="contentLandscape"
                  src={
                    Content.backdrop_path
                      ? `${img_500}/${Content.backdrop_path}`
                      : unavailableLandscape
                  }
                />

                <div className="contentAbout">
                  <span className="contentTitle">
                    {Content.name || Content.title} (
                    {(
                      Content.first_air_date ||
                      Content.release_date ||
                      "...."
                    ).substring(0, 4)}
                    )
                  </span>
                  <span className="contentDescription">{Content.overview}</span>
                </div>
              </div>
            </Box>
          )}
        </Fade>
      </Modal>
    </>
  );
}
