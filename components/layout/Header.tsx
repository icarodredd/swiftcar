import Link from "next/link";
import Image from "next/image";
import customerIcon from "@/icons/Customer.png";
import searchIcon from "@/icons/Search.png";
import shoppingIcon from "@/icons/ShoppingCart.png";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-4">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl">
          swiftcar
        </h1>
        <div className="flex gap-12">
          <Link href={"/"} className="text-sm font-medium leading-none">
            Antigos
          </Link>
          <Link href={"/"} className="text-sm font-medium leading-none">
            Todos
          </Link>
          <Link href={"/"} className="text-sm font-medium leading-none">
            Mais Vendidos
          </Link>
        </div>
        <div className="flex">
          <Button id="search" size={"sm"} variant="ghost">
            <Image src={searchIcon} alt="Search Icon" />
          </Button>
          <Button id="cart" size={"sm"} variant="ghost">
            <Image src={shoppingIcon} alt="Cart Icon" />
          </Button>
          <Button id="customer" size={"sm"} variant="ghost">
            <Image src={customerIcon} alt="Customer Icon" />
          </Button>
        </div>
      </header>
      <hr />
    </>
  );
}
