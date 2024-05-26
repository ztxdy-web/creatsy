import { Link } from "react-router-dom";
import TextCreatsy from "@/assets/text-creatsy.svg";

const Navbar = () => {
  const menus = [
    { name: "About Us", to: "about-us" },
    { name: "Project", to: "project" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Template", to: "template" },
    { name: "Contact Us", to: "contact" },
  ];

  const displayMenu = () => {
    return menus.map((menu) => (
      <li>
        <Link className="text-lg hover:text-[#013047]" to={menu.to}>
          {menu.name}
        </Link>
      </li>
    ));
  };

  return (
    <div className="navbar shadow-md absolute">
      <div className="navbar-start lg:px-48 py-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {displayMenu()}
          </ul>
        </div>
        <img
          src={TextCreatsy}
          alt=""
          width="150px"
          className="hidden lg:block"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 flex justify-center gap-10">{displayMenu()}</ul>
      </div>
      <div className="navbar-end lg:px-48 py-2 justify-end">
        <a className="btn btn-accent rounded-full lg:px-8 btn-sm text-xs lg:font-bold text-white ">
          Konsultasi Sekarang
        </a>
      </div>
    </div>
  );
};

export default Navbar;
