import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from ".";
import { CatContext } from "../../context/CatContext";
import type { CardProps } from "./index.types";
import type { CatContextType } from "../../types/CatContextType";

jest.mock('../../lib/api', () => ({
  API_KEY: 'mocked-api-key',
}));

const mockCat = {
  id: "cat-123",
  url: "https://example.com/cat.jpg",
  score: 1,
};

const renderCard = ({
  cat = mockCat,
  voted = false,
  isLoading = false,
  value = 0,
  onVote = jest.fn(),
}: Partial<CardProps> & { value?: number; isLoading?: boolean }) => {
  const mockContext: CatContextType = {
    cats: [],
    votes: [],
    vote: jest.fn(),
    hasVoted: jest.fn().mockReturnValue(false),
    fetchCats: jest.fn(),
    loading: false,
    voting: {
      isLoading: isLoading ?? false,
      value: value ?? 0,
    },
  };

  render(
    <CatContext.Provider value={mockContext}>
      <Card cat={cat} voted={voted} onVote={onVote} />
    </CatContext.Provider>
  );

  return { onVote };
};

describe("Card component", () => {
  it("renders image and score", () => {
    renderCard({});
    expect(screen.getByAltText("Cat")).toHaveAttribute("src", mockCat.url);
    expect(screen.getByText(/Score:/)).toHaveTextContent("Score: 1");
  });

  it("calls onVote with 1 when upvote button is clicked", () => {
    const { onVote } = renderCard({});
    const upvoteButton = screen.getByTestId("icon-thumbs-up").parentElement!;
    fireEvent.click(upvoteButton);
    expect(onVote).toHaveBeenCalledWith("cat-123", 1);
  });

  it("calls onVote with -1 when downvote button is clicked", () => {
    const { onVote } = renderCard({});
    const downvoteButton = screen.getByTestId("icon-thumbs-down").parentElement!;
    fireEvent.click(downvoteButton);
    expect(onVote).toHaveBeenCalledWith("cat-123", -1);
  });

  it("disables both buttons when voted is true", () => {
    renderCard({ voted: true });
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toBeDisabled();
    expect(buttons[1]).toBeDisabled();
  });

  it("shows loading spinner on upvote when loading and value is positive", () => {
    renderCard({ isLoading: true, value: 1 });
    const spinner = screen.getByTestId("loading-icon");
    expect(spinner).toBeInTheDocument();
  });

  it("shows loading spinner on downvote when loading and value is negative", () => {
    renderCard({ isLoading: true, value: -1 });
    const spinner = screen.getByTestId("loading-icon");
    expect(spinner).toBeInTheDocument();
  });
});
