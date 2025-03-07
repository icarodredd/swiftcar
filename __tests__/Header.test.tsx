import Header from "@/components/layout/Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("renders the header", () => {
    render(<Header />);

    const header = screen.getByText("swiftcar");

    expect(header).toBeInTheDocument();
  });

  it("renders the links for 'Antigos', 'Todos', 'Mais Vendidos'", () => {
    render(<Header />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(3);

    expect(links[0]).toHaveTextContent("Antigos");
    expect(links[1]).toHaveTextContent("Todos");
    expect(links[2]).toHaveTextContent("Mais Vendidos");
  });

  it("renders the buttons for 'Search', Cart', 'Customer' Icons", () => {
    render(<Header />);

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(3);

    expect(buttons[0]).toHaveAttribute("id", "search")
    expect(buttons[1]).toHaveAttribute("id", "cart")
    expect(buttons[2]).toHaveAttribute("id", "customer")
  });
});
