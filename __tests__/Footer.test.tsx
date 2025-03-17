import Footer from "@/components/layout/Footer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Footer", () => {
  it("should renders the footer", () => {
    render(<Footer />);

    const footer = screen.getByText(
      /© 2024 | swiftcar | Todos os direitos reservados./i
    );

    expect(footer).toBeInTheDocument();
  });

  it("should render the links for 'Termos de Serviço' and 'Privacidade'", () => {
    render(<Footer />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);

    expect(links[0]).toHaveTextContent("Privacidade");
    expect(links[1]).toHaveTextContent("Termos de Serviço");
  });

  it("should redirect to 'Termos de Serviço' and 'Privacidade' pages", () => {
    render(<Footer />);

    const links = screen.getAllByRole("link");

    expect(links[0]).toHaveAttribute("href", "/privacidade");

    userEvent.click(links[1]);
    expect(links[1]).toHaveAttribute("href", "/termos-de-servico");
  });
});
