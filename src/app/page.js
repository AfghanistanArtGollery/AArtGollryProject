import React from 'react'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Articles from '@/components/templates/index/articles/Articles'
import Bunner from '@/components/templates/index/bunner/Bunner'
import Lettest from '@/components/templates/index/lettest/Letest'
import Promote from '@/components/templates/index/promote/Promote'
import modelBlog from '@/models/Blog'
import modelWislist from '@/models/Wishlist'

import { authUser } from '@/utils/AuthHelper'
import { authAdmin } from '@/utils/AuthHelper'

export default async function Home() {

  // is login for navabar
  const user = await authUser()
  const admin = await authAdmin()

  const blogs = await modelBlog.find({}).lean();
  
  let wishlistLength = null;
  if (user) {

    wishlistLength = (await modelWislist.find({ user: user._id }, '_id')).length;

  }



  return (
    <>
      <Navbar isAdmin={admin ? true : false} isLogin={user ? true : false} wishlistLength={wishlistLength} />


      <Bunner />
      <Lettest />
      {/* <Promote /> if any advertise  */}
      <Articles blogs={JSON.parse(JSON.stringify(blogs))} />
      <Footer />
    </>
  )
}
