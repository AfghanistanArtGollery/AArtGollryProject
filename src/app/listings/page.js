
import React from 'react';
import Navbar from '@/components/modules/navbar/Navbar';
import styles from './listing.module.css'
import connectToDB from '@/configs/db';
import modelArtwork from '@/models/ArtWork'
import Link from 'next/link';
import { authUser } from '@/utils/AuthHelper';
import ArtWork from '@/components/modules/artwork/Artwork';
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb';
async function AllArt() {
  connectToDB();
  const user = await authUser()
  const allArtWorks = await modelArtwork.find({}).sort({_id:-1}).populate('artist_id').lean()


  const lengthPainting = allArtWorks.filter(artwork =>
    artwork.categoryID.title === 'Painting'
  ).length;
  const lengthDrawing = allArtWorks.filter(artwork =>
    artwork.categoryID.title === 'Drawing'
  ).length;
  const lengthSculpture = allArtWorks.filter(artwork =>
    artwork.categoryID.title === 'Sculpture'
  ).length;
  const lengthPrints = allArtWorks.filter(artwork =>
    artwork.categoryID.title === 'Prints'
  ).length;
  return (
    <div> {/* Wrap the JSX with a single root element */}
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route="All lists" />


      <div className="container">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-3">

            {/* Filters Collapse Section */}


            <ul className={styles.result_category_list}>
              <li><Link href="/listings/category/painting">Painting</Link></li>
              <li><Link href="/listings/category/drawing">Drawing</Link></li>
              <li><Link href="/listings/category/prints">Printing</Link></li>
              <li><Link href="/listings/category/sculpture">Sculpture</Link></li>
              <li><Link href="/listings/category/photograph">Photograph</Link></li>
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
                          Painting <span className="search-category-results-count">({lengthPainting})</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46625]" value="1" />
                          Drawing <span className="search-category-results-count">({lengthDrawing})</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46626]" value="1" />
                          Sculpture <span className="search-category-results-count">({lengthSculpture})</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="category_id[46626]" value="1" />
                          Printing <span className="search-category-results-count">({lengthPrints})</span>
                        </label>
                      </div>
                    </li>


                    {/* More categories here */}
                  </ul>

                </div>
              </form>
            </div>
          </div>


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
