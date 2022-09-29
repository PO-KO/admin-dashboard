import "./navbar.scss";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { BiMessageSquare } from "react-icons/bi";
import {
  MdOutlineLanguage,
  MdOutlineDarkMode,
  MdFullscreenExit,
  MdNotificationsNone,
  MdList,
} from "react-icons/md";

const icons = [
  { icon: <MdOutlineLanguage />, lang: "English" },
  { icon: <MdOutlineDarkMode /> },
  { icon: <MdFullscreenExit /> },
  { icon: <MdNotificationsNone />, hasNotification: true },
  { icon: <BiMessageSquare />, hasNotification: true },
  { icon: <MdList /> },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="logo">Logo</section>
      <section className="search-box">
        <input className="search-input" type="search" placeholder="Search..." />
        <AiOutlineSearch className="search-icon" />
      </section>
      <ul className="navbar-buttons">
        {icons.map(({ icon, lang, hasNotification }, index) => (
          <li className="navbar-btn" key={index}>
            {icon}
            {lang && <span>{lang}</span>}
            {hasNotification && <span className="notifiction" />}
          </li>
        ))}
        <li className="navbar-avatar"></li>
        <li className="navbar-btn">
          <AiOutlineSetting />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
