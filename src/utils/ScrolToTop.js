'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/scrolToTop.module.css'
import { MdKeyboardArrowUp } from "react-icons/md";


export default function ScrolToTop() {

      const [isVisible,setIsVisible]=useState(false)


      const toggleVisibility=()=>{
        window.scrollY>132?setIsVisible(true):setIsVisible(false)

      }
      useEffect(()=>{
         window.addEventListener('scroll',toggleVisibility)        
          
         return ()=> window.removeEventListener('scroll',toggleVisibility)

      },[])

    const scrollToTop=()=>{
       window.scrollTo({
        top:0,
        behavior:"smooth"
       })
    }

    return (
        <button
          className={isVisible ? styles.buttonVisible : styles.button}
          onClick={scrollToTop}
        >
          <MdKeyboardArrowUp />
        </button>
      ); 
}
