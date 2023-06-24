import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-around my-4">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>

      <div className="flex gap-8 justify-between">
        <Link className="hover:opacity-50" href={"/"}>
          Home
        </Link>
        <Link className="hover:opacity-50" href={"/about"}>
          About
        </Link>
        <Link className="hover:opacity-50" href={"/categories"}>
          Categories
        </Link>
        <Link className="hover:opacity-50" href={"/services"}>
          Services
        </Link>
        <Link className="hover:opacity-50" href={"/contact"}>
          Contact
        </Link>
        <Link className="mx-8 hover:opacity-50" href={"/sign-up"}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
