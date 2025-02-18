import Link from "next/link";
import { HumbergerMenu } from "../HumbergerMenu.tsx/page";

export function Header() {
  const categories = ["AussieLife", "English", "Parenting"];

  return (
    <header className="text-center sticky top-0 z-50 shadow-md">
      <div className="bg-amber-50 ">
        <Link
          href="/"
          className="text-4xl/tight md:text-8xl/tight no-underline mt-16 font-hurricane font-bold"
        >
          Aussie Spirit
        </Link>
        <HumbergerMenu />
      </div>

      <nav className="hidden md:block bg-amber-900 h-12">
        <ul className="w-full flex justify-center space-x-10 text-white p-3">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/${category}`}
                className="hover:text-yellow-400 transition duration-200"
              >
                {category}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/About"
              className="hover:text-yellow-400 transition duration-200"
            >
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
