import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="w-full bg-gray-200">
        <div className="container mx-auto py-4">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "hover:text-blue-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "hover:text-blue-500"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "hover:text-blue-500"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
