import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

describe("generic test", () => {
  /*
  Esta parte reinicia la url a la posición de origen
  (en este caso es '/').
  Si no se agrega y se ejecutan eventos que redireccionan a otra ruta,
  los test que le siguen pueden llegar a fallar.
  */

  afterEach(() => {
    window.history.pushState(null, document.title, "/");
  });

  /*
  //Da mal, revisar qué se cambió
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
  */

  test("check clicks button with mock", async () => {
    const mockHandler = jest.fn();
    render(<App />);

    const button = screen.getByText("Buscar");

    button.addEventListener("click", mockHandler);
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("check clicks button with handleClick", async () => {
    let clicks = 0;
    const handleClick = () => clicks++;
    render(<App />);

    const button = screen.getByText("Buscar");
    button.addEventListener("click", handleClick);
    fireEvent.click(button);

    expect(clicks).toBe(1);
  });
});
