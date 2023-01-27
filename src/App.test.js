import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders withput crashing", async () => {
  //Se renderiza la aplicaicón App
  render(<App />);
  //Obtiene el elemento que tiene el texto "Última búsqueda"
  const title = await screen.findByText(/Última búsqueda/i);
  //Revisa que el elemento anterior esté en el documento
  expect(title).toBeInTheDocument();
});
