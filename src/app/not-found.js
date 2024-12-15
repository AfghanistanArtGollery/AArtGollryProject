import React from 'react'
import styles from '@/styles/not-found.module.css'
import Link from 'next/link';
export default function notFound() {

    return (
      <div>
        <div className={styles.contents}>
          <p className={styles.left_number}>4</p>
          <div className={styles.mug}></div>
          <p className={styles.right_number}>4</p>
        </div>
        <div className={styles.texts}>
          <p>صفحه مورد نظر یافت نشد :((</p>
          <Link href="/">برگشت به صفحه اصلی</Link>
        </div>
      </div>
    );
  
}



