import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

test("should be true", () => {
  expect(true).toBe(true);
});

test("should be good", () => {
  expect("good").toEqual("good");
});
