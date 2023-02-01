import React from "react";
import register from "services/register";
import { Formik } from "formik";

export default function Register() {
  console.log("hola");
  const formikOnSubmit = (values, { setFieldError }) => {
    return register(values).catch((error) => {
      setFieldError("username", "This username is not valid");
    });
  };

  return (
    <>
      <h2>Formulario</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={formikOnSubmit}
        validate={(values) => {
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
        }}
      >
        {({ errors, handleChange, handleSubmit, isSubmitting }) => (
          <form className="form" onSubmit={handleSubmit}>
            <input
              className={errors.username ? "error" : ""}
              name="username"
              onChange={handleChange}
              placeholder="Usuario"
            ></input>
            {errors.username && (
              <small className="form-error">{errors.username}</small>
            )}
            <input
              className={errors.password ? "error" : ""}
              name="password"
              onChange={handleChange}
              placeholder="Contraseña"
              type="password"
            ></input>
            {errors.password && (
              <small className="form-error">{errors.password}</small>
            )}
            <button className="btn" disabled={isSubmitting} type="submit">
              Registrarse
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
