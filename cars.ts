export type ClassicCars = {
  id: string;
  name: string;
  manufacturer: string;
  productionYear: string;
  engine: string;
  horsepower: number;
  topSpeed: string;
  image: string;
  description: string;
  price: number;
  banner?: string;
}[];

export const classicCars: ClassicCars = [
  {
    id: "volvo-p1800",
    name: "Volvo P1800",
    manufacturer: "Volvo Cars",
    productionYear: "1961–1973",
    engine: "1.8L - 2.0L 4-cylinder",
    horsepower: 108 - 130,
    topSpeed: "170 - 190 km/h",
    image: "volvo-p1800.png",
    description:
      "O Volvo P1800 é um carro esportivo de turismo 2+2, famoso por sua aparição na série de televisão 'O Santo'.",
    price: 45000,
    banner: "volvo-p1800-banner.png",
  },
  {
    id: "citroen-ds",
    name: "Citroën DS",
    manufacturer: "Citroën",
    productionYear: "1955–1975",
    engine: "1.9L - 2.3L 4-cylinder",
    horsepower: 75 - 141,
    topSpeed: "185 km/h",
    image: "citroen-ds.png",
    description:
      "O Citroën DS é um ícone francês conhecido pelo design futurista e pela suspensão hidropneumática inovadora.",
    price: 80000,
    banner: "citroen-ds-banner.png",
  },
  {
    id: "opel-commodore-b",
    name: "Opel Commodore B",
    manufacturer: "Opel",
    productionYear: "1972–1977",
    engine: "2.5L - 3.0L 6-cylinder",
    horsepower: 115 - 160,
    topSpeed: "190 km/h",
    image: "opel-commodore.png",
    description:
      "O Opel Commodore B é um sedã esportivo alemão dos anos 70, combinando potência e conforto.",
    price: 35000,
    banner: "opel-commodore-banner.png",
  },
  {
    id: "ford-model-a",
    name: "Ford Model A",
    manufacturer: "Ford",
    productionYear: "1927–1931",
    engine: "3.3L 4-cylinder",
    horsepower: 40,
    topSpeed: "105 km/h",
    image: "ford-modelo-a.png",
    description:
      "O Ford Model A foi o segundo grande sucesso da Ford, um carro popular e acessível em sua época.",
    price: 28000,
  },
  {
    id: "buick-roadmaster-riviera",
    name: "Buick Roadmaster Riviera Hardtop",
    manufacturer: "Buick",
    productionYear: "1954",
    engine: "5.3L V8",
    horsepower: 200,
    topSpeed: "175 km/h",
    image: "buick-roadmaster.png",
    description:
      "O Buick Roadmaster Riviera Hardtop de 1954 é um carro clássico americano com um design elegante e luxuoso.",
    price: 60000,
  },
  {
    id: "chevrolet-bel-air",
    name: "Chevrolet Bel Air",
    manufacturer: "Chevrolet",
    productionYear: "1955",
    engine: "3.9L - 4.3L V8",
    horsepower: 162 - 180,
    topSpeed: "180 km/h",
    image: "chevrolet-bel-air.png",
    description:
      "O Chevrolet Bel Air de 1955 é um carro clássico americano icônico, conhecido por seu design elegante e desempenho potente.",
    price: 55000,
  },
];
