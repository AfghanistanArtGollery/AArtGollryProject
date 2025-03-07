import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Artwork from "@/components/templates/p-user/whishlist/Product";

import connectToDB from "@/configs/db";
import styles from "@/styles/wishlist.module.css";

import { authUser } from "@/utils/AuthHelper";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

import modelWishlist from "@/models/Wishlist";

const page = async () => {

  let wishlist = [];
  connectToDB();
  const user = await authUser();

  if (user) {
    wishlist = await modelWishlist.find({ user: user._id }).populate('artWorkID').lean();
  }



  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route={"Wishlist"} />

      <main className={styles.container} data-aos="fade-up">

        <p className={styles.title}>Your Favorite Arts</p>

        <section>
          {wishlist.length > 0 &&
                             
            wishlist.map(wish => (
                <Artwork
                    key={wish._id}
                    artWorkID={String(wish.artWorkID._id)}
                    score={wish.artWorkID.score} 
                    name={wish.artWorkID.name} 
                    images={wish.artWorkID.images}
                    price={wish.artWorkID.price}  // Pass individual properties from wish.product
                />
            ))
          }
        </section>
      </main>

      {wishlist.length === 0 && (
        <div className={styles.wishlist_empty} data-aos="fade-up">
          <FaRegHeart />
          <p>No Artwork found</p>
          <span>You currently have no Art work in your wishlist.</span>
          <span>You will find many interesting arts in the "Store" page.</span>
          <div>
            <Link href="/category">Back to Arts</Link>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default page;
