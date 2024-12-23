import React from 'react'
import Navbar from '@/components/modules/navbar/Navbar';
import styles from './blog.module.css';
import modelBlog from '@/models/Blog'
import { authUser } from '@/utils/AuthHelper';
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
async function  page() {
  const user =await authUser()
  const blogs= await modelBlog.find({}).sort({_id:-1}).lean()
  return (
    <div>
      <Navbar isLogin={user?true:false}/>
      <div className="container-fluid" style={{height: "160px", alignItems:'center', backgroundColor: 'lightgray', textAlign: "center", paddingTop: "70px"}}>
        <h3>Blog</h3>
      </div>
      

      <div className="container">

        {blogs.map((blog)=>(
           <div key={blog._id} className="row">
           {/* Post 1 */}
           <div className="col-md-3 col-sm-12 mb-4">
             <Link href={`blog/${blog._id}`} className={styles.post_box_content}>
               <div className={styles.image}>
                 <Image width={300} height={100} alt="Art with a Message" src={blog.img} className="img-fluid" />
               </div>
             </Link>
           </div>
           <div className="col-md-9 col-sm-12 mb-4">
             <div className={styles.summary}>
               <div className="post-category-tag">{blog.title}</div>
               <h2><span>AsadShahi</span></h2>
               <p>{blog.excerpt}</p>
             </div>
           </div>
         </div>
 
        ))}

       
      
        
        {/* Pagination */}
        <div className="text-center">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">&lt;&lt; Prev</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="/blog?page=2">2</a></li>
              <li className="page-item"><a className="page-link" href="/blog?page=3">3</a></li>
              <li className="page-item"><a className="page-link" href="/blog?page=4">4</a></li>
              <li className="page-item"><a className="page-link" href="/blog?page=5">5</a></li>
              <li className="page-item">
                <a className="page-link" href="/blog?page=2">Next &gt;&gt;</a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  );
}

export default page;
