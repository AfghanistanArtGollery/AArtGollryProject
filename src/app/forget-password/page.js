'use client';
import React, { useState } from "react";
import styles from "@/styles/forgetPassword.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Check your email for the reset link.");
      } else {
        setMessage("Error sending email. Please try again.");
      }
    } catch (error) {
      setMessage("Error sending email. Please try again.");
    }
  };

  return (
    <div className={styles.forgot_password}>
      <div data-aos="fade-up" className={styles.bg}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.submit_button}>
            Reset Password
          </button>
        </form>
        {message && <p>{message}</p>}
        <Link href={"/login-register"} className={styles.redirect_to_home}>
          Back to Login
        </Link>
      </div>
      <section>
        <img
          src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
          alt="Illustration of brain and caffeine connection"
        />
      </section>
    </div>
  );
};

export default ForgotPassword;
