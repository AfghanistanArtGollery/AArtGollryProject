"use client";
import styles from "@/styles/login-register.module.css";
import { useState } from "react";
import { authTypes } from "@/utils/constants";

import Login from "@/components/templates/login-register/Login";
import Register from "@/components/templates/login-register/Register";
import Image from "next/image";

const login_register = () => {
  
  const [authType, setAuthType] = useState(authTypes.LOGIN);

  const showRegisterForm = () => setAuthType(authTypes.REGISTER);
  const showloginForm = () => setAuthType(authTypes.LOGIN);

  return (
    <div className={styles.login_register}>
      <div className={styles.form_bg} data-aos="fade-up">
        {authType === authTypes.LOGIN ? (
          <Login showRegisterForm={showRegisterForm} />
        ) : (
          <Register showloginForm={showloginForm} />
        )}
      </div>
      <section className={styles.login_regist_img}>
        <Image width={750} height={750}
            
          src="https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/108/1000x1000_medgardenfinal2jpg_26k7w_2030966691.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default login_register;
