'use client'
import { useState } from "react";
import styles from "./register.module.css";
import swal from "sweetalert";
import { redirect, useRouter } from "next/navigation";

const Register = ({ showloginForm }) => {

  const router=useRouter()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation states
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  // Function to validate password
  const validatePassword = (password) => {
    setIsValidLength(password.length >= 8);
    setHasUppercase(/[A-Z]/.test(password));
    setHasLowercase(/[a-z]/.test(password));
    setHasNumber(/\d/.test(password));
    setHasSpecialChar(/[^A-Za-z0-9]/.test(password));
  };

  // Function to handle password input changes
  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    validatePassword(inputPassword);
  };

  const signUp = async () => {
    const user = { name, email, phone, password };

    // Ensure all validation criteria are met before proceeding
    if (!isValidLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
      swal({
        title: "Password does not meet requirements",
        buttons: "Ok",
      });
      return;
    }

    const res = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 201) {
      swal({
        title: "Successfully registered",
        buttons: "Ok",
      });
      router.back()
    } else if (res.status === 401) {
      swal({
        title: "User with this email, phone, or name already exists",
        buttons: "Ok",
      });
    } else {
      swal({
        title: "Some issue occurred",
        buttons: "Ok",
      });
    }
  };

  return (
    <>
      <div className={styles.form}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={phone}
          className={styles.input}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone number"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handlePasswordChange}
          value={password}
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        <div className="password-requirements mt-3">
          <ul className=' list-unstyled'>
            <li className={isValidLength ? styles.valid : styles.invalid}>Min. of 8 characters</li>
            <li className={hasUppercase ? styles.valid : styles.invalid}>1 uppercase</li>
            <li className={hasLowercase ? styles.valid : styles.invalid}>1 lowercase</li>
            <li className={hasNumber ? styles.valid : styles.invalid}>1 number</li>
            <li className={hasSpecialChar ? styles.valid : styles.invalid}>1 special character</li>
          </ul>
        </div>

        <button
          onClick={signUp}
          style={{ marginTop: ".7rem" }}
          className={styles.btn}
        >
          Register
        </button>

        <p onClick={showloginForm} className={styles.back_to_login}>
          Back to Login
        </p>
      </div>
      <p className={styles.redirect_to_home}>Cancel</p>
    </>
  );
};

export default Register;
