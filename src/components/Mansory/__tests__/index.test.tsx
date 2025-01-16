import { render, screen } from "@testing-library/react";

import { Mansory } from "..";
import { MOCK_PHOTOS } from "../constants/__mock__";
import { useInView } from "@/hooks/useInView";

jest.mock("@/hooks/useInView", () => ({
  useInView: jest.fn(),
}));

const mockUseInView = useInView as jest.MockedFunction<typeof useInView>;

describe("Mansory Component", () => {
  const mockPhotos = MOCK_PHOTOS.photos;
  const mockOnLoadMore = jest.fn();

  beforeEach(() => {
    mockUseInView.mockReturnValue([{ current: null }, true]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading message when `isLoading` is true", () => {
    render(
      <Mansory photos={[]} isLoading={true} onLoadMore={mockOnLoadMore} />
    );

    expect(screen.getByText("Please wait...")).toBeInTheDocument();
  });

  test("renders error message when `error` is provided", () => {
    render(
      <Mansory
        photos={[]}
        error="Something went wrong"
        onLoadMore={mockOnLoadMore}
      />
    );

    const card = screen.queryByTestId("mansory-card");
    expect(card).not.toBeInTheDocument();
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  test("renders 'no data found!' message when there are no photos", () => {
    render(<Mansory photos={[]} onLoadMore={mockOnLoadMore} />);

    expect(screen.getByText("no data found!")).toBeInTheDocument();
    const card = screen.queryByTestId("mansory-card");
    expect(card).not.toBeInTheDocument();
  });

  test("renders all cards when `photos` prop is provided", () => {
    render(<Mansory photos={mockPhotos} onLoadMore={mockOnLoadMore} />);

    const cards = screen.getAllByTestId("mansory-card");
    expect(cards.length).toBe(mockPhotos.length);
  });

  test("renders only 5 visible images when `photos` is provided", () => {
    const totalInView = 5;
    for (let i = 0; i < totalInView; i++) {
      mockUseInView.mockReturnValueOnce([{ current: null }, true]);
    }
    mockUseInView.mockReturnValue([{ current: null }, false]);

    render(<Mansory photos={mockPhotos} onLoadMore={mockOnLoadMore} />);

    const cards = screen.getAllByTestId("mansory-card");
    const images = screen.getAllByRole("img");

    expect(cards.length).toBe(mockPhotos.length);
    expect(images.length).toBe(totalInView);
  });

  test("renders `LoadMore` button when `hasMorePages` is true and `isLoading` is false", () => {
    render(
      <Mansory
        photos={mockPhotos}
        onLoadMore={mockOnLoadMore}
        isLoading={false}
        hasMorePages={true}
      />
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("does not render `LoadMore` when `isLoading` is true", () => {
    render(
      <Mansory
        photos={mockPhotos}
        onLoadMore={mockOnLoadMore}
        hasMorePages={true}
        isLoading={true}
      />
    );

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
