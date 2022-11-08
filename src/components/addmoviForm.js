import React from "react";
import { Form, Formik } from "formik";
import TextField from "./textField";
import * as Yup from "yup";

const AddmoviForm = () => {
  const validate = Yup.object({
    title: Yup.string().required("please type movieName"),

    type: Yup.string().required("please type movieType"),

    date: Yup.string().required("please type release date"),
  });
  return (
    <Formik
      initialValues={{
        title: "",
        type: "",
        date: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4 ">ADD MOVIE</h1>
          {console.log(formik.values)}
          <Form>
            <TextField label="Movie Title" name="title" type="text" />
            <TextField label="Movie Type" name="type" type="text" />
            <TextField label="Realese Date" name="date" type="text" />

            <button className="btn btn-dark mt-3" type="submit">
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AddmoviForm;
