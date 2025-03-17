import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-swift-black flex justify-between p-4">
      <small className="text-swift-white text-sm font-medium leading-none">
        © 2024 | swiftcar | Todos os direitos reservados.
      </small>

      <div className="flex gap-4">
        <Link
          className="text-swift-white text-sm font-medium leading-none"
          href={"/privacidade"}
        >
          Privacidade
        </Link>
        <Link
          className="text-swift-white text-sm font-medium leading-none"
          href={"/termos-de-servico"}
        >
          Termos de Serviço
        </Link>
      </div>
    </footer>
  );
}
