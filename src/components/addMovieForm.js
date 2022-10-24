import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddMovieForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const save = () => {
    dispatch({ type: "ADD_MOVIE", payload: { title: title } });
  };
  return (
    <div>
      <input onChange={(e) => setTitle(e.target.value)} />

      <button onClick={save}>SAVE</button>
    </div>
  );
};

export default AddMovieForm;
