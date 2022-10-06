import styles from "./widget.module.scss";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

import { Link } from "react-router-dom";

const Widget = ({ title, change, data, icon, price }) => {
  return (
    <section className={styles.widget}>
      <div className={styles.top}>
        <h3 className={styles.title}>{title}</h3>
        <span
          className={styles.change}
          style={{
            color: change >= 0 ? "hsl(123, 100%, 32%)" : "hsl(353, 86%, 54%)",
          }}
        >
          {change >= 0 ? <BiTrendingUp /> : <BiTrendingDown />} {change}%
        </span>
      </div>
      <div className={styles.center}>{data || `$${price}K`}</div>
      <div className={styles.bottom}>
        <Link to="#" className={styles.link}>
          See all users
        </Link>
        <span className={styles.iconHolder}>{icon}</span>
      </div>
    </section>
  );
};

export default Widget;
