import AdminChildLayout from '@/components/layouts/AdminChildLayout'
import AddArticle from '@/components/templates/p-admin/blogs/AddArticle'
import React from 'react'
import { authAdmin } from '@/utils/AuthHelper'
import { redirect } from 'next/navigation'
export default async function page() {
  const admin=await authAdmin()
  
  if(!admin){
    
    return redirect('/login-register')
  }
  return (
    <AdminChildLayout>
        <AddArticle/>
    </AdminChildLayout>
    
  )
}
