import styles from "./footer.module.css";
import { MdOutlineCopyright } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Article from "./Article";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <main className="container">
        <section className={styles.descriptions}>
          <img src="/images/logo_light.png" alt="Art Gallery Logo" />
          <p className={styles.descriptions_title}>
            Set Artwork Gallery, Your Online Art Store
          </p>

          <div className={styles.description}>
            <FaRegHeart style={{ fontSize: "2rem" }} />
            <p>
              Tehran, Sharifabad, Khwarazmi Industrial Town, Phase 2, Baharestan Blvd, Magnolia Street, Block A117
            </p>
          </div>
          <div className={styles.description}>
            <FaRegHeart />
            <p>Order Tracking: 02188305827</p>
          </div>
          <div className={styles.description}>
            <FaRegHeart />
            <p>support [at] set-artwork.com</p>
          </div>
        </section>

        <section>
          <h4>Latest Posts</h4>
          <Article
            href={"/article/123"}
            data="November 8, 2023"
            comments="No Comments"
            img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
            title="Boost Your Creativity with Artwork"
          />

          <hr />

          <Article
            href={"/article/123"}
            data="November 8, 2023"
            comments="No Comments"
            img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
            title="Boost Your Creativity with Artwork"
          />
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
          </div>
          <div>
            <h4>Quick Access</h4>
            <li>
              <Link href={"/category"}>Art Gallery</Link>
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
          <img src="/images/license4.htm" width={76} height={76} alt="License 4" />
          <img src="/images/license1.png" width={85} height={85} alt="License 1" />
          <img src="/images/license3.png" alt="License 3" />
          <img src="/images/license2.svg" width={62} height={95} alt="License 2" />
        </div>
      </main>
      <hr />
      <div className="container">
        <p className={styles.copyRight}>
          2023 <MdOutlineCopyright /> All Rights Reserved by <strong>Set Artwork</strong> | Designed & Developed by <strong>NilaMarketing</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
