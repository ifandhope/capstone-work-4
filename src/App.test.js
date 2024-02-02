import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("renders the Header component Link", () => {
  render(<App />);
  const linkElement = screen.getByText("Reserve Table");
  expect(linkElement).toBeInTheDocument();
});

test.todo("renders the Main availibleTimes/updateTimes"),
  () => {
    render(<App />);
    const reserveButton = screen.getByRole("button");
    fireEvent.click(reserveButton);
  };
