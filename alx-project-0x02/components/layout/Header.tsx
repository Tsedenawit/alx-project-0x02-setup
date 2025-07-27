import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <header>
      <h1>My Application Header</h1>
      <nav>
        <div className="font-bold text-xl">MyApp</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/home"
              className={`hover:underline ${
                isActive("/home") ? "font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:underline ${
                isActive("/about") ? "font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={`hover:underline ${
                isActive("/post") ? "font-bold" : ""
              }`}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={`hover:underline ${
                isActive("/user") ? "font-bold" : ""
              }`}
            >
              User
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
