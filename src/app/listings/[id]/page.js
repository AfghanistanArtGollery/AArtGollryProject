
import React from 'react';
import Navbar from '@/components/modules/navbar/Navbar';

import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

import commentModel from '@/models/Comment'
import artworkModel from '@/models/ArtWork'
import connectToDB from '@/configs/db';
import MoreArtWorks from '@/components/templates/artwork/MoreArtWorks';
import SwiperArtWorkPics from '@/components/modules/artwork/SwiperArtWorkPics';
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb';
import Details from '@/components/templates/artwork/Details';
import MoreInfoes from '@/components/templates/artwork/MoreInfoes';
import { authUser } from '@/utils/AuthHelper';
import NotFound from '@/app/not-found';
import mongoose from 'mongoose';
// import CommentForm from '@/components/templates/artwork/CommentForm';
import Comments from '@/components/templates/artwork/Comments';
async function page({ params }) {
  connectToDB();

  const user =await authUser()

   

  const artWorkID = params.id;
  if(!mongoose.Types.ObjectId.isValid(artWorkID)){
        return <NotFound/>
  }

  const artWork = await artworkModel.findOne({ _id: artWorkID }).populate(
    "comments"
  ).populate('artist_id').populate('categoryID').populate('subjectID').populate('materialID')
    .populate('styleID');
   
    // if the id is not in database
    if (artWork==null){
      return <NotFound/>
  
     }

  const relatedArtWorks = await artworkModel.find({ artist_id: artWork.artist_id }).lean();
  const commentsData= await commentModel.find({artWorkID:artWorkID}).populate('artWorkID').lean()

 
  return (
    <div> {/* Wrap the JSX with a single root element */}
      <Navbar isLogin={user?true:false} />
      <Breadcrumb route={'Artwork'} />
      <div className='container '>
        <div className='row'>

          <div className='col-md-6 d-flex align-items-center'>
            <SwiperArtWorkPics artwork={JSON.parse(JSON.stringify(artWork))} />
          </div>

          <div className='col-md-6'>


            {/* details artworks linke Buy button */}
            <Details artwork={JSON.parse(JSON.stringify(artWork))} />

          </div>
          {/* end col-md -6 */}


        </div>


      </div>



      {/* detatiles and description component */}

      <MoreInfoes artwork={JSON.parse(JSON.stringify(artWork))} />

      <div className="container">
      <Comments comments={JSON.parse(JSON.stringify(commentsData)) } artWorkID={artWorkID}/>

      </div>
      <hr />


      <div className="container my-4">


        <div className="text-center mb-4">
          <img src="/images/shahin.jpg" alt="Esmee van Breugel" className="rounded-circle" width="150" height="150" />
        </div>

        <h2 className="text-center mb-4">Other artWorks from {artWork.artist_id.name}</h2>


        <MoreArtWorks
          relatedArtWorks={JSON.parse(JSON.stringify(relatedArtWorks))}
        />

        <div className="text-center mt-4">
          <a href="/asadshahi/" className="btn btn-primary">See More</a>
        </div>
      </div>






    </div>
  );
}

export default page;
