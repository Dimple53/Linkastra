import UserLayout from '@/layout/userLayout'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./styles.module.css"
import { loginUser, registerUser } from '@/config/redux/action/authAction';
import { register } from 'next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup';

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
  });


  const handleRegister = () => {
    console.log("Registering user...");
    dispatch(registerUser({ email, password, name, username }));
  }
  return (
    <UserLayout>
      
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.cardContainer__left}>
            <p className={styles.cardLeft__heading}>{userLoginMethod ? "Sign In" : "Sign Up"}</p>
            {authState.message.message}
           
            <div className={styles.inputContainers}>
    
              <div className={styles.inputRow}>
                <input 
                  placeholder='Username' 
                  className={styles.inputField} 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                  placeholder='Name' 
                  className={styles.inputField} 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <input 
                placeholder='Email' 
                className={styles.inputField} 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input 
                placeholder='Password' 
                className={styles.inputField} 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
