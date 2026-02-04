import { Link } from "react-router-dom";
import navitems from "../../lib/navitems";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-900/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold tracking-wide text-white">
          <img src="/vite.svg" alt="logo" />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navitems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="text-sm font-medium text-neutral-300 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden rounded-lg border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:inline-flex">
            Sign in
          </button>
          <button className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-primary/90">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
