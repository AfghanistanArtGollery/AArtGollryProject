"use client";

import swalAlert from "@/utils/helperFunction";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

function AddToWishlist({ artWorkID }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const res = await fetch("/api/auth/me");

      if (res.status === 200) {
        const data = await res.json();
        setUser({ ...data });
      }
    };

    authUser();
  }, []);

  const addToWishlist = async (event) => {
    event.preventDefault();
    if (!user?._id) {
      return swalAlert(
        "To add to your wishlist, please log in first",
        "error",
        "Got it"
      );
    }

    const wish = {
      user: user._id,
      product: artWorkID,
    };

    const res = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wish),
    });


    if (res.status === 201) {
      swalAlert("The product has been added to your wishlist", "success", "Got it");
    }
  };

  return (
    <div onClick={addToWishlist}>
      <CiHeart />
      <a href="/">Add to Wishlist</a>
    </div>
  );
}

export default AddToWishlist;
