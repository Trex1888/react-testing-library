import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("should be header text", () => {
  const { getByTestId } = render(<App />);
  const headerEl = getByTestId("header1");
  expect(headerEl.textContent).toBe("food");
});

test("should paragraph text", () => {
  const { getByTestId } = render(<App />);
  const right = getByTestId("para");
  expect(right.textContent).toBe("Edit src/App.js and save to reload.");
});

test("should be a text", () => {
  const { getByTestId } = render(<App />);
  const left = getByTestId("atag");
  expect(left.textContent).toBe("Learn React");
});

// test("should check for alt image tag", () => {
//   const albumImage = screen.queryByAltText();
//   expect(albumImage).not.toBeInTheDocument();
// });

// test("should be header text", () => {
//   const component = render(<App />);
//   const headerEl = component.getByTestId("header2");
//   expect(headerEl.textContent).toBe("food");
// });
