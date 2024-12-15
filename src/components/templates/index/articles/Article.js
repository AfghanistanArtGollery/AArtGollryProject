import { MdOutlineSms } from "react-icons/md";
import styles from "./article.module.css"
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Card = () => {
  return (

    <div className="container">
    <a href="/blog/18305-art-with-a-message" className={styles.post_link} title="Art with a Message">
      <div className={styles.img_cover} style={{background: "url(&quot;https://kreezalid.s3.eu-central-1.amazonaws.com/artgallery/articles/1000x1000_utsonapakicsi_a0aqq_1553679557.jpg&quot;) 50% 50% / cover no-repeat;"}}>
        <img className={styles.hidden} src="https://cdn.kreezalid.com/kreezalid/artgallery/articles/300x300_1000x1000_utsonapakicsi_a0aqq_1553679557.jpg" title="Art with a Message" alt="Art with a Message" />
      </div>
    <h4 className={styles.postTitle}><span>Art with a Message</span></h4>
    <p className={styles.postSummary}>The images in this blog may not make you feel comfortable - but ...</p>
    </a>


    </div>

  );
};

export default Card;
