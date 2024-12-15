
import React from 'react';
import Navbar from '@/components/modules/navbar/Navbar';

import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

import artworkModel from '@/models/ArtWork'
import connectToDB from '@/configs/db';
import MoreProducts from '@/components/templates/product/MoreProducts';
import SwiperArtWorkPics from '@/components/modules/product/SwiperArtWorkPics';
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb';
import Details from '@/components/templates/product/Details';
import MoreInfoes from '@/components/templates/product/MoreInfoes';
import { authUser } from '@/utils/AuthHelper';
async function page({ params }) {
  connectToDB();
  const user =await authUser()
  const artWorkID = params.id;
  const product = await artworkModel.findOne({ _id: artWorkID }).populate(
    "comments"
  ).populate('artist_id').populate('categoryID').populate('subjectID').populate('materialID')
    .populate('styleID');

  console.log('productArt=>', product)

  const relatedProducts = await artworkModel.find({ artist_id: product.artist_id }).lean();

console.log('relatedProducts=>',relatedProducts)

  return (
    <div> {/* Wrap the JSX with a single root element */}
      <Navbar isLogin={user?true:false} />
      <Breadcrumb route={'Artwork'} />
      <div className='container '>
        <div className='row'>

          <div className='col-md-6 d-flex align-items-center'>
            <SwiperArtWorkPics artwork={JSON.parse(JSON.stringify(product))} />
          </div>

          <div className='col-md-6'>


            {/* details artworks linke Buy button */}
            <Details artwork={JSON.parse(JSON.stringify(product))} />

          </div>
          {/* end col-md -6 */}


        </div>


      </div>



      {/* detatiles and description component */}

      <MoreInfoes artwork={JSON.parse(JSON.stringify(product))} />


      <div className="container my-4">


        <div className="text-center mb-4">
          <img src="/images/shahin.jpg" alt="Esmee van Breugel" className="rounded-circle" width="150" height="150" />
        </div>

        <h2 className="text-center mb-4">Other artWorks from {product.artist_id.name}</h2>

        <MoreProducts
          relatedProducts={JSON.parse(JSON.stringify(relatedProducts))}
        />

        <div className="text-center mt-4">
          <a href="/asadshahi/" className="btn btn-primary">See More</a>
        </div>
      </div>






    </div>
  );
}

export default page;
