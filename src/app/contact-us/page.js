import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Form from "@/components/templates/contact-us/Form";
import Information from "@/components/templates/contact-us/Information";
import Map from "@/components/templates/contact-us/Map";
import styles from "@/styles/contact-us.module.css";

import { authUser } from "@/utils/AuthHelper";
import Link from "next/link";

// [35.72021225108499, 51.42222691580869]
// [35.70153474690238, 51.41497422314844]

const page = async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route={"Contact Us"} />

      <div className={styles.container}>
        <main className={styles.maps}>
          <section>
            <Map
          position={[34.5553, 69.2075]}
          center={[34.5553, 69.2075]}
          
            >
              <span> Our Store</span>
              <h3>Afhan Art Gollery Address</h3>
              <p>
               house number 12# karte 3th, kabul ,Afghanistan  
              </p>
              <p>021-88305827</p>
              <Link href="/about-us">About the Store</Link>
            </Map>
          </section>
          <section>
            <Map
             position={[34.5553, 69.2075]}
             center={[34.5553, 69.2075]}
             
            >
              <span> Our Store</span>
              <h3>Art Gollry Physical Store (Jam Branch) Address</h3>
              <p>
              house number 12# karte 3th, kabul ,Afghanistan                </p>
              <p>021-88305827</p>
              <Link href="/about-us">About the Store</Link>
            </Map>
          </section>
        </main>
      </div>

      <div className={styles.container}>
        <div className={styles.contents}>
          <Information />
          <Form />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
