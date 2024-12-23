"use client" 
import Image from 'next/image';
import React, { useState, useEffects } from 'react';



function AllArt() {
  return (
    <div> {/* Wrap the JSX with a single root element */}
    <h1 className="container-flude">All arts</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-3">




{/* Filters Collapse Section */}

              <ul className="result_category_list">
                <li><a href="/listing/category/painting">Painting</a></li>
                <li><a href="/listing/category/drawing">Drawing</a></li>
                <li><a href="/listing/category/digital-art">Digital Art</a></li>
                <li><a href="/listing/category/sculpture">Sculpture</a></li>
                <li><a href="/listing/category/mosaic">Mosaic</a></li>
                <li><a href="/listing/category/collage">Collage</a></li>
                <li><a href="/listing/category/ceramic">Ceramic</a></li>
                <li><a href="/listing/category/photograph">Photograph</a></li>
                <li><a href="/listing/category/prints">Prints</a></li>
                <li><a href="/listing/category/mixed-media">Mixed Media</a></li>
              </ul>


              {/* Price Filter */}
              <div id="listingFilters">
                <form method="get" id="listingFiltersForm" role="form" action="/listings">
                  <input type="hidden" name="price_range[min]" value="100" />
                  <input type="hidden" name="price_range[max]" value="29000" />
                  
                  <div className="price_filter_side">
                    <span className="filter_title">Price</span>
                    <div id="price-ranger-slider" className="noUi-target noUi-ltr noUi-horizontal">
                      <div className="noUi-base">
                        <div className="noUi-origin" style={{left: "0%"}}>
                          <div className="noUi-handle noUi-handle-lower">
                            <div className="noUi-tooltip">£100</div>
                          </div>
                        </div>
                        <div className="noUi-connect"></div>
                        <div className="noUi-origin" style={{left: "100%"}}>
                          <div className="noUi-handle noUi-handle-upper">
                            <div className="noUi-tooltip">£29,000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="price-filters-values">
                      <input name="price[min]" type="hidden" value="100" />
                      <input name="price[max]" type="hidden" value="29000" />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="category_browse_wrapper">
                    <span className="filter_title category_browse">Categories</span>
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
                      {/* More categories here */}
                    </ul></div></form></div></div>


<div className="col-md-9">
  <div className="row">
    <div className="col-md-4">
      <div className="image-container">
        <Image width={50} height={50} src="/images/shahin.jpg" thumbnail />
        <h3>Flowers</h3>
        <p>Ali Ahmadi</p>
        <div className="action-buttons">
          <button className="like-btn">Like</button>
          <button className="unlike-btn">Unlike</button>
          <button className="view-btn">View</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="image-container">
        <Image width={50} height={50} src="/images/shahin.jpg" thumbnail />
        <h3>Flowers</h3>
        <p>Ali Ahmadi</p>
        <div className="action-buttons">
          <button className="like-btn">Like</button>
          <button className="unlike-btn">Unlike</button>
          <button className="view-btn">View</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="image-container">
        <Image width={50} height={50} src="/images/shahin.jpg" thumbnail />
        <h3>Flowers</h3>
        <p>Ali Ahmadi</p>
        <div className="action-buttons">
          <button className="like-btn">Like</button>
          <button className="unlike-btn">Unlike</button>
          <button className="view-btn">View</button>
        </div>
      </div>
    </div>
  </div>
</div>



</div>
  </div></div>


  ); 
}

export default AllArt;
