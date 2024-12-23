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
    <div className='row container '>
      <div className='col-12   col-md-4 'data-aos="fade-up">
        {authType === authTypes.LOGIN ? (
          <Login showRegisterForm={showRegisterForm} />
        ) : (
          <Register showloginForm={showloginForm} />
        )}
      </div>
      
      <div className={`col-12 col-md-6 ${styles.img_login_ragister}`}>
        <Image width={800} height={750}
            
          src="https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/108/1000x1000_medgardenfinal2jpg_26k7w_2030966691.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default login_register;
