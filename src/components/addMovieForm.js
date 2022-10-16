import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/movieList";

const AddMovieForm = () => {
  // const [value, setValue] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <h4 style={{ fontSize: "2rem" }}>Add a movie</h4>
      <Formik
        initialValues={{ name: "type here" }}
        onSubmit={(values, actions) => {
          dispatch(
            addMovie({
              title: values,
            })
          );

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default AddMovieForm;
