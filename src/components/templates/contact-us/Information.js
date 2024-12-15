import {
  FaEnvelopeOpenText,
  FaInternetExplorer,
  FaPhone,
  FaTelegramPlane,
} from "react-icons/fa";
import styles from "./information.module.css";
import { PiCoffeeFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";

const Information = () => {
  return (
    <section className={styles.Information}>
      <span>Contact Us</span>
      <p>Contact Information</p>
      <div>
        <PiCoffeeFill />
        <p>Afghan Tenders Art Gallery</p> {/* Updated for Art Gallery */}
      </div>
      <div>
        <FaInternetExplorer />
        <p>afghantenders.com</p> {/* Website URL */}
      </div>
      <div>
        <BiSolidContact />
        <p>
          Kabul, Afghanistan, karte 3 Street, Building No. 5, 11 District
        </p> {/* Updated Address */}
      </div>
      <div>
        <FaPhone />
        <p>+93 797 27 77 37</p> {/* Updated phone number for Afghanistan */}
      </div>
      <div>
        <FaEnvelopeOpenText />
        <p>info[at]afghantenders.com</p> {/* Email address for inquiries */}
      </div>
      <div>
        <FaEnvelopeOpenText />
        <p>support[at]afghantenders.com</p> {/* Support email */}
      </div>
      <div>
        <FaTelegramPlane />
        <p>Contact management via WhatsApp or Telegram: +93 789 654 321</p> {/* Updated contact */}
      </div>
    </section>
  );
};

export default Information;
