import styles from "./topbar.module.css";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import { GiHamburgerMenu } from 'react-icons/gi'; // Import burger menu icon

const Topbar = ({onToggleSidebar}) => {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.profile}>
          <div>
            <p>AsadShahi</p>
            <span>Admin</span>
          </div>
          <img src="/images/shahin.jpg" alt="Profile" />
        </div>
        <section>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search..." />
            <div>
              <IoIosSearch />
            </div>
          </div>
          <div className={styles.notification}>
            <IoIosNotifications />
            <span>2</span>
          </div>
          <button onClick={onToggleSidebar} className={styles.toggle_button} >
            <GiHamburgerMenu />Menu
          </button>
        </section>
      </div>
    </>
  );
};

export default Topbar;
