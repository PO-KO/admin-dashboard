import "./sidebar.scss";
import {
  MdDashboard,
  MdCreditCard,
  MdNotificationsNone,
  MdOutlineLogout,
} from "react-icons/md";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import { AiOutlineShop, AiTwotoneSetting } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const data = [
  {
    title: "MAIN",
    links: [{ icon: <MdDashboard />, text: "Dashboard" }],
  },
  {
    title: "LISTS",
    links: [
      { icon: <HiOutlineUsers />, text: "Users" },
      { icon: <AiOutlineShop />, text: "Products" },
      { icon: <MdCreditCard />, text: "Orders" },
      { icon: <FaTruck />, text: "Delivery" },
    ],
  },
  {
    title: "USEFUL",
    links: [
      { icon: <IoStatsChart />, text: "Stats" },
      { icon: <MdNotificationsNone />, text: "Notifictions" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { icon: <AiTwotoneSetting />, text: "System Health" },
      { icon: <AiTwotoneSetting />, text: "Logs" },
      { icon: <AiTwotoneSetting />, text: "Settings" },
    ],
  },
  {
    title: "USER",
    links: [
      { icon: <HiOutlineUser />, text: "Profile" },
      { icon: <MdOutlineLogout />, text: "Logout" },
    ],
  },
];
const Sidebar = () => {
  return (
    <aside className="sidebar">
      {data.map(({ title, links }, index) => (
        <section className="sidebar-box" key={index}>
          <h5 className="sidebar-title">{title}</h5>
          <ul className="sidebar-links">
            {links.map(({ icon, text }, index) => (
              <li key={index} className="sidebar-item">
                <NavLink className="sidebar-item-link">
                  {icon}
                  <span className="sidebar-item-text">{text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <section className="sidebar-box">
        <h5 className="sidebar-title">THEME</h5>
        <ul className="theme-control">
          <li className="theme-clr light active"></li>
          <li className="theme-clr dark"></li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
