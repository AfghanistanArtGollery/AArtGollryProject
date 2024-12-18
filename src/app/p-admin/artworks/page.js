import React from 'react'
import AdminChildLayout from '@/components/layouts/AdminChildLayout'
import ArtworkLists from '@/components/templates/p-admin/artworks/ArtworkLists'
import modelArtWork from '@/models/ArtWork'
export  default async function page() {
  const artWorksList= await modelArtWork.find({}).populate('artist_id').populate('categoryID')
  .populate('subjectID').populate('materialID')
  .populate('styleID').populate('materialID').lean()
console.log(artWorksList)
  return (
    <AdminChildLayout>

        <ArtworkLists title={'Artwork lists'} artWorksList={JSON.parse(JSON.stringify(artWorksList))}/>
    </AdminChildLayout>
  )
}
