import { render } from "@testing-library/react";
import Home from "./Home";

test("displays front page with no error messages ", () => {
  render(<Home />);
  expect(linkElement).toBeInTheDocument();
});
