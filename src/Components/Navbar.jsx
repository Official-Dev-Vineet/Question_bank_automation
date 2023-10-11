import "../styles/Navbar.css";
import { Button, ButtonToolbar } from "rsuite";
import { VscDebugStart } from "react-icons/vsc";
import { BiLogIn } from "react-icons/bi";
import { SearchInput } from "../Utils/Input";
import { Logo } from "../Utils/Logo";
import { Link, NavLink } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { useContext, useState } from "react";
import { UserContext } from "../Constant/UserContext";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { userData } = useContext(UserContext);
  return (
    <nav
      className="flex gap-2xl justify-between relative align-center pad-x-y"
      style={{ "--y": 2 }}
    >
      <Logo />
      <div className="menu-icon pointer" onClick={() => setIsActive(!isActive)}>
        <CiMenuKebab />
      </div>
      <div
        className={`group flex w-full justify-between  ${isActive ? "active" : ""
          }`}
      >
        <ul className="navLinks flex align-center  gap-md mr">
          <li onClick={() => setIsActive(false)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className="relative"
            onClick={() => setIsActive(false)}
          >
            <NavLink to="/test-series">Popular Exam</NavLink>
          </li>
          <li
            className="relative"
            onClick={() => setIsActive(false)}
          >
            <NavLink to="/admin">admin</NavLink>
          </li>
        </ul>
        <SearchInput type="search" />
        <ButtonToolbar className="flex flex-wrap ml">
          <Link
            to="/test-series"
            className="flex-grow-up"
            onClick={() => setIsActive(false)}
          >
            <Button
              appearance="primary"
              className="w-full"
              endIcon={<VscDebugStart />}
            >
              Take Test
            </Button>
          </Link>
          {
            userData.isLoggedIn ? (
              <Button appearance="ghost" className="flex-grow-up" endIcon={<BiLogIn />} onClick={() => setIsActive(false)} href={`/student`}>
                Student
              </Button>
            ) :
              <Button appearance="ghost" className="flex-grow-up" endIcon={<BiLogIn />} onClick={() => setIsActive(false)} href="/login">
                Login
              </Button>
          }
        </ButtonToolbar>
      </div>
    </nav>
  );
};
