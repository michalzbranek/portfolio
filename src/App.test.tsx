import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
  expect(document.body.firstChild).not.toBeNull();
});
