"use client";

import { useState } from "react";
import styles from "./topbar.module.css";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import Modal from "./Modal";

import { GiHamburgerMenu } from 'react-icons/gi'; // Import burger menu icon

const Topbar = ({ onToggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);

  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.profile}>
          <div>
            <p>Asadshahi</p>
            <span>Admin</span>
          </div>
          <img src="/images/shahin.jpg" alt="Profile" />
        </div>
        <section>
        <div
            onClick={() => setShowNotifications(true)}
            className={styles.notification}
          >
            <IoIosNotifications />
            <span>0

            </span>
          </div>

          <button onClick={onToggleSidebar} className={styles.toggle_button} >
            <GiHamburgerMenu />Menu
          </button>

        

        </section>
      </div>

      {showNotifications && (
        <div>
          <div
            onClick={() => setShowNotifications(false)}
            className={styles.notifications_overlay}
          ></div>
          <section className={styles.notifications_box}>
            <div>
              <p
                onClick={() => {
                  setShowNotifications(false);
                  setShowModal(true);
                }}
              >
                Hello Admin
              </p>
              <button onClick={() => setShowNotifications(false)}>Got it</button>
            </div>
            <div>
              <p
                onClick={() => {
                  setShowNotifications(false);
                  setShowModal(true);
                }}
              >
                Hello Admin
              </p>
              <button onClick={() => setShowNotifications(false)}>Got it</button>
            </div>

            {/* If there are no notifications, we show: */}
            {/* <div>
              <span>No messages available</span>
              <IoClose onClick={() => setShowNotifications(false)}/>
            </div> */}
          </section>
        </div>
      )}

      {showModal && (
        <Modal title="Support Unit" hideModal={hideModal}>
          <p className={styles.modal_text}>You're awesome, dear Admin</p>
        </Modal>
      )}
      {/* Pass state and toggle function to Sidebar */}
    </>
  );
};

export default Topbar;
