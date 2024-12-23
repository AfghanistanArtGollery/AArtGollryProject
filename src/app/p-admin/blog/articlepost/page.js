import AdminChildLayout from '@/components/layouts/AdminChildLayout'
import AddArticle from '@/components/templates/p-admin/blogs/AddArticle'
import React from 'react'
AdminChildLayout
export default function page() {
  return (
    <AdminChildLayout>
        <AddArticle/>
    </AdminChildLayout>
    
  )
}
