import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../Todo";

afterEach(() => {
  cleanup();
});

test("should render completed todo", () => {
  const todo = { id: 1, title: "Wash laundry", completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Wash laundry");
  expect(todoElement).toContainHTML("strike");
});

test("should render completed todo", () => {
  const todo = { id: 2, title: "Do homework", completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Do homework");
  expect(todoElement).toContainHTML("strike");
});

test("should render not completed todo", () => {
  const todo = { id: 3, title: "Eat dinner", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-3");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Eat dinner");
  expect(todoElement).not.toContainHTML("strike");
});

test("should render not completed todo", () => {
  const todo = { id: 4, title: "Fall asleep", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-4");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Fall asleep");
  expect(todoElement).not.toContainHTML("strike");
});

test("should match snapshot", () => {
  const todo = { id: 4, title: "Fall asleep", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
