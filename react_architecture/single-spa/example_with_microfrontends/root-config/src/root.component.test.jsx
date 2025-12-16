import React from "react";
import { render, screen } from "@testing-library/react";
import Root from "./root.component";

describe("Root Component", () => {
  it("renders without crashing", () => {
    render(<Root />);
  });
});
