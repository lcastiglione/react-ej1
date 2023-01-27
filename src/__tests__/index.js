import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

test("home work as expected", async () => {
  render(<App />);

  //Se obtienen todos los links de gifs
  const gifLink = await screen.findAllByRole("link");

  //Se verifica que en todos esté la clase 'gif-link'
  gifLink.forEach((gifLink) => {
    expect(gifLink).toHaveClass("gif-link");
  });
});

test("search form could be used", async () => {
  render(<App />);

  //Se obtienen las referencias al input y botón del formulario
  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");

  // Se carga un valor de referencia en el input y se simula un clic en el botón
  //Se pone target porque el segundo parámetro tiene que ser los parámetros del
  //evento, no solo uno en particular.
  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.click(button);

  //Se busca que exista la palbra buscada en el DOM
  const title = await screen.findByText("Matrix");

  //Se verifica que esté visible
  expect(title).toBeVisible();
});
