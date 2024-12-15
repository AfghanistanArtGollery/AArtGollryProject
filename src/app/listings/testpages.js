"use client"
import React from 'react';

function all_art() {
  return (
    <div className="main-content">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div>
            <ul className="breadcrumb">
              <li><a href="/">Home</a></li>
            </ul>
          </div>
          <div className="all-listings-head-content">
            <h1>All Listings</h1>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container search_result_container">
        <div className="row search_result_wrapper">
          
          {/* Filter Sidebar */}
          <div className="col-md-3 filter_sidebar">
            {/* Mobile Toggle Button */}
            <div className="visible-xs visible-sm mob_toggle">
              <button
                type="button"
                data-toggle="collapse"
                data-target="#side-filters"
                className="btn toggle-filters"
              >
                <i className="fa fa-sliders" aria-hidden="true"></i>
                &nbsp;&nbsp;Toggle filters
              </button>
            </div>

            {/* Filters Collapse Section */}
            <div className="side-wrapper collapse" id="side-filters">
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
                    </ul>
                  </div>



                  {/* Style Filter */}
                  <div className="search-filters">
                    <span className="filter_title">Style</span>
                    <ul className="list-unstyled">
                      <li>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="style[223521]" value="1" />
                            Impressionistic <span className="search-filter-results-count">(5957)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="style[223522]" value="1" />
                            Stylised & Cartoon <span className="search-filter-results-count">(637)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="style[223523]" value="1" />
                            Abstract <span className="search-filter-results-count">(5035)</span>
                          </label>
                        </div>
                      </li>
                      <li>
  <div className="checkbox">
    <label htmlFor="category-id-46817">
      <input type="checkbox" name="category_id[46817]" value="1" raw_label="Pastels" id="category-id-46817" />
      Pastels <span className="search-category-results-count search-count-category-id-46817">(246)</span>
    </label>
  </div>
</li>
<li>
  <div className="checkbox">
    <label htmlFor="category-id-48181">
      <input type="checkbox" name="category_id[48181]" value="1" raw_label="Resin" id="category-id-48181" />
      Resin <span className="search-category-results-count search-count-category-id-48181">(94)</span>
    </label>
  </div>
</li>
<li>
  <div className="checkbox">
    <label htmlFor="category-id-50773">
      <input type="checkbox" name="category_id[50773]" value="1" raw_label="Spray Paint" id="category-id-50773" />
      Spray Paint <span className="search-category-results-count search-count-category-id-50773">(47)</span>
    </label>
  </div>
</li>
<li>
  <div className="checkbox">
    <label htmlFor="category-id-46618">
      <input type="checkbox" name="category_id[46618]" value="1" raw_label="Drawing" id="category-id-46618" />
      Drawing <span className="search-category-results-count search-count-category-id-46618">(831)</span>
    </label>
  </div>
</li>
<li>
  <div className="checkbox">
    <label htmlFor="category-id-47080">
      <input type="checkbox" name="category_id[47080]" value="1" raw_label="Prints" id="category-id-47080" />
      Prints <span className="search-category-results-count search-count-category-id-47080">(437)</span>
    </label>
  </div>
</li>
<li>
  <div className="checkbox">
    <label htmlFor="category-id-47192">
      <input type="checkbox" name="category_id[47192]" value="1" raw_label="Mixed Media" id="category-id-47192" />
      Mixed Media <span className="search-category-results-count search-count-category-id-47192">(925)</span>
    </label>
  </div>
</li>
</ul></div></form></div></div></div></div></div>
                            

        <div className="col-md-9 results_list">
            <div className="row results_list_sort">
                <div className="col-md-12">
                    
<div className="sort-by">
    <select name="sort-by" id="sort-options" onchange="urlInsertParam('sort-by', this.value)">
        <option value="">Sort By</option>
                    <option value="date_online:desc">Newest</option>
                    <option value="price:asc">Lowest Price</option>
                    <option value="price:desc">Highest Price</option>
            </select>
</div>
 </div></div>

            
                <div className="results_list_row">
                    
                    <div className="results_list_item" id="listing-thumbnail-343595">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/q7aevyc11136-peace-once-again" title="Peace Once Again">
        <div className="card_img lazy">
            <span className="product_price">	£545.00 </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/q7aevyc11136-peace-once-again" title="Peace Once Again">
                    Peace Once Again
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Julia Everett</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343602">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/onil3675q7h-panorama-of-porto" title="Panorama of Porto">
        <div className="card_img lazy">
            <span className="product_price">

	
		£195.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/onil3675q7h-panorama-of-porto" title="Panorama of Porto">
                    Panorama of Porto
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Brian Tucker</small>
                </li>
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343611">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/r510ximku3-golden-thread-iii" title="GOLDEN THREAD III">
        <div className="card_img lazy">
            <span className="product_price">

	
		£1,100.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/r510ximku3-golden-thread-iii" title="GOLDEN THREAD III">
                    GOLDEN THREAD III
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Sonja Brzak</small>
                </li>
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343612">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/m3mhzye4e6pk-fishing-in-winter" title="FISHING IN WINTER">
        <div className="card_img lazy">
            <span className="product_price">

	
		£100.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/m3mhzye4e6pk-fishing-in-winter" title="FISHING IN WINTER">
                    FISHING IN WINTER
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Gillian D’Ambrosio</small>
                </li>
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343598">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/j9cf5l9dbvd4-the-bubble" title="The Bubble">
        <div className="card_img lazy">
            <span className="product_price">

	
		£500.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/j9cf5l9dbvd4-the-bubble" title="The Bubble">
                    The Bubble
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Stephen Powlesland</small>
                </li>
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343599">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/c1pbqzqitpw-fossels" title="Fossels">
        <div className="card_img lazy">
            <span className="product_price">

	
		£400.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/c1pbqzqitpw-fossels" title="Fossels">
                    Fossels
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Stephen Powlesland</small>
                </li>
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343610">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/85y6jxvhls8-golden-thread-ii" title="GOLDEN THREAD II">
        <div className="card_img lazy">
            <span className="product_price">

	
		£1,100.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/85y6jxvhls8-golden-thread-ii" title="GOLDEN THREAD II">
                    GOLDEN THREAD II
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Sonja Brzak</small>
                </li>
              <li className="listing-category">
                    <small>Acrylic</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343618">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/zc59sbamiw-sunset-2" title="Sunset #2">
        <div className="card_img lazy">
            <span className="product_price">

	
		£100.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/zc59sbamiw-sunset-2" title="Sunset #2">
                    Sunset #2
                </a>
            </li>
        
                <li className="listing-supplier-name">
                    <small>Lada Kholosho</small>
                </li>

                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343619">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/xhomr57ex9w4-sunset-3" title="Sunset#3">
        <div className="card_img lazy">
            <span className="product_price">

	
		£100.00
	

            </span>
        </div>
    </a>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343593">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/7f0d4qiq5a5q-american-dollar" title="American Dollar">
        <div className="card_img lazy" >
            <span className="product_price">

	
		£1,500.00
	

            </span>
        </div>
    </a>

</div>
<p></p>
                    </div>
















                    
                    
                    <div className="results_list_item" id="listing-thumbnail-343596">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/vgjb1vgt3qvt-in-the-silence" title="In the Silence">
        <div className="card_img lazy">
            <span className="product_price">

	
		£545.00
	

            </span>
        </div>
    </a>

</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343603">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/3e2wij26ffzs-windmills-number-5" title="Windmills number 5">
        <div className="card_img lazy">
            <span className="product_price">

	
		£250.00
	

            </span>
        </div>
    </a>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343617">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/a8aisyk5r42-sunset-1" title="Sunset #1">
        <div className="card_img lazy">
            <span className="product_price">

	
		£100.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/a8aisyk5r42-sunset-1" title="Sunset #1">
                    Sunset #1
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Lada Kholosho</small>
                </li>
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343592">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/ta6yumg20dp-the-muse-mysterious" title=" “The Muse Mysterious”">
        <div className="card_img lazy">
            <span className="product_price">

	
		£750.00<span className="listing-original-price">£1,100.00</span>
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/ta6yumg20dp-the-muse-mysterious" title=" “The Muse Mysterious”">
                     “The Muse Mysterious”
                </a>
            </li>
            
        
                <li className="listing-supplier-name">
                    <small>Monika Ziobrowska</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-215916">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/vebp7sf2fo-worcester-cathedral-9" title="Worcester Cathedral 9">
        <div className="card_img lazy">
            <span className="product_price">

	
		£300.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/vebp7sf2fo-worcester-cathedral-9" title="Worcester Cathedral 9">
                    Worcester Cathedral 9
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Humph Hack</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-341804">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/1mp9jlwijkbr-elegance-anthracite-gold-l-1" title="Elegance Anthracite Gold L 1">
        <div className="card_img lazy" >
            <span className="product_price">

	
		£1,500.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/1mp9jlwijkbr-elegance-anthracite-gold-l-1" title="Elegance Anthracite Gold L 1">
                    Elegance Anthracite Gold L 1
                </a>
            </li>
            
                <li className="listing-supplier-name">
                    <small>Peter Nottrott</small>
                </li>
          
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343588">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/xgr5scxy5xj6-the-four-trees" title="The Four Trees ">
        <div className="card_img lazy">
            <span className="product_price">

	
		£100.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/xgr5scxy5xj6-the-four-trees" title="The Four Trees ">
                    The Four Trees 
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>jeff winterflood</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343589">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/3vr50cvkf5v5-london-3" title="London 3">
        <div className="card_img lazy" >
            <span className="product_price">

	
		£199.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/3vr50cvkf5v5-london-3" title="London 3">
                    London 3
                </a>
            </li>
  <li className="listing-supplier-name">
                    <small>Keith Mcbride </small>
                </li>
                <li className="listing-category">
                    <small>Drawing</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343582">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/a23edyb7wwxl-whispers-of-a-summer-meadow" title="Whispers of a Summer Meadow">
        <div className="card_img lazy">
            <span className="product_price">

	
		£250.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/a23edyb7wwxl-whispers-of-a-summer-meadow" title="Whispers of a Summer Meadow">
                    Whispers of a Summer Meadow
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Lada Kholosho</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343584">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/eyvoyzv015x0-serenade-of-wildflowers" title="Serenade of Wildflowers">
        <div className="card_img lazy">
            <span className="product_price">

	
		£250.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/eyvoyzv015x0-serenade-of-wildflowers" title="Serenade of Wildflowers">
                    Serenade of Wildflowers
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Lada Kholosho</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343586">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/l09pdhfi5n1-in-the-heat-of-the-night" title="In the heat of the night">
        <div className="card_img lazy" >
            <span className="product_price">

	
		£900.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/l09pdhfi5n1-in-the-heat-of-the-night" title="In the heat of the night">
                    In the heat of the night
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Pol Ledent</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Oil</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343583">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/gfqxfduks9r-blossoms-in-the-breeze" title="Blossoms in the Breeze">
        <div className="card_img lazy">
            <span className="product_price">

	
		£250.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/gfqxfduks9r-blossoms-in-the-breeze" title="Blossoms in the Breeze">
                    Blossoms in the Breeze
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Lada Kholosho</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343557">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/n6af6zrpup-snow" title="Snow ">
        <div className="card_img lazy">
            <span className="product_price">
		£120.00

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/n6af6zrpup-snow" title="Snow ">
                    Snow 
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Mathu Bala</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Drawing</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343555">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/og615iqtxbqa-let-it-snow" title="Let it snow!">
        <div className="card_img lazy">
            <span className="product_price">

	
		£189.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/og615iqtxbqa-let-it-snow" title="Let it snow!">
                    Let it snow!
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Dharmishta Patel</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343559">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/2m83r6qa20vu-coloratio-16" title="COLORATIO 16">
        <div className="card_img lazy">
            <span className="product_price">

	
		£350.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/2m83r6qa20vu-coloratio-16" title="COLORATIO 16">
                    COLORATIO 16
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Sonja Brzak</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343560">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/d8uvbx9pbvi-coloratio-17" title="COLORATIO 17">
        <div className="card_img lazy">
            <span className="product_price">

	
		£350.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/d8uvbx9pbvi-coloratio-17" title="COLORATIO 17">
                    COLORATIO 17
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Sonja Brzak</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343579">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/qj8ng16yj0na-christmas-story-5" title="Christmas story #5">
        <div className="card_img lazy">
            <span className="product_price">

	
		£134.90
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/qj8ng16yj0na-christmas-story-5" title="Christmas story #5">
                    Christmas story #5
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Eugenia Gorbacheva</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343548">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/q6tpvj2dgk-made-by-the-sea-2" title="Made by the sea #2">
        <div className="card_img lazy">
            <span className="product_price">

	
		£150.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/q6tpvj2dgk-made-by-the-sea-2" title="Made by the sea #2">
                    Made by the sea #2
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Marta Goldby</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343551">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/o6jdzns96o6-the-night-child-and-christ-are-excited-to-greet-the-unexpected-monument" title="The Night Child and Christ are Excited to Greet the Unexpected Monument">
        <div className="card_img lazy">
            <span className="product_price">

	
		£3,500.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/o6jdzns96o6-the-night-child-and-christ-are-excited-to-greet-the-unexpected-monument" title="The Night Child and Christ are Excited to Greet the Unexpected Monument">
                    The Night Child and Christ are Excited to Greet the Unexpected Monument
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>mark masters</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343547">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/yrscrqgi4z7-evening-sunset-light" title="Evening Sunset Light">
        <div className="card_img lazy" >
            <span className="product_price">

	
		£840.00<span className="listing-original-price">£900.00</span>
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/yrscrqgi4z7-evening-sunset-light" title="Evening Sunset Light">
                    Evening Sunset Light
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Artem Kolesnikov</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343535">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/xc5ixzkcst-sheikh-mohammed-bin-rashid-al-maktoum" title=" Sheikh Mohammed Bin Rashid Al Maktoum">
        <div className="card_img lazy">
            <span className="product_price">

	
		£2,000.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/xc5ixzkcst-sheikh-mohammed-bin-rashid-al-maktoum" title=" Sheikh Mohammed Bin Rashid Al Maktoum">
                     Sheikh Mohammed Bin Rashid Al Maktoum
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>amjad ali talpur</small>
                </li>
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    <div className="results_list_item" id="listing-thumbnail-343538">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/tp910jdsb0nq-between-the-rain" title="Between the Rain">
        <div className="card_img lazy">
            <span className="product_price">

	
		£125.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/tp910jdsb0nq-between-the-rain" title="Between the Rain">
                    Between the Rain
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Christine Ingram</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343546">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/ixz9at0mftv7-robin-redbreast-on-mistletoe" title="Robin Redbreast on Mistletoe ">
        <div className="card_img lazy">
            <span className="product_price">

	
		£100.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/ixz9at0mftv7-robin-redbreast-on-mistletoe" title="Robin Redbreast on Mistletoe ">
                    Robin Redbreast on Mistletoe 
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Margaret Riordan</small>
                </li>

            
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343537">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/mzmlcjlw1pj-coloratio-15" title="COLORATIO 15">
        <div className="card_img lazy" >
            <span className="product_price">

	
		£350.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/mzmlcjlw1pj-coloratio-15" title="COLORATIO 15">
                    COLORATIO 15
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Sonja Brzak</small>
                </li>
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343545">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/h8ouwo1ba6pa-ballet-pas-de-deux" title="Ballet pas de deux">
        <div className="card_img lazy" >
            <span className="product_price">

	
		£120.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/h8ouwo1ba6pa-ballet-pas-de-deux" title="Ballet pas de deux">
                    Ballet pas de deux
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Margaret Riordan</small>
                </li>
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343534">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/bgnrxvu9rk-mbs" title="Mohammed bin Salman ">
        <div className="card_img lazy">
            <span className="product_price">

	
		£2,000.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/bgnrxvu9rk-mbs" title="Mohammed bin Salman ">
                    Mohammed bin Salman 
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>amjad ali talpur</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343513">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/jxe38o973k-the-chronicles-of-clownia" title="The Chronicles of Clownia">
        <div className="card_img lazy">
            <span className="product_price">

	
		£110.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/jxe38o973k-the-chronicles-of-clownia" title="The Chronicles of Clownia">
                    The Chronicles of Clownia
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>K GRICE</small>
                </li>
            
                <li className="listing-category">
                    <small>Drawing</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343514">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/k1aaq00a9qq-the-bottom-of-the-sea" title="The bottom of the sea">
        <div className="card_img lazy">
            <span className="product_price">

	
		£110.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/k1aaq00a9qq-the-bottom-of-the-sea" title="The bottom of the sea">
                    The bottom of the sea
                </a>
            </li>
            
                <li className="listing-supplier-name">
                    <small>K GRICE</small>
                </li>
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343515">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/ppzsulie93b-standing-on-the-edge" title="Standing on the edge ">
        <div className="card_img lazy">
            <span className="product_price">

	
		£110.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/ppzsulie93b-standing-on-the-edge" title="Standing on the edge ">
                    Standing on the edge 
                </a>
            </li>
            
            
                <li className="listing-supplier-name">
                    <small>K GRICE</small>
                </li>
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343512">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/9o46tz21dt-oranges-and-lemons" title="JUICY FRUITS">
        <div className="card_img lazy">
            <span className="product_price">

	
		£250.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/9o46tz21dt-oranges-and-lemons" title="JUICY FRUITS">
                    JUICY FRUITS
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Gillian D’Ambrosio</small>
                </li>
                <li className="listing-category">
                    <small>Watercolours</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343509">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/ltd70pevt2-embracing-the-light" title="Embracing the Light.">
        <div className="card_img lazy">
            <span className="product_price">

	
		£1,000.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/ltd70pevt2-embracing-the-light" title="Embracing the Light.">
                    Embracing the Light.
                </a>
            </li>

                <li className="listing-supplier-name">
                    <small>Vita Schagen</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343508">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/k4kpr9rk0u-urban-solitude" title="Urban Solitude.">
        <div className="card_img lazy">
            <span className="product_price">

	
		£1,700.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/k4kpr9rk0u-urban-solitude" title="Urban Solitude.">
                    Urban Solitude.
                </a>
            </li>

                <li className="listing-supplier-name">
                    <small>Vita Schagen</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343507">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/7ghy0k6fw0j3-nocturnal-harbor-at-night" title="Nocturnal Harbor at night.">
        <div className="card_img lazy">
            <span className="product_price">

	
		£300.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/7ghy0k6fw0j3-nocturnal-harbor-at-night" title="Nocturnal Harbor at night.">
                    Nocturnal Harbor at night.
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Vita Schagen</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343506">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/60hpqp5j7ma-family-s-bond" title="Family's Bond.">
        <div className="card_img lazy">
            <span className="product_price">

	
		£1,150.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/60hpqp5j7ma-family-s-bond" title="Family's Bond.">
                    Family's Bond.
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Vita Schagen</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-224687">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/y0ri7t59bql-jazz-in-the-square" title="Jazz in the Square">
        <div className="card_img lazy">
            <span className="product_price">

	
		£200.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/y0ri7t59bql-jazz-in-the-square" title="Jazz in the Square">
                    Jazz in the Square
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Humph Hack</small>
                </li>
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-221841">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/kocdspf95v-the-sound-of-rushing-water" title="The sound of rushing water">
        <div className="card_img lazy">
            <span className="product_price">

	
		£200.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/kocdspf95v-the-sound-of-rushing-water" title="The sound of rushing water">
                    The sound of rushing water
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Humph Hack</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343504">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/lyfga7dwx9-long-awaited-return" title="Long-Awaited Return.">
        <div className="card_img lazy">
            <span className="product_price">

	
		£1,150.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/lyfga7dwx9-long-awaited-return" title="Long-Awaited Return.">
                    Long-Awaited Return.
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Vita Schagen</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Oil</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343505">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/uu1cywq51es1-place-of-peace" title="Place of Peace.">
        <div className="card_img lazy">
            <span className="product_price">

	
		£1,150.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/uu1cywq51es1-place-of-peace" title="Place of Peace.">
                    Place of Peace.
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Vita Schagen</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Oil</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343503">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/mfpzzq3eqe-homecoming-journey" title="Homecoming Journey.">
        <div className="card_img lazy">
            <span className="product_price">

	
		£1,000.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/mfpzzq3eqe-homecoming-journey" title="Homecoming Journey.">
                    Homecoming Journey.
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Vita Schagen</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Oil</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343480">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/z1ni70blltkb-house-wall" title="House Wall">
        <div className="card_img lazy">
            <span className="product_price">

	
		£1,300.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/z1ni70blltkb-house-wall" title="House Wall">
                    House Wall
                </a>
            </li>
            
                <li className="listing-supplier-name">
                    <small>Kestutis Jauniskis</small>
                </li>
            

            
                <li className="listing-category">
                    <small>Oil</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343484">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/uexhbvoeq9-venetian-gondola-2024" title="Venetian Gondola 2024">
        <div className="card_img lazy">
            <span className="product_price">

	
		£650.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/uexhbvoeq9-venetian-gondola-2024" title="Venetian Gondola 2024">
                    Venetian Gondola 2024
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Lesley blackburn</small>
                </li>
                <li className="listing-category">
                    <small>Oil</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343488">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/65rxp3bcvw-away-from-it-all-3" title="Away From It All 3">
        <div className="card_img lazy">
            <span className="product_price">

	
		£150.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/65rxp3bcvw-away-from-it-all-3" title="Away From It All 3">
                    Away From It All 3
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Aisha Haider</small>
                </li>
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343475">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/1qa1xlfdqsc-moonlight-snow-forest" title="Moonlight Snow Forest">
        <div className="card_img lazy">
            <span className="product_price">

	
		£525.00
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/1qa1xlfdqsc-moonlight-snow-forest" title="Moonlight Snow Forest">
                    Moonlight Snow Forest
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Amanda Horvath</small>
                </li>
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343457">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/rs2ctarps4l-view-from-my-window-devon" title="View from my window ...Devon">
        <div className="card_img lazy">
            <span className="product_price">

	
		£285.00<span className="listing-original-price">£325.00</span>
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/rs2ctarps4l-view-from-my-window-devon" title="View from my window ...Devon">
                    View from my window ...Devon
                </a>
            </li>

                <li className="listing-supplier-name">
                    <small>Radhika kujal</small>
                </li>
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343458">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/aqzsvkun1oo8-walking-down-heartwood-forest" title="walking down Heartwood forest">
        <div className="card_img lazy">
            <span className="product_price">

	
		£385.00<span className="listing-original-price">£435.00</span>
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/aqzsvkun1oo8-walking-down-heartwood-forest" title="walking down Heartwood forest">
                    walking down Heartwood forest
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Radhika kujal</small>
                </li>
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
                    </div>
                    
                    <div className="results_list_item" id="listing-thumbnail-343459">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/dk8smq8go3ib-the-poppies" title="The Poppies">
        <div className="card_img lazy">
            <span className="product_price">

	
		£325.00<span className="listing-original-price">£375.00</span>
	

            </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/dk8smq8go3ib-the-poppies" title="The Poppies">
                    The Poppies
                </a>
            </li>
            
            

            

            
                <li className="listing-supplier-name">
                    <small>Radhika kujal</small>
                </li>
            

            

            
                <li className="listing-category">
                    <small>Acrylic</small>
                </li>
            
            

        </ul>
    </div>
</div>
<p></p>
 </div>
  <p></p>
</div>   
 <div className="results_list_item" id="listing-thumbnail-343337">
<p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/6gcotn9y3gd1-yellow-daisy-love-landscape" title="Yellow daisy love landscape">
        <div className="card_img lazy">
            <span className="product_price">£200.00 </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/6gcotn9y3gd1-yellow-daisy-love-landscape" title="Yellow daisy love landscape">
                    Yellow daisy love landscape
                </a>
            </li>
        </ul>
    </div>
</div>
<p></p>
</div>
 <div className="results_list_item" id="listing-thumbnail-343339">
                        <p></p><div className="card">
    <a href="https://www.artgallery.co.uk/listing/rvlljhqzuuk-carshalton-ponds" title="Carshalton Ponds">
        <div className="card_img lazy">
            <span className="product_price">£150.00 </span>
        </div>
    </a>
    <div className="product_info">
        <ul className="product-information">

            <li className="listing-name">
                <a href="https://www.artgallery.co.uk/listing/rvlljhqzuuk-carshalton-ponds" title="Carshalton Ponds">
                    Carshalton Ponds
                </a>
            </li>
                <li className="listing-supplier-name">
                    <small>Willie Ng</small>
                </li>
                <li className="listing-category">
                    <small>Prints</small>
                </li>
        </ul>
    </div>
</div>
<p></p>
  </div>
  <div className="text-center">
    <nav>
        <ul className="pagination justify-content-center">
            <li className="page-item previous disabled"><a className="page-link"><span aria-hidden="true">&lt;</span></a></li><li className="page-item active"><a className="page-link link" href="">1</a></li><li className="page-item"><a className="page-link link" href="/listing/search?page=2">2</a></li><li className="page-item"><a className="page-link link" href="/listing/search?page=3">3</a></li><li className="page-item"><a className="page-link link" href="/listing/search?page=4">4</a></li><li className="page-item"><a className="page-link link" href="/listing/search?page=5">5</a></li><li className="page-item ellipsis"><a className="page-link link" href="#">...</a></li><li className="page-item"><a className="page-link link" href="/listing/search?page=192">192</a></li><li className="page-item"><a className="page-link link" href="/listing/search?page=193">193</a></li><li className="page-item next"><a className="page-link" rel="next" aria-label="Next" href="/listing/search?page=2"><span aria-hidden="true">&gt;</span></a></li>        </ul>
    </nav>
</div>
</div></div>

);}

