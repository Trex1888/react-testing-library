import { render, fireEvent, cleanup } from "@testing-library/react";
import Counter from "../Counter";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

afterEach(() => {
  cleanup();
});

test("should render correct header text", () => {
  const headerName = getByTestId("header");
  expect(headerName.textContent).toBe("New Counter");
});

test("should have counter start with text of 0", () => {
  const counterName = getByTestId("counter");
  expect(counterName.textContent).toBe("0");
});

test("should have initial value of 1", () => {
  const inputName = getByTestId("input");
  expect(inputName.value).toBe("1");
});

test("should have initial value of 1", () => {
  const addBtn = getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
});

test("should have initial value of 1", () => {
  const subBtn = getByTestId("sub-btn");
  expect(subBtn.textContent).toBe("-");
});

test("should change value of input correctly", () => {
  const inputElement = getByTestId("input");
  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });
  expect(inputElement.value).toBe("5");
});

test("should add 1 to counter", () => {
  const btnElement = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");

  fireEvent.click(btnElement);
  expect(counterEl.textContent).toBe("1");
});

test("should sub 1 to counter", () => {
  const subElement = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");

  fireEvent.click(subElement);
  expect(counterEl.textContent).toBe("-1");
});

test("should change input value with add btn working correctly", () => {
  const btnElement = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "7",
    },
  });

  fireEvent.click(btnElement);
  expect(counterEl.textContent).toBe("7");
});

test("should change input value with sub btn working correctly", () => {
  const btnElement = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "7",
    },
  });

  fireEvent.click(btnElement);
  expect(counterEl.textContent).toBe("-7");
});

test("should add and sub correct counter number", () => {
  const btnElement = getByTestId("sub-btn");
  const addBtn = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(btnElement);
  fireEvent.click(btnElement);

  expect(counterEl.textContent).toBe("10");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtn);
  fireEvent.click(btnElement);
  fireEvent.click(btnElement);

  expect(counterEl.textContent).toBe("5");
});

test("should contain correct className", () => {
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const subBtnElement = getByTestId("sub-btn");
  const addBtnEl = getByTestId("add-btn");

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("");

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("green");

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("green");

  fireEvent.click(subBtnElement);
  fireEvent.click(subBtnElement);

  expect(counterEl.className).toBe("");

  fireEvent.click(subBtnElement);
  fireEvent.click(subBtnElement);
  fireEvent.click(subBtnElement);
  fireEvent.click(subBtnElement);

  expect(counterEl.className).toBe("red");
});
