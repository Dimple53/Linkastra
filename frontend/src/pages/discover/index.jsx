import { BASE_URL } from '@/config';
import { getAllUsers } from '@/config/redux/action/authAction';
import DashboardLayout from '@/layout/dashboardLayout'
import UserLayout from '@/layout/userLayout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css'

export default function Discover() {
  
  const authState = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authState.all_profiles_fetched) {
      dispatch(getAllUsers());
    }
  }, []);
  
  return (
    <UserLayout>
         
      <DashboardLayout>
        <div>
          <h1>Discover</h1>
          <div className={styles.allUserProfile}>
            {authState.all_profiles_fetched && authState.all_users.map((user) => {
              return (
                <div className={styles.userCard} key={user._id}>
                  <img className={ styles.userCard__image} src={`${BASE_URL}/${user.userId.profilePicture}`} alt="profile" />
                  <div>
                    <h2>{user.userId.name}</h2>
                    <p>@{user.userId.username}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
   
      </DashboardLayout>
   
   
   
    </UserLayout>
  )
}
