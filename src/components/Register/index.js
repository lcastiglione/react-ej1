import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import registerService from "services/register";
import useUser from "hooks/useUser";
import { useForm } from "react-hook-form";

const initialValues = { username: "", password: "" };

export default function Register() {
  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorCredential, setErrorCredential] = useState([]);
  const { login, isLogged } = useUser();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(initialValues);

  useEffect(() => {
    if (isLogged) {
      setRegistered(true);
      navigate("/");
    }
  }, [isLogged, navigate, setRegistered]);

  const getMessageError = (name) => {
    if ("username" === name) {
      return errors.username.message || "Required username";
    }
    if ("password" === name) {
      switch (errors.password?.type) {
        case "required":
          return "Required password";
        case "minLength":
          return errors.password.message || "Length must be greater than 3";
        default:
          return;
      }
    }
    if ("credentials" === name) {
      return errors.credentials.message || "Credentials error";
    }
  };

  if (registered) {
    return <h4>Usuario registrado con éxito!</h4>;
  }
  const onSubmit = (values) => {
    setIsSubmitting(true);
    return registerService(values)
      .then(() => {
        login(values);
        setRegistered(true);
        setErrorCredential(false);
      })
      .catch((error) => {
        setErrorCredential(error.message);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={errors.username ? "error" : ""}
          defaultValue="Usuario"
          {...register("username", {
            required: true,
          })}
        ></input>
        {errors.username?.type && (
          <small className="form-error">{getMessageError("username")}</small>
        )}
        <input
          className={errors.password ? "error" : ""}
          defaultValue="Contraseña"
          type="password"
          {...register("password", {
            required: true,
            minLength: 3,
          })}
        ></input>
        {errors.password?.type && (
          <small className="form-error">{getMessageError("password")}</small>
        )}
        <button className="btn" disabled={isSubmitting}>
          Registrarse
        </button>
        {errorCredential && (
          <p className="form-credential-error">{errorCredential}</p>
        )}
      </form>
    </>
  );
}
