"use client";
import Link from "next/link";
import styles from "./table.module.css";
import totalStyles from "./totals.module.css";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { countryData } from "@/utils/stateData";
import Select from "react-select";
import Image from "next/image";
import swalAlert from "@/utils/helperFunction";

const countryOptions = countryData();

const Table = () => {

  const [cart, setCart] = useState([]);
  const [discount, setDisCount] = useState('');

  const [totalPrice, setTotalPrice] = useState(0);

  // State to handle selected country and city
  const [stateSelectedOption, setStateSelectedOption] = useState(null);
  const [citySelectedOption, setCitySelectedOption] = useState(null);
  const [changeAddress, setChangeAddress] = useState(false);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cartart")) || [];
    setCart(localCart);
  }, []);

  useEffect(calcTotalPrice, [cart]);

  function calcTotalPrice() {
    let price = 0;

    if (cart.length) {
      price = cart.reduce(
        (prev, current) => prev + current.price * current.count,
        0
      );
      setTotalPrice(price);
    }

    setTotalPrice(price);
  }

  const applyCoupon = async () => {
    // Validation (You) ✅

    const res = await fetch("api/discounts/use", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: discount }),
    });

    if (res.status === 404) {
      return swalAlert("The entered discount code is invalid", "error", "Try Again");
    } else if (res.status === 422) {
      return swalAlert("The entered discount code has expired", "error", "Try Again");
    } else if (res.status === 200) {
      const discountCode = await res.json();
      const newPrice = totalPrice - (totalPrice * discountCode.percent) / 100;
      setTotalPrice(newPrice);
      return swalAlert("Discount code applied successfully", "success", "Got it");
    }
  };



  const handleCountryChange = (selectedCountry) => {
    setStateSelectedOption(selectedCountry);
    setCitySelectedOption(null); // Reset city selection
  };

  const handleCityChange = (selectedCity) => {
    setCitySelectedOption(selectedCity);
  };

  // Get cities for the selected country
  const cities = stateSelectedOption ? stateSelectedOption.cities : [];

const removeArtwork=()=>{
  swal({
    title:'are you sure',
    icon:'warning',
    button:'yes'
  }).then(()=>{
    localStorage.removeItem('cartart')

    window.location.reload(); // Refresh the page
   

  })
}

  return (
    <>
      {cart.map((item) => (
        < div className="row">

          <div className={`col-md-4 mt-4  order-md-1 order-2 totalStyles.totals`}>
            <p className={totalStyles.totals_title}>Shopping Cart Total</p>

            <div className={totalStyles.subtotal}>
              <p>Subtotal</p>
              <p>205,000 AFN</p>
            </div>

            <p className={totalStyles.motor}>
              Delivery: <strong> 30,000 </strong>
            </p>
            <div className={totalStyles.address}>
              <p>Shipping</p>
              <span>Amirica cofornia.</span>
            </div>
            <p
              onClick={() => setChangeAddress((prev) => !prev)}
              className={totalStyles.change_address}
            >
              Change Address
            </p>
            {changeAddress && (
              <div className={totalStyles.address_details}>
                {/* Country Selection */}
                <Select
                  value={stateSelectedOption}
                  onChange={handleCountryChange}
                  isClearable={true}
                  placeholder="Select Country"
                  options={countryOptions}
                />
                {/* City Selection */}
                {stateSelectedOption && (
                  <Select
                    value={citySelectedOption}
                    onChange={handleCityChange}
                    isClearable={true}
                    placeholder="Select City"
                    options={cities.map(city => ({ label: city, value: city }))}
                  />
                )}
                <input type="text" placeholder="Postal Code" />
                <button onClick={() => setChangeAddress(false)}>Update</button>
              </div>
            )}

            <div className={totalStyles.total}>
              <p>Total</p>
              <p>${totalPrice.toLocaleString()} </p>
            </div>

            <Link href={`/checkout/${item.id}`}>
              <button className={totalStyles.checkout_btn}>
                Proceed to Checkout
              </button>
            </Link>
          </div>





          <div key={item.id} className={` col-md-8  order-md-2 order-1 styles.tabel_container`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Artwork</th>
                  <th>Price</th>
                  <th>Img</th>
                  <th>Remove</th>


                </tr>
              </thead>

              <tbody>

                <tr>


                  <td> <Link href={"/"}>{item.name}</Link></td>
                  <td className={styles.price}>
                    ${item.price.toLocaleString()} 
                  </td>
                  <td >
                    <Image
                      width={150}
                      height={100}
                      src={item.img[0]}
                      alt={item.name}
                    />

                  </td>

                  <td>
                    <IoMdClose onClick={removeArtwork} className={styles.delete_icon} />
                  </td>
                </tr>

              </tbody>

            </table>

            <section>
              <button className={styles.update_btn}>Update Cart</button>
            </section>
            <div className="d-flex  mt-3 justify-content-between align-items-center">
              <button className={`btn ${styles.set_off_btn}`} onClick={applyCoupon}>Apply Coupon</button>
              <input
                className="form-control w-75 p-10"
                value={discount}
                onChange={(event) => setDisCount(event.target.value)}
                type="text"
                placeholder="Discount Code"
              />
            </div>


          </div>









        </div>
      ))}
    </>
  );
};

export default Table;
