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
  {
    id: "delorean-dmc-12",
    name: "DeLorean DMC-12",
    manufacturer: "DeLorean Motor Company",
    productionYear: "1981-1983",
    engine: "2.85L V6",
    horsepower: 130,
    topSpeed: "177 km/h",
    image: "delorean-dmc-12.png",
    description:
      "O DeLorean DMC-12 é um carro esportivo icônico dos anos 80, famoso por suas portas 'asa de gaivota' e aparição na trilogia 'De Volta para o Futuro'.",
    price: 70000,
  },
  {
    id: "porsche-911-turbo-930",
    name: "Porsche 911 Turbo (930)",
    manufacturer: "Porsche",
    productionYear: "1975-1989",
    engine: "3.0L - 3.3L Turbocharged Flat-6",
    horsepower: 260 - 330,
    topSpeed: "250 - 270 km/h",
    image: "porsche-911-turbo-930.png",
    description:
      "O Porsche 911 Turbo (930) é um carro esportivo clássico alemão, conhecido por seu desempenho potente e design icônico.",
    price: 150000,
  },
  {
    id: "nissan-300zx-z31",
    name: "Nissan 300ZX Z31",
    manufacturer: "Nissan",
    productionYear: "1983-1989",
    engine: "3.0L V6",
    horsepower: 160 - 200,
    topSpeed: "220 - 240 km/h",
    image: "nissan-300zx-z31.png",
    description:
      "O Nissan 300ZX Z31 é um carro esportivo japonês dos anos 80, conhecido por seu design elegante e desempenho potente.",
    price: 30000,
  },
  {
    id: "maserati-biturbo",
    name: "Maserati Biturbo",
    manufacturer: "Maserati",
    productionYear: "1981–1994",
    engine: "2.0L - 2.8L V6 Twin-Turbo",
    horsepower: 180 - 285,
    topSpeed: "215 - 256 km/h",
    image: "maserati-biturbo.png",
    description:
      "O Maserati Biturbo é um carro executivo de luxo produzido pela montadora italiana Maserati entre 1981 e 1994. Foi o primeiro carro de produção em massa a usar dois turbocompressores, daí o nome Biturbo.",
    price: 35000,
  },
];
