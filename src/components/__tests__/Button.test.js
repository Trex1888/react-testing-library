import { render, fireEvent, cleanup } from "@testing-library/react";
import Button from "../Button";

afterEach(() => {
  cleanup();
});

it("should render button correctly ", () => {
  const { queryByTitle } = render(<Button />);
  const btn = queryByTitle("testButton");
  expect(btn).toBeTruthy();
});

describe("clickButton", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Button />);
    const btn = queryByTitle("testButton");
    expect(btn.innerHTML).toBe("Click Here");
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe("You Clicked");
  });
});
