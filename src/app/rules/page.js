import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import styles from "@/styles/rules.module.css";

import { authUser } from "@/utils/AuthHelper";
const page = async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route={"Rulles"} />
      <div className={styles.container} data-aos="fade-up">
        <p>
          Terms and Conditions for Afghanistan Art Gallery Website
          The Art Gallery website respects the privacy of its users. To ensure a secure and reliable service, we request certain personal information from users for purposes such as making purchases, submitting reviews, or accessing certain features of the website. The information we request includes data such as address, phone number, and email to process and deliver orders. Since all activities on the Art Gallery website are conducted according to e-commerce regulations, the following information is required during the purchase process:

          For individual customers: Full name and national ID.
          For business customers: Economic code and national identification number.
          The email address and phone numbers that customers register on their profiles are the official and verified contact points for all communications between the company and the customer.
          All correspondence, including responses from the company, will be sent through these contact points.

          Customers can also provide the name, address, and phone number of another person to receive their order, and the Art Gallery will only use this information for the delivery of that specific order.

          The Art Gallery may use some of the personal information for purposes such as communicating
          with customers, optimizing website content, and conducting market research. Additionally,
          we may send emails or SMS messages regarding events, news, special services, or promotions to users who are members of the website. If users do not wish to receive these emails or
          SMS messages, they can unsubscribe from the newsletter in their profile.
        </p>
        <p>
          User Comments and Content Editing

          The Art Gallery reserves the right to edit user comments to ensure compliance with the website's rules.
          If a comment or message submitted by a user contains unlawful content, the Art Gallery may use the registered information to take legal action if necessary.

          Password Security and User Responsibility

          Users are responsible for maintaining the confidentiality of their passwords. To prevent unauthorized use, users should never disclose their passwords to others.
          The Art Gallery considers users' personal identity confidential
          and does not share this information with any third party unless required by law or court order.
          <strong>(Answers 24/7)</strong>
        </p>
        <p>
          Kabul,Afghanistan Art Gollery
        </p>

        <p>
          if any issue or problem you can ticket and contact us
        </p>
        <p>0797277737</p>
      </div>
      <Footer />
    </>
  );
};

export default page;
