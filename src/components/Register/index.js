import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import registerService from "services/register";
import useUser from "hooks/useUser";

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
            required: "Required username",
          })}
        ></input>
        <ErrorMessage errors={errors} name="username" as="small" />
        <input
          className={errors.password ? "error" : ""}
          defaultValue="Contraseña"
          type="password"
          {...register("password", {
            required: "Required password",
            minLength: {
              value: 3,
              message: "Length must be greater than 3", // JS only: <p>error message</p> TS only support string
            },
          })}
        ></input>
        <ErrorMessage errors={errors} name="password" as="small" />
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
