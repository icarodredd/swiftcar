/* eslint-disable @next/next/no-img-element */

import Home from "@/app/page";
import { carsForSale } from "@/cars";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { StaticImageData } from "next/image";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} data-testid="image" />
  ),
}));

jest.mock("../components/EmblaCarousel", () => ({
  __esModule: true,
  default: ({ slides }: { slides: StaticImageData[] }) => (
    <div data-testid="carousel">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={`Slide ${index}`}
          data-testid="embla-slide"
        />
      ))}
    </div>
  ),
}));

jest.mock("../components/ui/carousel", () => ({
  __esModule: true,
  Carousel: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  CarouselContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  CarouselItem: ({ children }: { children: React.ReactNode }) => (
    <div className="carousel-item">{children}</div>
  ),
}));

describe("Home", () => {
  it("should render the top carousel", () => {
    const { container } = render(<Home />);

    const topCarousel = container.querySelector("#carousel-top");

    const slides = topCarousel?.querySelectorAll('[data-testid="embla-slide"]');

    expect(slides).toHaveLength(3);
  });

  it("should render the section of most selled cars", () => {
    const { container } = render(<Home />);

    expect(screen.getByText("MAIS VENDIDOS")).toBeInTheDocument();

    const bestSellersCarousel = container.querySelector(
      "#best-sellers-carousel"
    );

    const bestSellersSlides =
      bestSellersCarousel?.querySelectorAll(".carousel-item");

    expect(bestSellersSlides).toHaveLength(5);

    for (let i = 0; i < 5; i++) {
      const car = carsForSale.bestSellers[i];
      expect(bestSellersSlides?.[i].textContent).toContain(
        car.name &&
          car.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
      );
    }
  });

  it("should render the section of recently added cars", () => {
    const { container } = render(<Home />);

    const recentlyAddedCarousel = container.querySelector(
      "#recently-added-carousel"
    );

    const recentlyAddedSlides =
      recentlyAddedCarousel?.querySelectorAll(".carousel-item");

    expect(recentlyAddedSlides).toHaveLength(5);

    for (let i = 0; i < 5; i++) {
      const car = carsForSale.recentlyAdded[i];
      expect(recentlyAddedSlides?.[i].textContent).toContain(
        car.name &&
          car.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
      );
    }
  });

  it("should render the bottom carousel", () => {
    const { container } = render(<Home />);

    const bottomCarousel = container.querySelector("#carousel-bottom");

    const bottomSlides = bottomCarousel?.querySelectorAll(
      '[data-testid="embla-slide"]'
    );

    expect(bottomSlides).toHaveLength(2);
  });
});
