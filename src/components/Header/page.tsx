import Link from "next/link";

export function Header() {
  return (
    <header className="text-center sticky top-0">
      <div className="bg-amber-50 ">
        <Link
          href="/"
          className="text-8xl/tight no-underline mt-16 font-hurricane font-bold"
        >
          Aussie Spirit
        </Link>
      </div>
      <nav className="bg-amber-900 h-12">
        <ul className="w-full flex justify-center item-center space-x-8  text-white p-2.5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/AussieLife">Aussie Life</Link>
          </li>
          <li>
            <Link href="/English">English</Link>
          </li>
          <li>
            <Link href="/Parenting">Parenting</Link>
          </li>
          <li>
            <Link href="/About">About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
