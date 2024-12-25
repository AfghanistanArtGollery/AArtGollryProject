"use client";
import React, { useEffect, useState } from "react";
import styles from "./table.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

function AddDiscount() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");
  const [maxUse, setMaxUse] = useState("");
  const [artworks, setArtworks] = useState([]);
  const [artWorkID,setArtID]=useState('')
  
console.log('artworks',artworks)
  useEffect(() => {
    const getProducts = async () => {
      const res= await fetch('/api/artworks')
 
        const artData= await res.json()
        
        setArtworks(artData.data)
    
     

    };

    getProducts();
  }, []);

  
  const addDiscount = async () => {
    // Validation (You) ✅

    const discount = {
      code,
      percent,
      maxUse,
      artWorkID
    };

    const res = await fetch("/api/discounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discount),
    });

    if (res.status === 201) {
      swal({
        title: "Discount code created successfully",
        icon: "success",
        buttons: "Got it",
      }).then(() => {
        setCode("");
        setPercent("");
        setMaxUse("");
        router.refresh();
      });
    }
  };

  return (
    <section className={styles.discount}>
      <p>Add New Discount Code</p>
      <div className={styles.discount_main}>
     
        <div>
          <label>Discount Percentage</label>
          <input
            value={percent}
            onChange={(event) => setPercent(event.target.value)}
            placeholder="Please enter discount percentage"
            type="text"
            className={styles.input}
          />
        </div>

        <div>
          <label>Discount Code</label>
          <input
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Please enter discount code"
            type="text"
            className={styles.input}

          />
        </div>

        
        <div>
          <label>Artworks(Optional)</label>

          <select
            className="form-control"
            onChange={(event) => setArtID(event.target.value)}

          >
            <option value={-1}>Please select a artwork</option>
            {artworks.map((art) => (
              <option key={art._id} value={art._id}>
                {art.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Max Usage</label>
          <input
            value={maxUse}
            onChange={(event) => setMaxUse(event.target.value)}
            placeholder="Max usage of discount code"
            type="text"
            className={styles.input}

          />
        </div>
      </div>


      <button onClick={addDiscount}>Add</button>
    </section>
  );
}

export default AddDiscount;
