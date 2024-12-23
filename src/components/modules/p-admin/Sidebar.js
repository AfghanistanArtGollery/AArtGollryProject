"use client";
import styles from "./sidebar.module.css";
import { ImReply } from "react-icons/im";
import { IoAddSharp } from "react-icons/io5";

import { FaOpencart,FaComments, FaHeart,FaPhoneAlt, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdSms, MdLogout } from "react-icons/md";
import { PiArticleNyTimesLight } from "react-icons/pi";
import Link from "next/link";
import swal from "sweetalert";


const Sidebar = () => {
 


  const logoutHandler = () => {
    swal({
      title: "Are you sure you want to log out?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch('/api/auth/signout', {
          method: "POST",
        });

        if (res.status == 200) {
          swal({
            title: "You have successfully logged out",
            icon: "warning",
            buttons: ["No", "Yes"],
          }).then(() => {
            // router.replace('/');
          });
        }
      }
    });
  };

  return (
    <aside  className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <p>Welcome, Shahi!</p>
      </div>
      <ul style={{marginTop:"2px"}} className={styles.sidebar_main}>
      
          <>
            <Link href={"/p-admin"} className={styles.sidebar_link_active}>
              <ImReply />
              Dashboard
            </Link>
          
            <Link href={"/p-admin/products"}>
            
          
            <IoAddSharp size={25} />
              AddArwork
            </Link>

            <Link href={"/p-admin/artworks"}>
            <FaOpencart size={25} /> 
              ArtArworkLists
            </Link>

            <Link href={"/p-admin/orders"}>
              <FaShoppingBag size={20}/>
              Orders(Customer)
            </Link>
            <Link href={" /p-admin/blog/articlepost"}>
            <PiArticleNyTimesLight />
              Add Article
            </Link>
        
            <Link href={"/p-admin/users"}>
              <FaUsers />
              Users
            </Link>
            <Link href={"/p-admin/comments"}>
              <FaComments />
              Comments
            </Link>

            <Link href={"/p-admin/tickets"}>
              <MdSms />
              Tickets
            </Link>
            <Link href={"/p-admin/discounts"}>
              <MdOutlineAttachMoney />
              Discounts
            </Link>
            <Link href={"/p-admin/contact"}>
            <FaPhoneAlt size={20} />
              Contact
            </Link>
          </>
       
      </ul>
      <div className={styles.logout} onClick={logoutHandler}>
        <MdLogout />
        Log Out
      </div>
    </aside>
  );
};

export default Sidebar;
