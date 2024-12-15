import React from 'react'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Articles from '@/components/templates/index/articles/Articles'
import Bunner from '@/components/templates/index/bunner/Bunner'
import Lettest from '@/components/templates/index/lettest/Letest'
import Promote from '@/components/templates/index/promote/Promote'


import { authUser } from '@/utils/AuthHelper'


export default async function Home() {

  // is login for navabar
  const user = await authUser()
  


  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Bunner />
      <Lettest />
      {/* <Promote /> if any advertise  */}
      <Articles />
      <Footer />
    </>
  )
}
