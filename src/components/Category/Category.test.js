import React from "react";
import { render, screen } from "@testing-library/react";
import Category from "components/Category";

it("test category", async () => {
  render(<Category />);
});
