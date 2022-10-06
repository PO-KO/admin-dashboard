import styles from "./totalRevenue.module.scss";
import { FiMoreVertical } from "react-icons/fi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const TotalRevenue = () => {
  return (
    <section className={styles.totalRevenue}>
      <div className={styles.top}>
        <h3 className={styles.title}>Total Revenue</h3>
        <FiMoreVertical className={styles.icon} />
      </div>
      <div className={styles.center}>
        <div className={styles.progressContainer}>
          <CircularProgressbar
            value={70}
            text="70%"
            strokeWidth={5}
            styles={buildStyles({
              textSize: 25,
            })}
          />
        </div>
        <h3 className={styles.title}>Total sales made today</h3>
        <span className={styles.income}>420$</span>
        <p className={styles.message}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi esse
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.stat}>
          <h3 className={styles.title}>Target</h3>
          <span className={styles.value}>$12.4k</span>
        </div>
        <div className={styles.stat}>
          <h3 className={styles.title}>Last week</h3>
          <span className={styles.value}>$12.4k</span>
        </div>
        <div className={styles.stat}>
          <h3 className={styles.title}>Last month</h3>
          <span className={styles.value}>$12.4k</span>
        </div>
      </div>
    </section>
  );
};

export default TotalRevenue;
