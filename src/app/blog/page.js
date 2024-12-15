import React from 'react'
import Navbar from '@/components/modules/navbar/Navbar';
import styles from './blog.module.css';

function page() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid" style={{height: "220px", backgroundColor: 'lightgray', textAlign: "center", paddingTop: "150px"}}>
        <h3>Block</h3>
      </div>

      <div className="container">
        {/* Row for blog post cards */}
        <div className="row">
          {/* Post 1 */}
          <div className="col-md-3 col-sm-12 mb-4">
            <a href="https://www.artgallery.co.uk/blog/18305-art-with-a-message" className={styles.post_box_content}>
              <div className={styles.image}>
                <img alt="Art with a Message" src="https://cdn.kreezalid.com/kreezalid/artgallery/articles/300x300_1000x1000_utsonapakicsi_a0aqq_1553679557.jpg" className="img-fluid" />
              </div>
            </a>
          </div>
          <div className="col-md-9 col-sm-12 mb-4">
            <div className={styles.summary}>
              <div className="post-category-tag">The Art World</div>
              <h2><span>Art with a Message</span></h2>
              <p>The images in this blog may not make you feel comfortable - but that's the whole point.</p>
            </div>
          </div>
        </div>

        {/* Row for blog post 2 */}
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-4">
            <div className="post post-box">
              <a href="https://www.artgallery.co.uk/blog/18233-why-buy-a-gift-voucher" className="post-box-content">
                <div className={styles.image}>
                  <img alt="Why buy a Gift Voucher?" src="https://cdn.kreezalid.com/kreezalid/artgallery/articles/300x300_ag_gift_voucher_web_3.jpg" className="img-fluid" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-9 col-sm-12 mb-4">
            <div className={styles.summary}>
              <div className="post-date">Nov 15, 24</div>
              <div className="post-category-tag">Buying Art</div>
              <h2><span>Why buy a Gift Voucher?</span></h2>
              <p>It's coming up to Christmas, and you will be looking for an unusual present for a loved one...</p>
            </div>
          </div>
        </div>

        {/* Row for blog post 3 */}
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-4">
            <div className="post post-box">
              <a href="https://www.artgallery.co.uk/blog/18186-collage" className="post-box-content">
                <div className={styles.image}>
                  <img alt="Collage" src="https://cdn.kreezalid.com/kreezalid/artgallery/articles/300x300_1000x1000_lippy_y6lux_418132800.jpg" className="img-fluid" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-9 col-sm-12 mb-4">
            <div className={styles.summary}>
              <div className="post-date">Nov 05, 24</div>
              <div className="post-category-tag">The Art World</div>
              <h2><span>Collage</span></h2>
              <p>Collage is a technique involving cutting out shapes and gluing them to make a new arrangement</p>
            </div>
          </div>
        </div>

        {/* Row for blog post 4 */}
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-4">
            <div className="post post-box">
              <a href="https://www.artgallery.co.uk/blog/17934-impressionistic-artworks" className="post-box-content">
                <div className={styles.image}>
                  <img alt="Impressionistic Artworks" src="https://cdn.kreezalid.com/kreezalid/artgallery/articles/300x300_1000x1000_version_2_5_xw6py_787803906.jpg" className="img-fluid" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-9 col-sm-12 mb-4">
            <div className={styles.summary}>
              <div className="post-date">Aug 21, 24</div>
              <div className="post-category-tag">Buying Art</div>
              <h2><span>Impressionistic Artworks</span></h2>
              <p>It must come as no surprise that Impressionistic Artworks are the largest category of art on this gallery; closely followed by Abstracts.</p>
            </div>
          </div>
        </div>

        {/* Row for blog post 5 */}
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-4">
            <div className="post post-box">
              <a href="https://www.artgallery.co.uk/blog/17915-eco-friendly-art-practices" className="post-box-content">
                <div className={styles.image}>
                  <img alt="Eco-friendly art practices" src="https://cdn.kreezalid.com/kreezalid/artgallery/articles/300x300_1000x1000_242_a_new_day_30x30_15_04_2024_e6gya_2046538106.jpg" className="img-fluid" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-9 col-sm-12 mb-4">
            <div className={styles.summary}>
              <div className="post-date">Jun 27, 24</div>
              <div className="post-category-tag">Being an Artist</div>
              <h2><span>Eco-friendly art practices</span></h2>
              <p>Eco-friendly art practices are not just a trend but a conscientious choice to preserve the planet's resources and mitigate environmental impact.</p>
            </div>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="text-center">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">&lt;&lt; Prev</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="/blog?page=2">2</a></li>
              <li className="page-item"><a className="page-link" href="/blog?page=3">3</a></li>
              <li className="page-item"><a className="page-link" href="/blog?page=4">4</a></li>
              <li className="page-item"><a className="page-link" href="/blog?page=5">5</a></li>
              <li className="page-item">
                <a className="page-link" href="/blog?page=2">Next &gt;&gt;</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default page;
