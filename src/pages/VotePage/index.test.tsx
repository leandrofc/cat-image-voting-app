import { render, screen, fireEvent } from "@testing-library/react";
import VotePage from "../../pages/VotePage";
import { CatContext } from "../../context/CatContext";

jest.mock('../../lib/api', () => ({
    fetchCatsApi: jest.fn().mockResolvedValue([]),
}));

jest.mock("../../components/Gallery", () => () => <div data-testid="gallery" />);

const fetchCatsMock = jest.fn();

const mockContextValue = {
    cats: [],
    votes: [],
    vote: jest.fn(),
    hasVoted: jest.fn(),
    fetchCats: fetchCatsMock,
    loading: false,
    voting: { isLoading: false, value: 0 },
};

const renderComponent = (overrides = {}) => {
    render(
        <CatContext.Provider value={{ ...mockContextValue, ...overrides }}>
        <VotePage />
        </CatContext.Provider>
    );
};

describe("VotePage component", () => {
    beforeEach(() => {
        fetchCatsMock.mockClear();
    });

    it("should render correctly with text, images and gallery", () => {
        renderComponent();

        const img = screen.getByAltText(/cat image voting logo/i);
        expect(img).toHaveAttribute("src", "/catImageVotingLogo.png");

        expect(screen.getByText(/Vote on the/i)).toBeInTheDocument();
        expect(screen.getByText(/cute cat images/i)).toBeInTheDocument();
        expect(screen.getByText(/Click one of the icons/i)).toBeInTheDocument();

        expect(screen.getByTestId("gallery")).toBeInTheDocument();

        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toBeGreaterThan(0);
    });

    it("should call fetchCats when clicking the button", () => {
        renderComponent();

        const buttons = screen.getAllByRole("button");
        buttons.forEach((button) => fireEvent.click(button));

        expect(fetchCatsMock).toHaveBeenCalledTimes(buttons.length);
    });

    it("should disable button when loading or isLoading are true", () => {
        renderComponent({ loading: true });
        screen.getAllByRole("button").forEach(button => {
            expect(button).toBeDisabled();
        });

        renderComponent({ loading: false, voting: { isLoading: true, value: 0 } });
        screen.getAllByRole("button").forEach(button => {
            expect(button).toBeDisabled();
        });
    });

    it("must enable button when loading and isLoading are false", () => {
        renderComponent({ loading: false, voting: { isLoading: false, value: 0 } });
        screen.getAllByRole("button").forEach(button => {
            expect(button).toBeEnabled();
        });
    });
});
