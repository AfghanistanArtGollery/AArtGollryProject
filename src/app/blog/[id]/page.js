import React from 'react'
import modelBlog from '@/models/Blog'
import Navbar from '@/components/modules/navbar/Navbar'
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import parse from 'html-react-parser';
export default async function page({ params }) {
    const blogID = params.id
    const blog = await modelBlog.findOne({ _id: blogID }).lean()
    return (

        <>
            <Navbar />
            <Breadcrumb route='blog'/>
            <div className="container">
           
                {/* {isClient && parse(artwork.longDescription)} */}
                {parse(blog.content)}
            </div>


        </>
    )
}
