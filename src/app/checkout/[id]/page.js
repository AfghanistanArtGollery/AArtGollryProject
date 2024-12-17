
import Footer from "@/components/modules/footer/Footer"
import Navbar from "@/components/modules/navbar/Navbar"
import Stepper from "@/components/modules/stepper/Stepper"
import styles from '@/styles/checkout.module.css'

import Order from "@/components/templates/checkout/order/Order"
import Details from "@/components/templates/checkout/details/Details"

import DiscoutcodBox from "@/components/modules/dicoundcode/DiscoutcodBox"
const page = () => {

    return (
        <>
            <Navbar />
            <Stepper step="checkout" />
            <div className={styles.container} data-aos="fade-up">
                <DiscoutcodBox />


                <main >
                    <div className="row">
                        <div className="col-md-6">

                            <Order />
                        </div>
                        <div className="col-md-6">
                            <Details />
                        </div>
                    </div>


                </main>
            </div>



            <Footer />
        </>
    )
}

export default page
