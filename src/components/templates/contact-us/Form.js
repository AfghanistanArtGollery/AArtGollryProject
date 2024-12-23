"use client";
import { useState } from "react";
import styles from "./form.module.css";

import swalAlert from "@/utils/helperFunction";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = async (event) => {
    event.preventDefault();

    // Validation (You)

    const contact = {
      name,
      email,
      phone,
      company,
      message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (res.status === 201) {
      setEmail("");
      setName("");
      setCompany("");
      setPhone("");
      setMessage("");
      swalAlert("Your message has been successfully submitted", "success", "Got it");
    }
  };

  return (
    <form className={styles.form}>
      <span>Contact Us Form</span>
      <p>You can fill out the form below to contact us</p>
      <div className={styles.groups}>
        <div className={styles.group}>
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label>Email Address</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className={styles.groups}>
        <div className={styles.group}>
          <label>Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label>Company Name</label>
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </div>
      </div>
      <div className={styles.group}>
        <label>Your Request</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          cols="30"
          rows="3"
        ></textarea>
      </div>
      <button onClick={submitMessage}>Submit</button>
    </form>
  );
};

export default Form;
