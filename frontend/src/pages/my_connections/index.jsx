import DashboardLayout from '@/layout/dashboardLayout'
import UserLayout from '@/layout/userLayout'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyConnectionRequest } from '@/config/redux/action/authAction'
import styles from './styles.module.css'
import { BASE_URL } from '@/config'
import { useRouter } from 'next/router'

export default function MyConnectionsPage() {
  
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getMyConnectionRequest({ token: localStorage.getItem("token") }));
  }, []);
  
  const router = useRouter();
  useEffect(() => {
    if(authState.connectionRequest.length != 0) {
      console.log(authState.connectionRequest);
    }
  }, [authState.connectionRequest]);

  return (
    <UserLayout>
         
      <DashboardLayout>
        <div style={{display:"flex", flexDirection:"column", gap:"1.7rem"}}>
          <h1>My Connections</h1>
          {authState.connectionRequest.length === 0 && <p>No connection requests found.</p>}
          {authState.connectionRequest.length != 0 && authState.connectionReques.filter((connection) => connection.status_accepted === null).map((user, index) => {
            return (
              <div onClick={() => (
                router.push(`/view_profile/${user.userId.username}`)
              )} className={styles.userCard} key={index}>
                <div style={{display:"flex", alignItems:"center", gap:"1.2rem", justifyContent:"space-between"}}>
                  <div className={styles.profilePicture}>
                    <img src={`${BASE_URL}/${user.userId.profilePicture}`} alt="Profile Picture" />
                  </div>
                  <div className={styles.userInfo}>
                    <h3>{user.userId.name}</h3>
                    <p>@{user.userId.username}</p>
                  </div>
                  <button onClick={(e) => {
                    // Handle accept button click
                    e.stopPropagation(); // Prevent the click event from propagating to the parent div
                    dispatch(AcceptConnection({
                      token: localStorage.getItem("token"),
                      connectionId: user.userId._id, 
                      action: "accept"}));
                  }} className={styles.connectedButton}>Accept</button>
                                
                </div>
              </div>
            );
          })}

          <h4>My Network</h4>
           {authState.connectionReques.filter((connection) => connection.status_accepted != null).map((user, index) => {
            return (
              <div onClick={() => (
                router.push(`/view_profile/${user.userId.username}`)
              )} className={styles.userCard} key={index}>
                <div style={{display:"flex", alignItems:"center", gap:"1.2rem", justifyContent:"space-between"}}>
                  <div className={styles.profilePicture}>
                    <img src={`${BASE_URL}/${user.userId.profilePicture}`} alt="Profile Picture" />
                  </div>
                  <div className={styles.userInfo}>
                    <h3>{user.userId.name}</h3>
                    <p>@{user.userId.username}</p>
                  </div>
                </div>
              </div>
            );
          })}


        </div>
   
      </DashboardLayout>
   
   
   
    </UserLayout>
  )
}
