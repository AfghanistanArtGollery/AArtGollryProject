import styles from "./footer.module.css";
import { MdOutlineCopyright } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosReorder } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Article from "./Article";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <main className="container">
        <section className={styles.descriptions}>
          <p className={styles.descriptions_title}>
            Afghanistan  Artwork Gallery, Your Online Art Store
          </p>

          <div className={styles.description}>
            <p>
            <CiLocationOn  size={20} />
            
            house 12 karte 3 kabul afghanistan
            </p>
           
          </div>
          <div className={styles.description}>
            <p>

            <IoIosReorder size={20} />
            Order Tracking: 02188305827
            </p>
          </div>
          <div className={styles.description}>
          
            <p>   <MdOutlineEmail size={20} />afgartgollery@info.com</p>
          </div>
        </section>

       

        <ul className={styles.links}>
          <div>
            <h4>Footer Menu</h4>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link href={"/rules"}>Terms & Conditions</Link>
            </li>
            <li>
              <Link href={"/artist"}>Atists & Developers</Link>
            </li>
          </div>

          <div>
            <h4>Quick Access</h4>
            <li>
              <Link href={"/listings"}>Art Gallery</Link>
            </li>
            <li>
              <Link href={"/articles"}>Articles</Link>
            </li>
            <li>
              <Link href={"/cart"}>Shopping Cart</Link>
            </li>
            <li>
              <Link href={"/wishlist"}>Wishlist</Link>
            </li>
          </div>
        </ul>
       



        <div className={styles.licenses}>

          <Image src="/images/logoart.png" width={400} height={250} alt="License 4" />
       
        </div>
      </main>

      <hr />
      <div className="container">
        <p className={styles.copyRight}>
          2025 <MdOutlineCopyright /> All Rights Reserved by <strong>Afghanistan Art Gollery</strong> | Designed & Developed by <strong>AsadShahi & Express Creative</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
