import React from 'react'
import AdminChildLayout from '@/components/layouts/AdminChildLayout'
import ArtworkLists from '@/components/templates/p-admin/artworkslist/ArtworkLists'
import modelArtWork from '@/models/ArtWork'
import connectToDB from '@/configs/db'
import { authAdmin } from '@/utils/AuthHelper'
import { redirect } from 'next/navigation'
export  default async function page() {
  const admin=await authAdmin()
  
  if(!admin){
    
    return redirect('/login-register')
  }

  connectToDB();

  const artWorksList= await modelArtWork.find({}).populate('artist_id').populate('categoryID')
  .populate('subjectID').populate('materialID')
  .populate('styleID').populate('materialID').sort({_id:-1}).lean()
  return (
    <AdminChildLayout>
        <ArtworkLists title={'Artwork lists'} artWorksList={JSON.parse(JSON.stringify(artWorksList))}/>
    </AdminChildLayout>
  )
}
