import React from 'react'
import Link from 'next/link'
import { FaChevronLeft } from "react-icons/fa6";

import ArtWork from '@/components/modules/artwork/Artwork';
import modelArtWork from '@/models/ArtWork'

import styles from './letest.module.css'

export default async function Latest({ products }) {
  let lettstArtworks = await modelArtWork.find({status:true}).populate('artist_id').populate('categoryID').sort({ _id: -1 }).limit(8)
  
  return (
    <div className={`container styles.container`}>
      <section className={styles.title}>
        <div>
          <p>Latest ArtWorks</p>
          <span>Latest ArtWorks</span>
        </div>
        <Link className={styles.link} href={"/listings"}>
          View All <FaChevronLeft />{" "}
        </Link>
      </section>
      <main data-aos="fade-up" className={styles.products}>

      {lettstArtworks.map((artwork) => (
          <ArtWork key={artwork._id} artwork={JSON.parse(JSON.stringify(artwork))} />
        ))}
       
      </main>
    </div>
  )
}
