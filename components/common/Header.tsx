import Link from "next/link";

const Header = () => {

const hoverStyle = {
  hover : "hover:text-gray-50 hover:border-b-2 hover:border-gray-500"
}

  return (
    <nav className="flex justify-around items-center my-2 text-gray-900">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <div className="flex justify-between items-center gap-8 text-lg">
        <Link className={hoverStyle.hover} href={"/"}>
          Home
        </Link>
        <Link className={hoverStyle.hover} href={"/about"}>
          About
        </Link>
        <Link className={hoverStyle.hover} href={"/categories"}>
          Categories
        </Link>
        <Link className={hoverStyle.hover} href={"/services"}>
          Services
        </Link>
        <Link className={hoverStyle.hover} href={"/contact"}>
          Contact
        </Link>
          <Link className="bg-slate-100 px-4 py-2 rounded-md hover:text-gray-50 hover:bg-slate-500" href={"/sign-up"}>
            Sign Up / Login
          </Link>
      </div>
    </nav>
  );
};

export default Header;
