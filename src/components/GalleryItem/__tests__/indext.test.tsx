import { render, screen } from "@testing-library/react";
import { useInView } from "@/hooks/useInView";
import { GalleryItem } from "..";
import { getDefaultPhotoSrc } from "@/lib/utils/getDefaultPhotoSrc";
import { mockPhoto } from "../constants/__mock__";

jest.mock("@/hooks/useInView", () => ({
  useInView: jest.fn(),
}));

const mockUseInView = useInView as jest.MockedFunction<typeof useInView>;

describe("GalleryItem", () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue([{ current: null }, true]);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the card component with the correct attributes", () => {
    render(<GalleryItem photo={mockPhoto} getContainerElement={() => null} />);

    const card = screen.getByTestId("mansory-card");
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute("data-inview", "true");

    const button = screen.getByRole("link", { name: mockPhoto.alt });
    expect(button).toHaveAttribute("href", `/photos/${mockPhoto.id}`);

    const img = screen.getByAltText(mockPhoto.alt);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", getDefaultPhotoSrc(mockPhoto.src));
    expect(img).toHaveAttribute("loading", "lazy");
    expect(img).toHaveAttribute("width", mockPhoto.width.toString());
    expect(img).toHaveAttribute("height", mockPhoto.height.toString());
  });

  it("does not render the image when not in view", () => {
    (useInView as jest.Mock).mockReturnValue([{ current: null }, false]);

    render(<GalleryItem photo={mockPhoto} getContainerElement={() => null} />);

    const card = screen.getByTestId("mansory-card");
    expect(card).toBeInTheDocument();
    expect(card).not.toHaveAttribute("data-inview");

    expect(screen.queryByAltText(mockPhoto.alt)).not.toBeInTheDocument();
  });
});
