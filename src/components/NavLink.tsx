"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
    { label: "Home", path: "/" },
    { label: "New", path: "/new" },
    { label: "Popular", path: "/popular" },
    { label: "Trending", path: "/trending" },
    { label: "Categories", path: "/categories" },
  ];
const NavLink = () => {
      const pathname = usePathname()
  return (
    <>
      <ul className="flex items-center gap-6 ">
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
    </>
  );
}

export default NavLink