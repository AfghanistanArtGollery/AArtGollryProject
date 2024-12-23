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
import Image from "next/image";

const Card = ({_id,title,excerpt,img}) => {
  return (

    <div className="container">
    <Link href={`/blog/${_id} `} className={styles.post_link} title={title}>
      <div className={styles.img_cover} style={{background: "url(&quot;https://kreezalid.s3.eu-central-1.amazonaws.com/artgallery/articles/1000x1000_utsonapakicsi_a0aqq_1553679557.jpg&quot;) 50% 50% / cover no-repeat;"}}>
        <Image width={500} height={500} className={styles.hidden} src={img}  alt="Art with a Message" />
      </div>
    <h4 className={styles.postTitle}><span>{title}</span></h4>
    <p className={styles.postSummary}>{excerpt} ...</p>
    </Link>


    </div>

  );
};

export default Card;
