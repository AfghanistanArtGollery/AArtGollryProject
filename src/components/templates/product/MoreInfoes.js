'use client'

import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import styles from './details.module.css';

const MoreInfoes = ({ artwork }) => {
  const artworkTags = artwork.tags;
  const tags = artworkTags[0].split(',').map(tag => tag.trim());

  const [count, setCount] = useState(1);
  const [isClient, setIsClient] = useState(false); // state to check if client-side

  // Set the isClient state to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  const addToCart = () => {
    if (!isClient) return; // Avoid running on server-side

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length) {
      const isCart = cart.some(item => item.id == artwork._id);
      if (isCart) {
        cart.forEach((item) => {
          if (item.id === artwork._id) {
            item.count = item.count + count;
          }
        });

        localStorage.setItem('cart', JSON.stringify(cart));
      }
    } else {
      const cartItem = {
        id: artwork._id,
        name: artwork.name,
        price: artwork.price,
        count,
      };
      cart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  return (
    <main>
      <hr />

      <div className={styles.listing_description} id="description">
        <div className="container">
          <div className="listing_detail_content">
            <h2>Description</h2>

            <div className="listing-description">
              {/* Only parse HTML after the component has mounted */}
              {isClient && parse(artwork.longDescription)}
            </div>

            <div className="container my-4">
              <h5>Artwork Tags</h5>
              <div className="d-flex flex-wrap">
                {tags.map((tag, index) => (
                  <a
                    key={index}
                    href={`/listing/search?query=${tag}`}
                    className="badge bg-secondary text-white me-2 mb-2 fs-6 rounded-pill shadow-sm"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  >
                    {tag}
                  </a>
                ))}
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
                    <p className="card-text">{artwork.framed === true ? 'Yes' : "No"}</p>
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
