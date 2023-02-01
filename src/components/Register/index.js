import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import registerService from "services/register";
import useUser from "hooks/useUser";
import { useForm } from "react-hook-form";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, isLogged } = useUser();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm(initialValues);

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  if (registered) {
    return <h4>Usuario registrado con éxito!</h4>;
  }

  const onSubmit = (values) => {
    const e = validateFields(values);
    setError({ ...e });
    console.log(values);
    setIsSubmitting(true);
    return registerService(values)
      .then(() => {
        setRegistered(true);
        login(values);
        setIsSubmitting(false);
      })
      .catch((error) => {
        setError({ credentials: error });
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={errors.username ? "error" : ""}
          defaultValue="Usuario"
          {...register("username", { required: true })}
        ></input>
        {errors.username && (
          <small className="form-error">{errors.username}</small>
        )}

        <input
          className={errors.password ? "error" : ""}
          defaultValue="Contraseña"
          type="password"
          {...register("password", { required: true })}
        ></input>
        {errors.password && (
          <small className="form-error">{errors.password}</small>
        )}

        <button className="btn" disabled={isSubmitting}>
          Registrarse
        </button>
        {errors.credentials && (
          <small className="form-error">{errors.credentials}</small>
        )}
      </form>
    </>
  );
}
