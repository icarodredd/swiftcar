"use client";

import citroenImage from "@/assets/banners/citroen-ds-banner.png";
import bristolImage from "@/assets/banners/volvo-p1800-banner.png";
import opelImage from "@/assets/banners/opel-commodore-banner.png";
import buyYourCar from "@/assets/banners/buy-your-car-banner.png";
import economybanner from "@/assets/banners/economy-banner.png";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/EmblaCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { carsForSale } from "@/cars";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDESTOP = [citroenImage, bristolImage, opelImage];
const SLIDESBOTTOM = [buyYourCar, economybanner];

export default function Home() {
  return (
    <main className="p-4">
      <section id="carousel-top" className="rounded-xl">
        <EmblaCarousel slides={SLIDESTOP} options={OPTIONS} />
      </section>

      <div className="text-lg font-bold mb-4">MAIS VENDIDOS</div>

      <div id="best-sellers-carousel">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {carsForSale.bestSellers.map((car) => (
              <CarouselItem
                key={car.id}
                className="md:basis-1/2 lg:basis-1/4 mb-10 rounded-2xl"
              >
                <div className="relative shadow-lg rounded-2xl">
                  <Image
                    src={`/${car.image}`}
                    alt=""
                    className="rounded-2xl"
                    width={700}
                    height={700}
                  />

                  <div className="text-center h-2/8 absolute inset-x-0 bottom-0 bg-swift-white rounded-b-2xl">
                    <div className="font-extrabold mt-4">{car.name}</div>
                    <div>
                      {car.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="text-lg font-bold mb-4">ADICIONADOS RECENTEMENTE</div>

      <div id="recently-added-carousel">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {carsForSale.recentlyAdded.map((car) => (
              <CarouselItem
                key={car.id}
                className="md:basis-1/2 lg:basis-1/4 mb-10 rounded-2xl"
              >
                <div className="relative shadow-lg rounded-2xl">
                  <Image
                    src={`/${car.image}`}
                    alt=""
                    className="rounded-2xl"
                    width={700}
                    height={700}
                  />

                  <div className="text-center h-2/8 absolute inset-x-0 bottom-0 bg-swift-white rounded-b-2xl">
                    <div className="font-extrabold mt-4">{car.name}</div>
                    <div>
                      {car.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <section id="carousel-bottom" className="rounded-xl">
        <EmblaCarousel slides={SLIDESBOTTOM} options={OPTIONS} />
      </section>
    </main>
  );
}
