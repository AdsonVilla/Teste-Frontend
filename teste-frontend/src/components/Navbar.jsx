export function Navbar() {
  return (
    <nav className="bg-neutral-200 p-12">
      <div className="flex flex-row items-center justify-between">
        <div>
          <img src="/ALKABlog.svg" />
        </div>
        <div>
          <ul className="flex flex-row gap-6">
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Entre em contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
