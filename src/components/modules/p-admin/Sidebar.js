"use client";
import styles from "./sidebar.module.css";
import { ImReply } from "react-icons/im";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdSms, MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import swal from "sweetalert";
import { useRouter } from "next/router";

const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();

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
            router.replace('/');
          });
        }
      }
    });
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <p>Welcome, Shahi!</p>
      </div>
      <ul className={styles.sidebar_main}>
      
          <>
            <Link href={"/p-admin"} className={styles.sidebar_link_active}>
              <ImReply />
              Dashboard
            </Link>

            <Link href={"/p-admin/products"}>
              <FaShoppingBag />
              Products
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
