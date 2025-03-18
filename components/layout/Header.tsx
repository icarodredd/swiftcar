import Link from "next/link";
import Image from "next/image";
import customerIcon from "@/assets/icons/Customer.png";
import searchIcon from "@/assets/icons/Search.png";
import shoppingIcon from "@/assets/icons/ShoppingCart.png";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-4">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
          swiftcar
        </h1>
        <div className="flex invisible lg:gap-12 lg:visible">
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
          <Button id="search" size={"icon"} variant="ghost">
            <Image src={searchIcon} alt="Search Icon" />
          </Button>
          <Button id="cart" size={"icon"} variant="ghost">
            <Image src={shoppingIcon} alt="Cart Icon" />
          </Button>
          <Button id="customer" size={"icon"} variant="ghost">
            <Image src={customerIcon} alt="Customer Icon" />
          </Button>
        </div>
      </header>
      <hr />
    </>
  );
}
