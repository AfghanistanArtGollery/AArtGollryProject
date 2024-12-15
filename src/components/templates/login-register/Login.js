import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import swalAlert from "@/utils/helperFunction";

import { useRouter } from "next/navigation";

const Login = ({ showRegisterForm }) => {
const router=useRouter()

  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = { email, password };

  const signin = async () => {
    const res = await fetch('http://localhost:3000/api/auth/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    const data = await res.json();
    if (res.status === 200) {
      swal({
        title: "Sucessfully Logined",
        icon: "success",
        buttons: "Goto user panel",
      }).then(() => {
        router.replace("p-user");
      });
    }else{
      swal({
        title: "Your password or email is wrong",
        icon: "error",
        buttons: "OK",
      }).then(() => {
        router.replace("p-user");
      });
    }
  };


  return (
    <>
      <div className={styles.form}>
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
          className={styles.input}
          type="text"
          placeholder="Email/Phone Number"
        />
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          className={styles.input}
          type="password"
          placeholder="Password"
        />
      

        <div className={styles.checkbox}>
          <input type="checkbox" name="" id="" />
          <p className="d-flex align-items-center">Remember me</p>
        </div>
        <button onClick={signin} className={styles.btn}>Log In</button>
        <Link href={"/forget-password"} className={styles.forgot_pass}>
          Forgot your password?
        </Link>
        <span>Don't have an account?</span>
        <button onClick={showRegisterForm} className={styles.btn_light}>Register</button>
      </div>
      <Link href={"/"} className={styles.redirect_to_home}>
        Cancel
      </Link>
    </>
  );
};

export default Login;
