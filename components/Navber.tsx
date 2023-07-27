import Link from "next/link";
import Button from "./Button";

const Navber = () => {
  return (
    <header className=" h-20 fixed top-0 left-0 right-0  bg-light/90 backdrop-blur-lg border-b border-dark-10 z-[100]">
      <div className="wrapper w-full h-full  flex justify-between items-center">
        <nav className="nav-left">
          <Link href={"/"} className="text-xl font-semibold link-item">
            Pen Mart
          </Link>
        </nav>
        <nav className="nav-mid">
          <ul className="flex gap-5">
            <li>
              <Link href={"/"} className="link-item">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link href={"/products"} className="link-item">
                Products
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="link-item">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link href={"/contact"} className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="nab-right">
          <Button href="/login" placeholder="Login" />
        </nav>
      </div>
    </header>
  );
};

export default Navber;
