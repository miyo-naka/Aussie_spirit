import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between h-12 leading-12 bg-amber-900 sticky top-0">
      <div className="ml-2.5 text-3xl text-white no-underline">
        <p className="font-hurricane">Aussie Spirit</p>
      </div>
      <nav>
        <ul className="flex items-center space-x-6 mr-6 text-white">
          <li>
            <Link href="/australia">Aussie Life</Link>
          </li>
          <li>
            <Link href="/english">English</Link>
          </li>
          <li>
            <Link href="/parenting">Parenting</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
