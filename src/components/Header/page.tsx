import Link from "next/link";

export function Header() {
  const categories = ["AussieLife", "English", "Parenting"];

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
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/${category}`}>{category}</Link>
            </li>
          ))}
          <li>
            <Link href="/About">About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
