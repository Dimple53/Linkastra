import UserLayout from '@/layout/userLayout'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from "./styles.module.css"

export default function LoginComponent() {
  

  const authState = useSelector((state) => state.auth);
  
  const router = useRouter();
  const [userLoginMethod, setUserLoginMethod] = useState(false);

  useEffect(() => {
    if (authState.loggedIn) {
      router.push("/dashboard");
    }
  });



  return (
    <UserLayout>
      
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.cardContainer__left}>
            <p className={styles.cardLeft__heading}>{userLoginMethod ? "Sign In" : "Sign Up"}</p>
            <div className={styles.inputContainers}>
              <div className={styles.inputRow}>
                <input placeholder='Username' className={styles.inputField} type="text" />
                <input placeholder='Name' className={styles.inputField} type="text" />
              </div>
              <input placeholder='Email' className={styles.inputField} type="email" />
              <input placeholder='Password' className={styles.inputField} type="password" />

              <div className={styles.buttonWithOutline} >
                <p>{userLoginMethod ? "Sign In" : "Sign Up"}</p>
              </div>
                <p>{userLoginMethod ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}</p>
            
            </div>
          
          
          
          </div>
          <div className={styles.cardContainer__right}>
          </div>
        
        
        </div>
      </div>
    </UserLayout>
  )
}


