import Link from "next/link";
import { HumbergerMenu } from "./humbergerMenu";

export function Header() {
  return (
    <header className="text-center sticky top-0 z-50 shadow-md">
      <div className="bg-[#A6C3B9] ">
        <Link
          href="/"
          className="text-6xl/tight md:text-8xl/tight no-underline my-10 font-hurricane font-bold"
        >
          Aussie Spirit
        </Link>
        <HumbergerMenu />
      </div>

      {/* ナビゲーションメニュー */}
      <nav className="flex hidden md:block bg-[#2C5D47] h-12">
        <ul className="w-full flex justify-center space-x-10 text-white p-3">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/story"
              className="hover:text-yellow-400 transition duration-200"
            >
              Story
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-yellow-400 transition duration-200"
            >
              Blog
            </Link>
          </li>
          {/* {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/${category}`}
                className="hover:text-yellow-400 transition duration-200"
              >
                {category}
              </Link>
            </li>
          ))} */}
          <li>
            <Link
              href="/AboutUs"
              className="hover:text-yellow-400 transition duration-200"
            >
              About us
            </Link>
          </li>

          <li>
            <Link
              href="/blog/20250526_atfirst"
              className="absolute right-8 pt-1 text-xs hover:text-yellow-400 transition duration-200 rounded-full bg-[#A6C3B9] px-3 py-1"
            >
              はじめての方はこちら
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
