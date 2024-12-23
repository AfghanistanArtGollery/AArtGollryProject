import React from 'react'
import Navbar from '@/components/modules/navbar/Navbar';
import style from './buy-art.module.css';

import { authUser } from '@/utils/AuthHelper';


function page() {
  const user = authUser()
  return (
    <div> {/* Wrap the JSX with a single root element */}
      <Navbar isLogin={user ? true : false} />

      <div className="main-content">
        <div className="cms-page" id="cms-page-zy0v1gnfum">
          <div className="page-header cms-page" style={{ paddingBottom: "0", backgroundImage: "url('')" }}>
            <div className="containerFlude">
              <ul className={style.breadcrumb}>
                <li><a href="/">Home</a></li>
                <li className="active">Buy Art</li>
                <h1>How to buy art from ArtGallery.co.uk</h1>
              </ul>
            </div>
          </div>
          <div className="container static-page">
            <div className={style.cms_page_content}>
              <div className="HideIfAuthenticated">
                <div><a className="btn btn-primary red line btn-lg mt-md" style={{ marginTop: "0px", marginBottom: "1em" }} href="/login-register">Register Here</a></div>
              </div>
              <h3><span>Want to learn more about how it all works?</span></h3>
              <div>Looking for something in particular?</div>
              <ul>
                <li>Our artists provide detailed descriptions and key words for each piece, all of which are fully searchable from the search box at the top of the page.</li>
              </ul>
              <div>Prefer to stumble upon something unique?</div>
              <ul>
                <li>Start your browsing journey by&nbsp;selecting an artform category from the main menu above. Narrow down further by selecting different styles or subjects, or by adjusting the price slider.</li>
              </ul>
              <h3><span>Found something wonderful?</span></h3>
              <ul>
                <li>Just add anything you like to your <a href="/cart">shopping cart</a>.</li>
                <li>If you are planning for a future purchase, add it to <a href="/wishlist">your wishlist</a>.</li>
                <li>Need further information? You can send questions direct to the artist.</li>
              </ul>
              <h3><span>Placing an order</span></h3>
              <ul>
                <li>Click the '<a href="/cart">My Cart</a>' link in the top menu to review the items in your shopping cart, and click 'Checkout' to begin the order process.</li>
                <li><a href="/login"></a>You will need an account to place the order, so you will be prompted to either <a href="/login">log in</a> if you already have one, otherwise simply <a href="/register/customers">register</a> a new one.</li>
                <li>Click 'Proceed to Payment' to provide your credit card details through our payment processor, Stripe.</li>
              </ul>
              <h3><span>Track your order</span></h3>
              <div>Your artist will confirm the order, and communicate delivery estimates and tracking details to you through the ArtGallery website.</div>
              <div>When your artwork has arrived, please consider leaving a review of your experience with the artist. It really helps!</div>
              <h3><span>Problems?</span></h3>
              <div><a href="/contact-us">Contact us</a>, and we will be happy to assist you.</div>
              <h3><span>Let's get started</span></h3>
              <div>We hope you enjoy our <a href="/listings">entire catalogue</a>&nbsp;of quality, curated art as much as we do!</div>
              <p>&nbsp;</p>
            </div>
          </div>
        </div></div></div>








  );
}

export default page;
