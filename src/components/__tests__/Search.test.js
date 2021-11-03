import { render, fireEvent, cleanup } from "@testing-library/react";
import Search from "../Search";

afterEach(() => {
  cleanup();
});

it("should test search function", () => {
  const { queryByTitle } = render(<Search />);
  const input = queryByTitle("testSearch");
  expect(input).toBeTruthy();
});

describe("changeInput", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Search />);
    const input = queryByTitle("testSearch");
    fireEvent.change(input, { target: { value: "testValue" } });
    expect(input.value).toBe("testValue");
  });
});
