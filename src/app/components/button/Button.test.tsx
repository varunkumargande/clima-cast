// src/app/components/button/__tests__/Button.test.tsx

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from ".";

describe("Button Component", () => {
  it("renders button with children", () => {
    // Render the Button component with some text content
    const { getByText } = render(<Button theme={false}>Click me</Button>);

    // Assert that the rendered button contains the text content
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    // Mock onClick handler
    const onClick = jest.fn();

    // Render the Button component with onClick handler
    const { getByText } = render(
      <Button theme onClick={onClick}>
        Click me
      </Button>
    );

    // Simulate a click event on the button
    fireEvent.click(getByText("Click me"));

    // Assert that onClick handler is called
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders button with light theme class when theme prop is false", () => {
    // Render the Button component with theme prop set to false
    const { container } = render(<Button theme={false}>Click me</Button>);

    // Find the rendered button element
    const buttonElement = container.querySelector("button");

    // Assert that the button element has the correct light theme class
    expect(buttonElement).toHaveClass("neumorphicBtnLight");
  });

  it("renders button with dark theme class when theme prop is true", () => {
    // Render the Button component with theme prop set to true
    const { container } = render(<Button theme={true}>Click me</Button>);

    // Find the rendered button element
    const buttonElement = container.querySelector("button");

    // Assert that the button element has the correct dark theme class
    expect(buttonElement).toHaveClass("neumorphicBtnDark");
  });
});
