import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Stepper from "@/components/modules/stepper/Stepper";
import Table from "@/components/templates/cart/Table";
import styles from "@/styles/cart.module.css";

import Link from "next/link";

import { TbShoppingCartX } from "react-icons/tb";
import { authUser } from "@/utils/AuthHelper";
const page = async () => {

  const user = await authUser()
  return (
    <>
      <Navbar isLogin={user ? true : false} />
      
      <Stepper step="cart" />

      <main className='container mb-5' data-aos="fade-up">
        <Table />
      </main>

      {/* Uncomment the code below if needed */}
      {/* <div className={styles.cart_empty} data-aos="fade-up">
        <TbShoppingCartX />
        <p>Your cart is currently empty.</p>
        <span>You need to add some products to your cart before checkout.</span>
        <span>You will find many interesting products on the "Store" page.</span>
        <div>
          <Link href="/category">Back to Store</Link>
        </div>
      </div> */}

      <Footer />
    </>
  );
};

export default page;
