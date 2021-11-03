import { cleanup } from "@testing-library/react";
import { lowerCase, multiply, upperCase } from "./Helper";

afterEach(() => {
  cleanup();
});

test("should multiply both values", () => {
  expect(multiply(6, 4)).toBe(24);
  expect(multiply(2, 4)).toBe(8);
  expect(multiply(-6, 1)).toBe(-6);
});

test("should make string lower case", () => {
  expect(lowerCase("FOOd")).toBe("food");
  expect(lowerCase("WaTeR")).toBe("water");
});

test("should make string upper case", () => {
  expect(upperCase("chips")).toBe("CHIPS");
});
