import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("Name is required"),
  number: Yup.string().required("Number is required"),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className={styles.form}>
          <div>
            <Field name="name" placeholder="Name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
          <div>
            <Field name="number" placeholder="Number" />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
