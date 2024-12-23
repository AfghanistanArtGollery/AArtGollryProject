
import React from 'react';
import Navbar from '@/components/modules/navbar/Navbar';

import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";
import styles from './test.module.css';
import artworkModel from '@/models/ArtWork'
import MoreProducts from '@/components/templates/artwork/MoreArtWorks';

async function page({ params }) {


 const artWorkID = params.id;
  const product = await artworkModel.findOne({ _id: artWorkID }).populate(
    "comments"
  );

//   const relatedProducts = await artworkModel.find({ name: product.name }).lean();





    return (
        <div> {/* Wrap the JSX with a single root element */}
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="/images/3.jpg" className={styles.img} />
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <img className={styles.pro} src="/images/shahin.jpg" />
                            <p style={{ marginLeft: "60px", marginTop: "-30px", marginBottom: "30px" }}>Ahmad Ahmadi</p></div>
                        <h3 className={styles.h3}>Harebells in watercolour</h3>
                        <p style={{ fontSize: "20px" }}>£120.00</p>
                        <button type="button" className={styles.btn}>By Now!</button>

                        {/* Social Icons */}

                        <div className={styles.social} >
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.artgallery.co.uk%2Flisting%2Fanni4cxpp7s-harebells-in-watercolour&amp;linkname=Harebells%20in%20watercolour&amp;linknote=">
                                        Facebook
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="a2a_button_twitter" href="/#twitter">Twitter</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="a2a_button_pinterest" href="/#pinterest">Pinterest</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="a2a_button_email" href="/#email">Email</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="a2a_button_linkedin" href="/#linkedin">LinkedIn</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="a2a_button_whatsapp" href="/#whatsapp">WhatsApp</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="a2a_button_wechat" href="/#wechat">WeChat</a>
                                </li>
                            </ul>
                        </div>




                    </div>
                </div>
            </div>




            <div className={styles.listing_description} id="description">
                <div className="container">
                    <div className="listing_detail_content">

                        <h2>Description</h2>

                        <div className="listing-description">
                            <p>A watercolour and pencil depiction of harebells against a background of lush green leaves.<br /></p>
                        </div>

                        <div className="container my-4">
                            <h5>Artwork Tags</h5>
                            <div className="d-flex flex-wrap">
                                <a href="/listing/search?query=nature" className="badge bg-secondary text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Arial, sans-serif' }}>nature</a>
                                <a href="/listing/search?query=blue" className="badge bg-info text-dark me-2 mb-2 fs-5 rounded-pill shadow-sm" style={{ fontFamily: 'Verdana, sans-serif' }}>blue</a>
                                <a href="/listing/search?query=flowers" className="badge bg-warning text-dark me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Georgia, serif' }}>flowers</a>
                                <a href="/listing/search?query=realism" className="badge bg-danger text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Courier New, monospace' }}>realism</a>
                                <a href="/listing/search?query=floral" className="badge bg-primary text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Tahoma, sans-serif' }}>floral</a>
                                <a href="/listing/search?query=realistic" className="badge bg-dark text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Lucida Console, monospace' }}>realistic</a>
                                <a href="/listing/search?query=green" className="badge bg-success text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Arial, sans-serif' }}>green</a>
                                <a href="/listing/search?query=botanical" className="badge bg-secondary text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Arial, sans-serif' }}>botanical</a>
                            </div>
                        </div>




                        <div className="container my-4">

                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="card p-3">
                                        <h5 className="card-title">Material</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Paper</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card p-3">
                                        <h5 className="card-title">Dimensions</h5>
                                        <p className="card-text">21 x 29.70cm</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card p-3">
                                        <h5 className="card-title">Style</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Realistic and photographic</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card p-3">
                                        <h5 className="card-title">Subject</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Flowers and Plants</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card p-3">
                                        <h5 className="card-title">Framed</h5>
                                        <p className="card-text">No</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>




















            <div className="container my-4">
    <div className="text-center mb-4">
        <img src="/images/shahin.jpg" alt="Esmee van Breugel" className="rounded-circle" width="150" height="150" />
    </div>

    <h2 className="text-center mb-4">Other listings from Esmee van Breugel</h2>



    {/*  <MoreProducts
          relatedProducts={JSON.parse(JSON.stringify(relatedProducts))}
        />  */}

    <div className="text-center mt-4">
        <a href="/s/z8moxly/esmee-van-breugel" className="btn btn-primary">See More</a>
    </div>
</div>



           


        </div>
    );
}

export default page;
