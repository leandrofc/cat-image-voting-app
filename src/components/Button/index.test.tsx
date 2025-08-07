import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from ".";

describe("Button component", () => {
  it("renders with default text", () => {
    render(<Button text="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with loading state", () => {
    render(<Button text="Click me" isLoading />);
    expect(screen.getByTestId("loading-icon")).toBeInTheDocument();
    expect(screen.queryByText("Click me")).not.toBeInTheDocument();
  });

  it("renders disabled", () => {
    const handleClick = jest.fn();
    render(<Button text="Can't click me" disabled onClick={handleClick} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with selected style", () => {
    render(<Button text="Selected" isSelected />);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/bg-gray-300/);
    expect(button.className).toMatch(/text-blue-700/);
  });

  it("renders with icon variant - ThumbsUp", () => {
    render(<Button variant="icon" icon="ThumbsUp" />);
    expect(screen.getByTestId("icon-thumbs-up")).toBeInTheDocument();
  });

  it("renders with icon variant - ThumbsDown", () => {
    render(<Button variant="icon" icon="ThumbsDown" />);
    expect(screen.getByTestId("icon-thumbs-down")).toBeInTheDocument();
  });

  it("applies score color when score is positive", () => {
    render(<Button variant="icon" icon="ThumbsUp" score={1} />);
    const iconWrapper = screen.getByTestId("icon-thumbs-up");
    const svg = iconWrapper.firstChild as HTMLElement;
    expect(svg).toHaveClass("text-orange-700");
  });
  
  it("applies score color when score is negative", () => {
    render(<Button variant="icon" icon="ThumbsDown" score={-1} />);
    const iconWrapper = screen.getByTestId("icon-thumbs-down");
    const svg = iconWrapper.firstChild as HTMLElement;
    expect(svg).toHaveClass("text-orange-700");
  });
  
  it("applies gray icon color when disabled", () => {
    render(<Button variant="icon" icon="ThumbsUp" disabled />);
    const iconWrapper = screen.getByTestId("icon-thumbs-up");
    const svg = iconWrapper.firstChild as HTMLElement;
    expect(svg).toHaveClass("text-gray-300");
  });
  
});
