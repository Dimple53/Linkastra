import UserLayout from '@/layout/userLayout'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./styles.module.css"
import { loginUser, registerUser } from '@/config/redux/action/authAction';

export default function LoginComponent() {
  

  const authState = useSelector((state) => state.auth);
  
  const router = useRouter();

  const dispatch = useDispatch();

  const [userLoginMethod, setUserLoginMethod] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (authState.loggedIn) {
      router.push("/dashboard");
    }
  }, [authState.loggedIn, router]);


  const handleRegister = () => {
    console.log("registering...");
    dispatch(registerUser({ username, name, email, password }));
  }
  return (
    <UserLayout>
      
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.cardContainer__left}>
            <p className={styles.cardLeft__heading}>{userLoginMethod ? "Sign In" : "Sign Up"}</p>
            <p style={{ color: authState.isError ? 'red' : 'green' }}>
              {authState.message.message}
            </p>
           
            <div className={styles.inputContainers}>
    
              <div className={styles.inputRow}>
                <input 
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.inputField} 
                  type="text" 
                  placeholder='Username' 
                />
                <input 
                  onChange={(e) => setName(e.target.value)}
                  className={styles.inputField} 
                  type="text" 
                  placeholder='Name' 
                />
              </div>
                 
              <input 
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField} 
                type="email" 
                placeholder='Email'
              />
              <input 
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField} 
                type="password" 
                placeholder='Password' 
              />

              <div onClick={() => {
                if (userLoginMethod) {
                  // Handle login logic here
                } else {
                    handleRegister();
                }
              }} className={styles.buttonWithOutline} >
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
