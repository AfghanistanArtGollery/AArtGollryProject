
import React from 'react';
import Navbar from '@/components/modules/navbar/Navbar';
import styles from './listing.module.css'
import connectToDB from '@/configs/db';
import modelArtwork from '@/models/ArtWork'
import Link from 'next/link';
import { authUser } from '@/utils/AuthHelper';
import ArtWork from '@/components/modules/product/Product';
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb';
async function AllArt() {
  connectToDB();
  const user = await authUser()
  const allArtWorks = await modelArtwork.find({}).populate('artist_id').lean()

  // const imagesArt= await modelArtwork.find({})
  // console.log('artWork=>', artWorks)


  return (
    <div> {/* Wrap the JSX with a single root element */}
      <Navbar isLogin={user?true:false} />
      <Breadcrumb title="All lists" />


      <div className="container">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-3">

            {/* Filters Collapse Section */}


            <ul className={styles.result_category_list}>
              <li><Link href="/listing/category/painting">Painting</Link></li>
              <li><Link href="/listing/category/drawing">Drawing</Link></li>
              <li><Link href="/listing/category/digital-art">Digital Art</Link></li>
              <li><Link href="/listing/category/sculpture">Sculpture</Link></li>
              <li><Link href="/listing/category/mosaic">Mosaic</Link></li>
              <li><Link href="/listing/category/collage">Collage</Link></li>
              <li><Link href="/listing/category/ceramic">Ceramic</Link></li>
              <li><Link href="/listing/category/photograph">Photograph</Link></li>
              <li><Link href="/listing/category/prints">Prints</Link></li>
              <li><Link href="/listing/category/mixed-media">Mixed Media</Link></li>
            </ul>


            {/* Price Filter */}
            <div id="listingFilters">
              <form method="get" id="listingFiltersForm" role="form" action="/listings">
                <input type="hidden" name="price_range[min]" value="100" />
                <input type="hidden" name="price_range[max]" value="29000" />

                <div className="price_filter_side">
                  <span className={styles.filter_title}>Price</span><br></br>
                  <div id="price-ranger-slider" className="noUi_target"><div className="noUi_ltr noUi_horizontal">
                    <div className="noUi_base">
                      <div className="noUi_origin" style={{ left: "0%" }}>
                        <div className="noUi_handle noUi_handle_lower">
                          <div className="noUi_tooltip">£100</div>
                        </div>
                      </div>
                      <div className={styles.noUi_connect}></div>
                      <div className="noUi_origin" style={{ left: "100%" }}>
                        <div className="noUi_handle noUi_handle_upper">
                          <div className="noUi_tooltip">£29,000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div id="price-filters-values">
                      <input name="price[min]" type="hidden" value="100" />
                      <input name="price[max]" type="hidden" value="29000" />
                    </div>
                  </div>
                </div>


                {/* Category Filter */}
                <div className="category_browse_wrapper">
                  <span className={styles.filter_title}>Categories</span>
                  <ul className="list-unstyled category_browse_list">
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46617]" value="1" />
                          Watercolours <span className="search-category-results-count">(1822)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46625]" value="1" />
                          Oil <span className="search-category-results-count">(5405)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46626]" value="1" />
                          Acrylic <span className="search-category-results-count">(8008)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46626]" value="1" />
                          Acrylic <span className="search-category-results-count">(8008)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46626]" value="1" />
                          Acrylic <span className="search-category-results-count">(8008)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46626]" value="1" />
                          Acrylic <span className="search-category-results-count">(8008)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46626]" value="1" />
                          Acrylic <span className="search-category-results-count">(8008)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46626]" value="1" />
                          Acrylic <span className="search-category-results-count">(8008)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46626]" value="1" />
                          Acrylic <span className="search-category-results-count">(8008)</span>
                        </label>
                      </div>
                    </li>
                    {/* More categories here */}
                  </ul></div></form></div></div>


          <div className="col-md-9" id={styles.main}>
            <div className="row">



              {allArtWorks.map(artwork => (


                <div className="col-md-4" key={artwork._id}>
                  <ArtWork key={artwork._id} artwork={JSON.parse(JSON.stringify(artwork))} />
                </div>

              ))}





            </div>

          </div>
        </div>


      </div>
    </div>


  );
}

export default AllArt;
