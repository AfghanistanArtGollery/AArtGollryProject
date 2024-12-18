import React from 'react'
import styles from '@/styles/not-found.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className='container'>
            <div className={styles.contents}>
                <Image width={500} height={500} src={'/images/404.webp'}/>
            </div>
            <div className={styles.texts}>
                <p>Page Not Found :))</p>
                <Link href="/">Back to Home Page</Link>
            </div>
        </div>
    );
}