export default all_art;














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
    </ul></div>
    </form></div></div>



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
    </ul>
  </div>

  

  {/* Style Filter */}
  <div className="search-filters">
    <span className="filter_title">Style</span>
    <ul className="list-unstyled">
      <li>
        <div className="checkbox">
          <label>
            <input type="checkbox" name="style[223521]" value="1" />
            Impressionistic <span className="search-filter-results-count">(5957)</span>
          </label>
        </div>
      </li>
      <li>
        <div className="checkbox">
          <label>
            <input type="checkbox" name="style[223522]" value="1" />
            Stylised & Cartoon <span className="search-filter-results-count">(637)</span>
          </label>
        </div>
      </li>
      <li>
        <div className="checkbox">
          <label>
            <input type="checkbox" name="style[223523]" value="1" />
            Abstract <span className="search-filter-results-count">(5035)</span>
          </label>
        </div>
      </li>
      <li>
<div className="checkbox">
<label htmlFor="category-id-46817">
<input type="checkbox" name="category_id[46817]" value="1" raw_label="Pastels" id="category-id-46817" />
Pastels <span className="search-category-results-count search-count-category-id-46817">(246)</span>
</label>
</div>
</li>
<li>
<div className="checkbox">
<label htmlFor="category-id-48181">
<input type="checkbox" name="category_id[48181]" value="1" raw_label="Resin" id="category-id-48181" />
Resin <span className="search-category-results-count search-count-category-id-48181">(94)</span>
</label>
</div>
</li>
<li>
<div className="checkbox">
<label htmlFor="category-id-50773">
<input type="checkbox" name="category_id[50773]" value="1" raw_label="Spray Paint" id="category-id-50773" />
Spray Paint <span className="search-category-results-count search-count-category-id-50773">(47)</span>
</label>
</div>
</li>
<li>
<div className="checkbox">
<label htmlFor="category-id-46618">
<input type="checkbox" name="category_id[46618]" value="1" raw_label="Drawing" id="category-id-46618" />
Drawing <span className="search-category-results-count search-count-category-id-46618">(831)</span>
</label>
</div>
</li>
<li>
<div className="checkbox">
<label htmlFor="category-id-47080">
<input type="checkbox" name="category_id[47080]" value="1" raw_label="Prints" id="category-id-47080" />
Prints <span className="search-category-results-count search-count-category-id-47080">(437)</span>
</label>
</div>
</li>
<li>
<div className="checkbox">
<label htmlFor="category-id-47192">
<input type="checkbox" name="category_id[47192]" value="1" raw_label="Mixed Media" id="category-id-47192" />
Mixed Media <span className="search-category-results-count search-count-category-id-47192">(925)</span>
</label>
</div>
</li>
</ul>



























