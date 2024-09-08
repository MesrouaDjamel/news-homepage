"use client"
import Image from "next/image";
import NavBar from "./navBar";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./NavLink";
import { usePathname } from "next/navigation";


const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const pathname = usePathname()
  return (
    <header className="flex w-full justify-between items-center  px-4 py-6 pb-14 xl:px-40   ">
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={65}
          height={40}
          className=""
        />
      </Link>

      <Image
        src={"/icon-menu.svg"}
        alt="Icon Menu"
        width={40}
        height={17}
        className="md:hidden cursor-pointer"
        onClick={() => setIsClicked(!isClicked)}
      />
      {isClicked && (
        <div className="md:hidden absolute top-0 right-0 bg-veryDarkBlue text-offWhite  z-10 w-[300px] h-full">
          <Image
            src={"/icon-menu-close.svg"}
            alt="Icon Menu"
            width={32}
            height={31}
            className="md:hidden cursor-pointer absolute top-6 right-6"
            onClick={() => setIsClicked(!isClicked)}
          />
          <ul className="  flex flex-col pl-8 pt-24  gap-6  ">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <span
                    className={`text-[18px] ${
                      pathname === link.path && "text-softRed"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <NavBar />
    </header>
  );
};

export default Header;
