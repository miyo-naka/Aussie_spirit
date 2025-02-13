export function Header() {
  return (
    <header className="flex items-center justify-between h-12 leading-12 bg-amber-900 sticky top-0">
      <div className="ml-2.5 text-3xl text-white no-underline">
        <p className="font-hurricane">Aussie Spirit</p>
      </div>
      <nav>
        <ul className="flex items-center space-x-6 mr-6 text-white">
          <li>
            <a href="./australia.html">Aussie Life</a>
          </li>
          <li>
            <a href="">English</a>
          </li>
          <li>
            <a href="">Parenting</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
