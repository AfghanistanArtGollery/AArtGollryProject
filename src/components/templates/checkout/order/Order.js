"use client";
import { useEffect, useState } from 'react';
import styles from './order.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';



const Order = () => {
    const [showZarinPallAlert, setShowZarinPallAlert] = useState(false);
    const [artwork, setArtwork] = useState([])

    // get id from url 
    const { id } = useParams()
    const artWorkID = id
    useEffect(() => {
        const getArtworkDateils = async () => {

            const res = await fetch(`/api/artworks/${artWorkID}`)
            if (res.status === 200) {
                const data = await res.json()
                setArtwork(data.data)
            } else {
                throw new Error('not feacthed data')
            }

        }
        getArtworkDateils()

    }, [])


    return (
        <div className={styles.order}>
            
            <main className={styles.main}>
            <p className={styles.title}>Your Order</p>
                <div>
                    <p>Subtotal</p>
                    <p>Artwork</p>
                </div>
                <div>
                    <p>${artwork.price}</p>
                    <p className={styles.product_name}>{artwork.name}</p>
                </div>
                <div>
                    <p>30$</p>
                    <p>Discount</p>
                </div>
                <div>
                    <p>Delivery Fee: <strong>$200</strong></p>
                    <p>Shipping</p>
                </div>
                <div>
                    <div>
                        <h2>${(artwork.price) * 2}</h2>
                        <p>(Includes <strong>$120</strong> Dolors Shipping)</p>
                    </div>
                    <h3>Total</h3>
                </div>
            </main>



            <div className={styles.transaction}>
                <div>
                    <input onClick={() => setShowZarinPallAlert(false)} type="radio" name="payment_method" value="melli" />
                    <label>Crypto= Binaance ID</label>
                    {/* <img width={24} height={40} src="https://set-coffee.com/wp-content/plugins/WooCommerce-melli/images/logo.png" alt="Bank Meli" /> */}
                </div>
                <div>
                    <input onClick={() => setShowZarinPallAlert(true)} type="radio" name="payment_method" value="zarinpal" />
                    <label>MasterCard Payment Gateway</label>
                    {/* <img width={40} height={40} src="https://set-coffee.com/wp-content/plugins/zarinpal-woocommerce-payment-gateway/assets/images/logo.png" alt="ZarinPal" /> */}
                </div>

                {showZarinPallAlert && (
                    <div className={styles.paymentBox}>
                        <p>Secure payment via all Master cards system cards through mastercard gateway</p>
                    </div>
                )}
                
                <div className={styles.warning}>
                    <p>Your personal information will be used for order processing, customer support, and other purposes as explained in our <strong>Privacy Policy</strong>.</p>
                </div>
                <div className={styles.accept_rules}>
                    <input type="checkbox" id="accept" />
                    <p>I have read and accept the <strong>Terms and Conditions</strong> of the website. <span>*</span></p>
                </div>
                {/* <Link href={'/complete-order'}>
                    <button className={styles.submit}>Submit Order</button>
                </Link> */}
            </div>
        </div>
    );
}

export default Order;
