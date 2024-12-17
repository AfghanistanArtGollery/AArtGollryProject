"use client"
import { useEffect } from 'react';
import styles from './details.module.css'
import Select from 'react-select';
import { useState } from 'react';
import { countryData } from "@/utils/stateData";
import { useParams } from 'next/navigation';
import { FaBitcoin, FaCreditCard } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import swal from 'sweetalert';
const countryOptions = countryData();

const Details = () => {

    // get id from Url artwork id
    const { id } = useParams()

    const artWorkID = id;

    const [stateSelectedOption, setStateSelectedOption] = useState(null);
    const [citySelectedOption, setCitySelectedOption] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [showCryptoAlert, setShowCryptoAlert] = useState(false);

    const handleCountryChange = (selectedCountry) => {
        setStateSelectedOption(selectedCountry);
        setCitySelectedOption(null); // Reset city selection
    };

    const handleCityChange = (selectedCity) => {
        setCitySelectedOption(selectedCity);
    };

    const cities = stateSelectedOption ? stateSelectedOption.cities : [];


    // payment method
    const handlePaymentMethodChange = (SelectedPaymentMetood) => {
        setPaymentMethod(SelectedPaymentMetood.value);
        if (SelectedPaymentMetood.value === 'crypto') {
            setShowCryptoAlert(true)
        } else {
            setShowCryptoAlert(false)
        }
    };

    // console.log('handlePaymentMethodChange=>',handlePaymentMethodChange)
    // console.log('paymentMethod=>',paymentMethod)

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Collecting form data
        const formData = {
            artwork_id: artWorkID,
            last_name: event.target.last_name.value,
            first_name: event.target.first_name.value,
            country: stateSelectedOption?.value,
            city: citySelectedOption?.value,
            street_address: event.target.street_address.value,
            postal_code: event.target.postal_code.value,
            mobile_number: event.target.mobile_number.value,
            email: event.target.email.value,
            order_notes: event.target.order_notes.value,
            payment_details: paymentMethod
        };

        console.log('formdata=>', formData)
        // Sending form data to the API
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.status == 201) {
                swal({
                    title: 'Order submit successfully',
                    icon: "success",

                    buttons: 'OK',
                })

                console.log('Order submitted successfully:', data);
                // You can add logic here to redirect or show a success message
            } else {
                console.error('Error submitting order:', data.message);
            }
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    // Customizing the option label to add an icon alongside the label
    const customOptionLabel = (option) => {
        switch (option.value) {
            case 'crypto':
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FaBitcoin style={{ marginRight: '10px' }} /> {option.label}
                    </div>
                );
            case 'mastercard':
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <FontAwesomeIcon
                            icon={faCcMastercard}
                            style={{ marginRight: '10px', fontSize: '20px', color: '#f7a400' }}
                        />
                        {option.label}
                    </div>
                );
            case 'visacard':
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <FontAwesomeIcon icon={faCcVisa} size="2x" style={{ marginRight: '10px' }} />
                        {option.label}
                    </div>
                );
            default:
                return option.label;
        }
    };

    return (
        <div className={styles.details}>
            <p className={styles.details_title}>Billing Details</p>

            <form className={styles.form} onSubmit={handleSubmit} >
                <div className={styles.groups}>
                    <div className={styles.group}>
                        <label>First Name <span>*</span></label>
                        <input name="first_name" type="text" required />
                    </div>
                    <div className={styles.group}>
                        <label>Last Name <span>*</span></label>
                        <input name="last_name" type="text" required />
                    </div>

                </div>

                <div className={styles.group}>
                    <label>State<span>*</span></label>
                    <Select
                        value={stateSelectedOption}
                        onChange={handleCountryChange}
                        isClearable={true}
                        placeholder="Select State"
                        options={countryOptions}
                    />
                </div>
                <div className={styles.group}>
                    <label>City<span>*</span></label>
                    <Select
                        value={citySelectedOption}
                        onChange={handleCityChange}
                        isClearable={true}
                        placeholder="Select City"
                        options={cities.map(city => ({ label: city, value: city }))}
                    />
                </div>
                <div className={styles.group}>
                    <label>Street Address<span>*</span></label>
                    <input name="street_address" type="text" required />
                </div>
                <div className={styles.group}>
                    <label>Postal Code (No spaces)<span>*</span></label>
                    <input name="postal_code" type="text" required />
                </div>
                <div className={styles.group}>
                    <label>Mobile Number <span>*</span></label>
                    <input name="mobile_number" type="text" required />
                </div>

                <div className={styles.group}>
                    <label>Email <span>*</span></label>
                    <input name="email" type="email" required />
                </div>

                <div className={styles.destination}>
                    <label>Order Notes (Optional)</label>
                    <textarea name="order_notes" cols="30" rows="8" placeholder='If you have any comments about your order, please enter them here'></textarea>
                </div>

                <div>

                    <Select

                        options={[
                            { label: 'Crypto(USDT,Bitcoin,BinanceID..)', value: 'crypto' },
                            { label: 'MasterCard', value: 'mastercard' },
                            { label: 'VisaCard', value: 'visacard' }
                        ]}
                        onChange={handlePaymentMethodChange}
                        placeholder='Select payment Method'
                        formatOptionLabel={customOptionLabel} //optial lable lieke image or icon

                    />
                    {showCryptoAlert && (
                        <div className={styles.paymentBox}>
                            <p>You can payment using crypto currency like BitCoin or USDT Or BinanceID</p>
                        </div>
                    )}




                </div>

                <button type="submit" className={styles.submit}>Submit Order</button>
            </form>
        </div>
    );
}

export default Details;