"use client" 
import React, { useState, useEffects } from 'react';
import dynamic from 'next/dynamic';
import style from './page.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


function AllArt() {
  return (
    <div> {/* Wrap the JSX with a single root element */}
    <h1 className="container-flude">All arts</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-3">first




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



 {/* Category Filter */}
 {/* <div className="category_browse_wrapper">
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
                      </li> */}
                      {/* More categories here */}
                    {/* </ul>
                  </div> */}

                  

                  {/* Style Filter */}
                  {/* <div className="search-filters">
                    <span className="filter_title">Style</span>
                    <ul className="list-unstyled">
                      <li>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="style[223521]" value="1" />
                            Impressionistic <span className="search-filter-results-count">(5957)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="style[223522]" value="1" />
                            Stylised & Cartoon <span className="search-filter-results-count">(637)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="style[223523]" value="1" />
                            Abstract <span className="search-filter-results-count">(5035)</span>
                          </label>
                        </div>
                      </li>
                      <li>
  <div className="checkbox">
    <label htmlFor="category-id-46817">
      <input type="checkbox" name="category_id[46817]" value="1" raw_label="Pastels" id="category-id-46817" />
      Pastels <span className="search-category-results-count search-count-category-id-46817">(246)</span>
    </label>
  </div>
</li>
<li>
  <div className="checkbox">
    <label htmlFor="category-id-48181">
      <input type="checkbox" name="category_id[48181]" value="1" raw_label="Resin" id="category-id-48181" />
      Resin <span className="search-category-results-count search-count-category-id-48181">(94)</span>
    </label>
  </div>
</li>
<li>
  <div className="checkbox">
    <label htmlFor="category-id-50773">
      <input type="checkbox" name="category_id[50773]" value="1" raw_label="Spray Paint" id="category-id-50773" />
      Spray Paint <span className="search-category-results-count search-count-category-id-50773">(47)</span>
    </label>
  </div>
</li>
<li>
  <div className="checkbox">
    <label htmlFor="category-id-46618">
      <input type="checkbox" name="category_id[46618]" value="1" raw_label="Drawing" id="category-id-46618" />
      Drawing <span className="search-category-results-count search-count-category-id-46618">(831)</span>
    </label>
  </div>
</li>
<li>
  <div className="checkbox">
    <label htmlFor="category-id-47080">
      <input type="checkbox" name="category_id[47080]" value="1" raw_label="Prints" id="category-id-47080" />
      Prints <span className="search-category-results-count search-count-category-id-47080">(437)</span>
    </label>
  </div>
</li>
<li>
  <div className="checkbox">
    <label htmlFor="category-id-47192">
      <input type="checkbox" name="category_id[47192]" value="1" raw_label="Mixed Media" id="category-id-47192" />
      Mixed Media <span className="search-category-results-count search-count-category-id-47192">(925)</span>
    </label>
  </div>
</li>
</ul></div> */}








        <div className="col-md-9">Second
        <div className='row'>
        <div className='col-md-4'><Image src="images/shahin.jpg" thumbnail /></div>
        <div className='col-md-4'><Image src="images/shahin.jpg" thumbnail /></div>
        <div className='col-md-4'><Image src="images/shahin.jpg" thumbnail /></div>
        </div></div>


</div>
  </div></div>


  ); 
}

export default AllArt;
