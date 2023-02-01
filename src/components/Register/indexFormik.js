import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import register from "services/register";
import useUser from "hooks/useUser";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = { username: "", password: "" };

const validateFields = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required username";
  }

  if (!values.password) {
    errors.password = "Required password";
  } else if (values.password.length < 3) {
    errors.password = "Length must be greater than 3";
  }

  return errors;
};

export default function Register() {
  const [registered, setRegistered] = useState(false);
  const { login, isLogged } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  if (registered) {
    return <h4>Usuario registrado con éxito!</h4>;
  }

  const handleSubmit = (values, { setFieldError }) => {
    console.log("submit");
    return register(values)
      .then(() => {
        setRegistered(true);
        login(values);
      })
      .catch(setFieldError("username", "This username is not valid"));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={handleSubmit}
      >
        {({ errors, isSubmitting }) => (
          <Form className="form">
            <Field
              className={errors.username ? "error" : ""}
              name="username"
              placeholder="Usuario"
            />
            <ErrorMessage
              className="form-error"
              name="username"
              component="small"
            />

            <Field
              className={errors.password ? "error" : ""}
              name="password"
              placeholder="Contraseña"
              type="password"
            />
            <ErrorMessage
              className="form-error"
              name="password"
              component="small"
            />

            <button className="btn" disabled={isSubmitting}>
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
