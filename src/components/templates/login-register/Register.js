'use client';
import { useState } from "react";
import styles from "./register.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import registerValidation from "../../../../validations/RegisterValidation";

const Register = ({ showloginForm }) => {

  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});

  // Validation states for password strength
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const validatePassword = (password) => {
    setIsValidLength(password.length >= 8);
    setHasUppercase(/[A-Z]/.test(password));
    setHasLowercase(/[a-z]/.test(password));
    setHasNumber(/\d/.test(password));
    setHasSpecialChar(/[^A-Za-z0-9]/.test(password));
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    validatePassword(inputPassword);
  };

  const signUp = async () => {
    const user = { name, email, phone, password, confirmPassword };

    try {
      // first check this
      await registerValidation.validate(user, {
        abortEarly: false,
      });
      // Proceed with sign-up request if validation passes
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
        router.back();
      } else if (res.status === 422) {
        swal({
          title: "The username or email or phone exist already !!",
          buttons: "Try Again",
        });
      } else {
        swal({
          title: "Some issue occurred",
          buttons: "Ok",
        });
      }
    } catch (err) {
      let errors = err.inner.reduce(
        (acc, err) => ({
          ...acc,
          [err.path]: err.message,
        }),
        {}
      );
      setError(errors);  // Set all errors to display unter the input fields
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
        {error.name && <p className={styles.error}>{error.name}</p>}
        
        <input
          value={phone}
          className={styles.input}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone number"
        />
        {error.phone && <p className={styles.error}>{error.phone}</p>}
        
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          type="email"
          placeholder="Email"
        />
        {error.email && <p className={styles.error}>{error.email}</p>}
        
        <input
          onChange={handlePasswordChange}
          value={password}
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        {error.password && <p className={styles.error}>{error.password}</p>}
        
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          className={styles.input}
          type="password"
          placeholder="Confirm Password"
        />
        {error.confirmPassword && <p className={styles.error}>{error.confirmPassword}</p>}
        
        <div className="password-requirements mt-3">
          <ul className="list-unstyled">
            <li className={isValidLength ? styles.valid : styles.invalid}>Min. of 8 characters</li>
            <li className={hasUppercase ? styles.valid : styles.invalid}>1 uppercase</li>
            <li className={hasLowercase ? styles.valid : styles.invalid}>1 lowercase</li>
            <li className={hasNumber ? styles.valid : styles.invalid}>1 number</li>
            <li className={hasSpecialChar ? styles.valid : styles.invalid}>1 special character</li>
          </ul>
        </div>

        <button onClick={signUp} className={styles.btn}>Register</button>
        <p onClick={showloginForm} className={styles.back_to_login}>Back to Login</p>
      </div>
    </>
  );
};

export default Register;
