import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  return (
    <nav className="w-full h-[10vh] bg-background-secondary flex items-center px-2 s2:px-4 relative">
      <div className="img-hover hover:img-hover-active">
        <img src="" alt="" className="w-10 h-10 rounded-cercle" />
      </div>
      <button
        className="hidden s1:block ml-auto"
        onClick={() => setshowNav((curr) => !curr)}
      >
        click
      </button>
      <ul
        className={`flex items-center ml-auto capitalize overflow-hidden duration-500 
                    s1:absolute bottom-0 s1:block s1:translate-y-full s1:w-[300px] border-l-accent-cyan right-0 bg-background-secondary
                     ${
                       showNav
                         ? "s1:h-[90vh] s1:pt-[20vh] s1:border-l "
                         : "s1:h-0 "
                     }`}
      >
        <li className="ml-10 s1:pl-0 s1:h-10 flex items-center ">
          <Link
            to={"/aboutMe"}
            className="cursor-pointer duration-300 hover:text-highlight-link"
            onClick={() => setshowNav((curr) => !curr)}
          >
            who am i?
          </Link>
        </li>
        <li className="ml-10 s1:pl-0 s1:h-10 flex items-center ">
          <Link
            to={"/projects"}
            className="cursor-pointer duration-300 hover:text-highlight-link"
            onClick={() => setshowNav((curr) => !curr)}
          >
            projects
          </Link>
        </li>
        <li className="ml-10 s1:pl-0 s1:h-10 flex items-center ">
          <Link
            to={"/nothing"}
            className="cursor-pointer duration-300 hover:text-highlight-link"
            onClick={() => setshowNav((curr) => !curr)}
          >
            nothing
          </Link>
        </li>
        <li className="ml-10 s1:pl-0 s1:h-10 flex items-center ">
          <Link
            to={"/contact"}
            className="cursor-pointer duration-300 hover:text-highlight-link"
            onClick={() => setshowNav((curr) => !curr)}
          >
            contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
