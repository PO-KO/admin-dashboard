import { LastIncome, TotalRevenue, Widget } from "../../components";
import "./home.scss";
import { HiOutlineUsers, HiOutlineShoppingCart } from "react-icons/hi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const widgets = [
  { title: "users", change: -2, data: 720, icon: <HiOutlineUsers /> },
  { title: "orders", change: 2, data: 260, icon: <HiOutlineShoppingCart /> },
  {
    title: "earnings",
    change: 12,
    price: 4.6,
    icon: <RiMoneyDollarCircleLine />,
  },
  {
    title: "my balance",
    change: 5,
    price: 7.8,
    icon: <MdOutlineAccountBalanceWallet />,
  },
];

const Home = () => {
  return (
    <div className="home">
      <section className="wrapper">
        <div className="top">
          {widgets.map((item, index) => (
            <Widget {...item} key={index} />
          ))}
        </div>
        <div className="center">
          <TotalRevenue />
          <LastIncome />
        </div>
      </section>
    </div>
  );
};

export default Home;
