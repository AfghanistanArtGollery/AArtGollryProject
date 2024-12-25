'use client'
import React from 'react'
import { useState } from 'react'
import styles from './DiscoutcodBox.module.css'
export default function DiscoutcodBox() {
    const [showDiscountForm, setShowDiscountForm] = useState(false)
    
    const discountBox=()=>{
        
            setShowDiscountForm(prev=>!prev)
        
    }
    return (

        <section className={styles.discount}>
            <div>
                <p>Do you have a discount code?</p>
                <span onClick={discountBox}>{showDiscountForm?'Hide discount form':"Click here to enter the code"}</span>
            </div>
            {showDiscountForm && (
                <div className={styles.discount_container}>
                    <p>If you have a discount code, please enter it in the box below</p>
                    <div>
                        <input type="text" placeholder="Discount code" className={styles.input} />
                        <button>Apply Coupon</button>
                    </div>
                </div>
            )}
        </section>

    )
}
