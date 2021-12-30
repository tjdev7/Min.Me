import { render } from "@testing-library/react";
import App from "./App";

test("displays front page with no error messages ", () => {
  render(<App />);
  expect(linkElement).toBeInTheDocument();
});
