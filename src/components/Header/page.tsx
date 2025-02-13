import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between h-12 leading-12 bg-amber-900 sticky top-0">
      <div className="ml-2.5 text-3xl text-white no-underline">
        <p>
          <Link href="/" className="font-hurricane">
            Aussie Spirit
          </Link>
        </p>
      </div>
      <nav>
        <ul className="flex items-center space-x-6 mr-6 text-white">
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
