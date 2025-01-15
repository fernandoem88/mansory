import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SearchFilter } from "..";

const mockAlert = jest.fn();
global.alert = mockAlert;

describe("SearchFilter Component", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calls onChange with the search value when submitting a new search term", async () => {
    render(<SearchFilter search="Nature" onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText("Nature / Technology / ...");
    const button = screen.getByRole("button", { name: /search/i });

    fireEvent.change(input, { target: { value: "technology" } }); // Simulate typing
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith("technology");
    });
  });

  test("alerts when no search value is entered", () => {
    render(<SearchFilter search="Nature" onChange={mockOnChange} />);

    const button = screen.getByRole("button", { name: /search/i });

    fireEvent.click(button);

    expect(mockAlert).toHaveBeenCalledWith("please enter some value");
  });

  test("alerts when submitting the same search value", () => {
    render(<SearchFilter search="Nature" onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText("Nature / Technology / ...");
    const button = screen.getByRole("button", { name: /search/i });

    fireEvent.change(input, { target: { value: "nature" } });
    fireEvent.click(button);

    expect(mockAlert).toHaveBeenCalledWith("search value did not change");
    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
