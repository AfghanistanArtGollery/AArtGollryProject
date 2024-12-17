'use client'

import { FaFacebookF, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import styles from "./details.module.css";
import Breadcrumb from "./Breadcrumb";
import AddToWishlist from "./AddToWishlist";
import { useState } from "react";
import parse from 'html-react-parser'

const MoreInfoes = ({ artwork }) => {



  // find tags 
  const artworkTags = artwork.tags
  // and saperate every tags using , 
  const tags = artworkTags[0].split(',').map(tag => tag.trim());





  const [count, setCount] = useState(1)



  const addToCart = () => {

    const cart = JSON.parse(localStorage.getItem('cart')) || []

    if (cart.length) {
      const isCart = cart.some(item => item.id == artwork._id)
      if (isCart) {
        cart.forEach((item) => {
          if (item.id === artwork._id) {
            item.count = item.count + count
          }
        })

        localStorage.setItem('cart', JSON.stringify(cart))

      }
    } else {
      const cartItem = {
        id: artwork._id,
        name: artwork.name,
        price: artwork.price,
        count,
      }
      cart.push(cartItem)
      localStorage.setItem('cart', JSON.stringify(cart))

    }



  }





  return (
    <main >

      <hr />

      <div className={styles.listing_description} id="description">
        <div className="container">
          <div className="listing_detail_content">

            <h2>Description</h2>

            <div className="listing-description">
              <p>{parse(artwork.longDescription)}<br/> </p>
            </div>

            <div className="container my-4">
              <h5>Artwork Tags</h5>
              <div className="d-flex flex-wrap">
                {tags.map((tag, index) => (
                  <a
                    key={index} // It's important to add a unique key to each element in a list
                    href={`/listing/search?query=${tag}`}
                    className="badge bg-secondary text-white me-2 mb-2 fs-6 rounded-pill shadow-sm"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  >
                    {tag}
                  </a>
                ))}



                {/* <a href="/listing/search?query=blue" className="badge bg-info text-dark me-2 mb-2 fs-5 rounded-pill shadow-sm" style={{ fontFamily: 'Verdana, sans-serif' }}>blue</a>
                <a href="/listing/search?query=flowers" className="badge bg-warning text-dark me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Georgia, serif' }}>flowers</a>
                <a href="/listing/search?query=realism" className="badge bg-danger text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Courier New, monospace' }}>realism</a>
                <a href="/listing/search?query=floral" className="badge bg-primary text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Tahoma, sans-serif' }}>floral</a>
                <a href="/listing/search?query=realistic" className="badge bg-dark text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Lucida Console, monospace' }}>realistic</a>
                <a href="/listing/search?query=green" className="badge bg-success text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Arial, sans-serif' }}>green</a>
                <a href="/listing/search?query=botanical" className="badge bg-secondary text-white me-2 mb-2 fs-6 rounded-pill shadow-sm" style={{ fontFamily: 'Arial, sans-serif' }}>botanical</a> */}
              </div>
            </div>




            <div className="container my-4">

              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card p-3">
                    <h5 className="card-title">Material</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{artwork.materialID.title}</li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card p-3">
                    <h5 className="card-title">Dimensions</h5>
                    <p className="card-text">{artwork.dimensions.width} x {artwork.dimensions.height}cm</p>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card p-3">
                    <h5 className="card-title">Style</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{artwork.styleID.title}</li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card p-3">
                    <h5 className="card-title">Subject</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{artwork.subjectID.title}</li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card p-3">
                    <h5 className="card-title">Framed</h5>
                    <p className="card-text">{artwork.framed===true?'Yes':"No"}</p>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>

      <hr />
    </main>
  );
};

export default MoreInfoes;
