import Header from "@/components/layout/Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("render the header", () => {
    render(<Header />);

    const header = screen.getByText("swiftcar");

    expect(header).toBeInTheDocument();
  });
});
