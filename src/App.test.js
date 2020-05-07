import React from "react";
import { render, fireEvent, wait, getByAltText } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

//jest.mock("./api/fetchShow");

test("App can render", () => {
  render(<App />);
});

test("Dropdown works", async () => {
  
});
