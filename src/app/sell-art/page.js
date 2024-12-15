
import React  from 'react';
import Navbar from '@/components/modules/navbar/Navbar';
import styles from './sell-art.module.css'

function SellArt() {
  return (
    <div> {/* Wrap the JSX with a single root element */}
    <Navbar />
    <div className="container-fluidr" style={{height: "220px", backgroundColor: 'lightgray', textAlign: "center", paddingTop: "150px"}}>
    <h3>Selling Art</h3>
</div>
<div>




<div className="container">
<div className={styles.static_page}>
<div className="cms-page-content">
<h2 style={{marginTop: "50px", marginLeft: "20px", marginBottom: "50px"}}><span>Quickstart</span></h2>
<div className="row">
<div className="col-md-4 HideIfAuthenticated" style={{textAlign: "center"}}>
<h2 style={{textAlign: "center"}}><span>1. Register</span></h2>
<div style={{textAlign: "center"}}><a className="btn btn-primary red line btn-lg mt-md" style={{marginTop: "0px;"}} href="/register/artists-awaiting-verification">Artist Registration</a></div>
<p style={{textAlign: "center"}}><a href="/register-an-artist-account">Registration Help</a><br />(Existing members, please create a new account)</p>
</div>
<div className="col-md-4 ShowIfAuthenticated" style={{textAlign: "center", display: "none"}}>
<h2 style={{textAlign: "center"}}><span>1. Register</span></h2>
<p style={{textAlign: "center"}}>You are already registered.</p>
</div>
<div className="col-md-4 HideIfSubscriber" style={{textAlign: "center"}}>
<h2><span>2. Subscribe</span></h2>
<div><a className="btn btn-primary red line btn-lg mt-md" style={{marginTop: "0px;"}} href="https://buy.stripe.com/7sI3dacms19y8i4289" target="_blank" rel="noopener">Subscribe</a></div>
<p><a href="/purchase-membership-subscription">Membership help</a><br />(Existing memberships carry over - you do not need to resubscribe)</p>
</div>
<div className="col-md-4 ShowIfSubscriber" style={{textAlign: "center", display: "none"}}>
<h2><span>2. Subscribe</span></h2>
<p>You are already a subscriber.</p>
</div>
<div className="col-md-4" style={{textAlign: "center"}}>
<h2><span>3. Upload</span></h2>
<div><a className="btn btn-primary red line btn-lg mt-md" style={{marginTop: "0px;"}} href="/listing/new">Add a new Listing</a></div>
<p><a href="/add-a-new-listing">Add Listing Help</a></p>
</div>
<p style={{textAlign: "center"}}>See <a href="/help-for-artists">Help for Artists</a> for links to everything you need to know.</p>
</div>
<div className="row">
<h2 style={{textAlign: "left"}}><span>Welcome!</span></h2>
<p>ArtGallery.co.uk is the UK’s leading website gallery and offers you, the talented artist, a platform from which to sell your art online to the public, without any of the hassles of having your own website.</p>
<p>If you can answer “yes” to these questions, then we want you to join us and start selling art online.</p>
<ul>
<li>Are you a talented artist living in any of these <span><a href="/eligible-countries">eligible countries</a></span>?</li>
<li>Do you have three or more original paintings, sculptures, or other artworks to sell?</li>
<li>Are you prepared to take great quality photographs of your art?</li>
<li>Will you be responsible, keep your gallery up to date and take your artworks offline when you are away and cannot fulfil orders?</li>
</ul>
<p>If you answered all questions “yes”, please read on, and consider becoming a member.</p>
<p>&nbsp;</p>
<h2><span>Key features and benefits at a glance</span></h2>
<table className="table table-bordered table-striped width-auto">
<tbody>
<tr>
<th className="feature">Feature</th>
<th className="benefit">Benefit</th>
</tr>
<tr>
<td className="feature">Curated Quality</td>
<td className="benefit">All artworks for sale have been through a rigourous vetting process by our expert curators. We help you find the right information to sell your work effectively.</td>
</tr>
<tr>
<td className="feature">Become a Member</td>
<td className="benefit">Memberships are only £50 per year. Join a growing community of professional working artists.</td>
</tr>
<tr>
<td className="feature">Full control over your listings</td>
<td className="benefit">Create, manage and remove artworks at any time, and set your own prices.</td>
</tr>
<tr>
<td className="feature">Own Store Front</td>
<td className="benefit">Have your own customised store front, showing only your artwork. Complete your artist profile, bio, and upload your own picture to engage with your buyers on a personal level.</td>
</tr>
<tr>
<td className="feature">Robust sales alert system</td>
<td className="benefit">We alert you by email when an order is placed, so you should never miss an order.</td>
</tr>
<tr>
<td className="feature">Free anti-fraud screening</td>
<td className="benefit">Selling on the Internet is a minefield. We take the risk out of selling through our fraud-screening processes. We only alert you of an order when it has passed our anti-fraud screening checks, so you can be 100% confident that you will get paid.</td>
</tr>
<tr>
<td className="feature">End-to-end order status tracking</td>
<td className="benefit">Log in anytime to see the details of any sales and payment dates.</td>
</tr>
<tr>
<td className="feature">Total customer management</td>
<td className="benefit">We take care of all customer-facing questions and issues, including invoicing, VAT, payment processing and accounting.</td>
</tr>
<tr>
<td className="feature">Fast payment turnaround</td>
<td className="benefit">We pay artists by bank transfer. When you sign up we will ask you to provide your bank details. This is the most efficient payment method.</td>
</tr>
<tr>
<td className="feature">Fully automated invoicing system</td>
<td className="benefit">Receive invoices by email for every artwork sale.</td>
</tr>
<tr>
<td className="feature">Free search engine promotion</td>
<td className="benefit">We spend thousands of pounds each month on you, promoting your artwork in search engines such as Google, MSN and Yahoo, and on social networking sites such as Facebook and LinkedIn.</td>
</tr>
</tbody>
</table>
<h2><span>How it works</span></h2>
<p>We market and sell your art via this site, ArtGallery.co.uk, the UK’s leading destination for customers wishing to buy quality, curated art online. We will display, advertise and market your art online and offline, provide payment processing and credit card facilities, and work hard to bring customers to you.</p>
<p>At ArtGallery.co.uk we focus on bringing customers to the website gallery. We charge a commission of 35% from the selling price you set for each artwork. This is&nbsp;<em>much lower</em>&nbsp;than high street gallery rates.</p>
<p>ArtGallery.co.uk is the UK’s leading website gallery (type “art gallery” into Google and see how high we rank in the search engine results). In addition, we spend large amounts on search engine marketing and press advertisements.</p>
<h2><span>Your key responsibilities</span></h2>
<p>We ask that you operate your gallery professionally, as follows:</p>
<ul>
<li>You will package your artwork carefully and despatch it promptly when you receive an order</li>
<li>You will remove your profile from the site when you go on holiday and replace it when you get back (can be done online)</li>
<li>You will remove artworks immediately from the site when you sell them independently (can be done online)</li>
</ul>
<p>For the full artist terms and conditions of service, please read the&nbsp;<a href="/terms-and-conditions-for-artists">Terms and Conditions for Artists</a>.</p>
<h2><span>You set the price</span></h2>
<p>You know how much your art sells for, so you decide the selling price of your art. We take a commission of 35% from your price. This commission covers our costs of advertising, marketing, customer services, credit card processing fees, invoicing, admin and VAT.</p>
<p>You are responsible for the costs of materials, packaging, and delivery to anywhere in the UK. Therefore you must set your price to include this cost. As an established artist, you probably already know how much it costs to package and deliver your style of artworks. If in doubt, £30 is usually sufficient for smaller pieces. For larger or heavy pieces contact your preferred courier to establish the cost. Check delivery prices carefully as you are wholly responsible for the cost of delivery.</p>
<h2><span>14 day money back guarantee</span></h2>
<p>To stimulate sales and foster trust with potential customers, we offer all customers a 14-day no-quibble money back guarantee, which you must adhere to. The guarantee allows customers to return artworks within 14 days if they are not fully satisfied. They can return the artwork for any reason within this period. They will have to pay the postage and insurance costs if they return an artwork. You are not eligible to recoup the cost of delivering the artwork to the customer. Our current rate of return is approx 1 in 250 artworks returned.</p>
<p>For full details of the terms and conditions, you will be bound by please see&nbsp;<a href="/terms-conditions-for-artists">Terms and Conditions for Artists</a>.</p>
<h2><span>How you get paid</span></h2>
<p>Customers pay online through our credit card processing facilities. When payment is received, we will notify you of the details of the purchase by email and if necessary by phone. You must then package and despatch the artwork to arrive with the customer within 5 working days. Once we have confirmed that the artwork arrived safely, you will be paid approximately 28 days after that date (this is comprised of 7 days for delivery, 14-day money back guarantee, 7 days for return). You will be paid by bank transfer.&nbsp;</p>
<h2><span>How to start selling art</span></h2>
<p>There are a few hoops to jump through to start with, but don't worry we'll walk you through them. Here's an overview:</p>
<ol>
<li><strong>Sign up</strong><br /> Here you will create your account to access ArtGallery's website, supply details about yourself, set up your membership subscription, set up your shop front, and provide your banking information to receive payments.</li>
<li><strong>Create your listings</strong><br /> This is where you will upload pictures of your artwork, enter a title and description, set it's category, style, keywords, price, availability, and other useful information. Our expert curators will then review your artwork and work with you to make your listing as polished as possible before putting it 'live' for customers to see.</li>
<li><strong>Making sales</strong><br /> Congratulations! You will mark the artwork as 'sold', parcel it up, and send it off. You can communicate easily with the buyer, to double check addresses and provide tracking information, and finally mark the order as completed. Well done!</li>
</ol>
<h3><span>Come and join the family!</span></h3>
<p>Please see the main <a href="/help-for-artists">Help for Artists</a> page, which covers these steps in detail.&nbsp;</p>
<p>&nbsp;</p>
</div>
        </div>
    </div>


 </div>
</div>
</div>
  ); 
}

export default SellArt;
