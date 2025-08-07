jest.mock("../../lib/api", () => ({
    fetchCats: jest.fn(() => Promise.resolve([])),
    vote: jest.fn(() => Promise.resolve({ success: true })),
}));
  
jest.mock("../../components/ui/carousel", () => ({
    Carousel: ({ children }: any) => <div data-testid="carousel">{children}</div>,
    CarouselContent: ({ children }: any) => <div data-testid="carousel-content">{children}</div>,
    CarouselItem: ({ children }: any) => <div data-testid="carousel-item">{children}</div>,
    CarouselNext: (props: any) => <button {...props} data-testid="carousel-next">Next</button>,
    CarouselPrevious: (props: any) => <button {...props} data-testid="carousel-prev">Prev</button>,
}));
  
import { render, screen } from "@testing-library/react";
import Gallery from "../../components/Gallery";
import { CatContext } from "../../context/CatContext";
  
const fetchCatsMock = jest.fn();
const voteMock = jest.fn();
const hasVotedMock = jest.fn();
  
const catsMock = [
    { id: "cat-123", url: "https://example.com/cat.jpg", score: 1 },
    { id: "cat-1234", url: "https://example.com/cat2.jpg", score: 0 },
];
  
const renderComponent = (overrides = {}) => {
    render(
        <CatContext.Provider
            value={{
            cats: catsMock,
            votes: [],
            vote: voteMock,
            hasVoted: hasVotedMock,
            fetchCats: fetchCatsMock,
            loading: false,
            voting: { isLoading: false, value: 0 },
            ...overrides,
            }}
        >
            <Gallery />
        </CatContext.Provider>
    );
};
  
describe("Gallery component", () => {
    beforeEach(() => {
        fetchCatsMock.mockClear();
        voteMock.mockClear();
        hasVotedMock.mockClear();
    });
  
    it("calls fetchCats in useEffect when mounting", () => {
        renderComponent();
        expect(fetchCatsMock).toHaveBeenCalledTimes(1);
    });
  
    it("render Card Skeleton when loading is true", () => {
        renderComponent({ loading: true });
        expect(screen.getByTestId("card-skeleton")).toBeInTheDocument();
        expect(screen.queryByTestId("carousel")).not.toBeInTheDocument();
    });
  
    it("render cards when loading is false", () => {
        hasVotedMock.mockReturnValue(false);
        renderComponent({ loading: false });

        expect(screen.getByTestId("carousel")).toBeInTheDocument();

        const cards = screen.getAllByTestId("card");
        expect(cards.length).toBe(catsMock.length);

        catsMock.forEach((cat) => {
        expect(screen.getByText(`Score: ${cat.score}`)).toBeInTheDocument();
        expect(hasVotedMock).toHaveBeenCalledWith(cat.id);
        });
    });
  
    it("render navigation buttons when isLoading is false", () => {
        renderComponent({ voting: { isLoading: false, value: 0 } });

        expect(screen.getByTestId("carousel-next")).toBeInTheDocument();
        expect(screen.getByTestId("carousel-prev")).toBeInTheDocument();
    });
  
    it("does not render navigation buttons when isLoading is true", () => {
        renderComponent({ voting: { isLoading: true, value: 0 } });

        expect(screen.queryByTestId("carousel-next")).not.toBeInTheDocument();
        expect(screen.queryByTestId("carousel-prev")).not.toBeInTheDocument();
    });
});
  