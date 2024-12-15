import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Product from "@/components/modules/product/Product";
import connectToDB from "@/configs/db";
import styles from "@/styles/wishlist.module.css";

import { authUser } from "@/utils/AuthHelper";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

import WishlistModel from "@/models/Wishlist";

const page = async () => {

  let wishes = [];
  connectToDB();
  const user = await authUser();
  
  if(user){
      wishes = await WishlistModel.find({user:user.id}).populate('product','_id name price images').lean();
  }

  


  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route={"Wishlist"} />

      <main className={styles.container} data-aos="fade-up">

        <p className={styles.title}>Your Favorite Arts</p>

        <section>
            {wishes.length > 0 &&
              wishes.map((wish) => 
               
                <Product key={wish._id} {...wish.product} />
              )
            }
        </section>
      </main>

      {wishes.length === 0 && (
        <div className={styles.wishlist_empty} data-aos="fade-up">
          <FaRegHeart />
          <p>No products found</p>
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
