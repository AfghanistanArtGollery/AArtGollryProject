import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import styles from "@/styles/aboutUs.module.css";

import { authUser } from "@/utils/AuthHelper";
const page = async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route={"About Us"} />
      <div className={styles.container}>
        <section>
          <div>
            <span>About Us</span>
            <p>Afghanistan Art Gallery</p>
          </div>
          <p>
            The **Afghanistan Art Gallery**, located in **Kabul Karte 3rd,
            Afghanistan**, is a leading cultural and artistic hub, bringing
            together creative talent from across the region.
          </p>
          <p>
            Under the leadership of **Mohammad Nasir**, a renowned artist and
            visionary, the gallery serves as a platform to promote Afghan art,
            creativity, and cultural heritage. With decades of experience,
            Mohammad Nasir has dedicated his life to supporting artists and
            showcasing unique and inspiring works of art.
          </p>
        </section>
        <main className={styles.main}>
          <div>
            <p>
              The gallery houses an extensive collection of contemporary and
              traditional Afghan art, offering visitors a glimpse into the rich
              cultural tapestry of Afghanistan. From **paintings** and
              **sculptures** to **modern installations**, the Afghanistan Art
              Gallery celebrates diversity in artistic expression.
            </p>
            <p>
              It hosts regular **exhibitions, workshops**, and **art events** to
              nurture young talent and provide established artists with a global
              platform. Artists from different backgrounds come together here to
              tell stories of resilience, beauty, and hope through their art.
            </p>
            <p>
              The vision of Mohammad Nasir has transformed this gallery into a
              cultural landmark, contributing to the preservation and evolution
              of Afghan art and identity.
            </p>
            <p>**Location**: Kabul, Karte 3rd, Afghanistan</p>
            <p>**Manager**: Mohammad Nasir</p>
          </div>
          <div>
            <span>Our Mission</span>
            <p className={styles.title}>Promoting Afghan Art & Heritage</p>
            <p>
              At Afghanistan Art Gallery, our mission is to preserve,
              celebrate, and elevate Afghan art on a global stage. By connecting
              artists, enthusiasts, and collectors, we aim to build a community
              that values creativity and cultural heritage.
            </p>
            <p>
              Through collaborations, curated exhibitions, and art education
              programs, we empower emerging and professional artists alike. Our
              goal is to make art accessible to all and foster a deeper
              appreciation for Afghanistan's artistic traditions and innovations.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default page;
