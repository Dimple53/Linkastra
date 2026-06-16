import { getAboutUser, getAllUsers } from '@/config/redux/action/authAction';
import { getAllPosts } from '@/config/redux/action/postAction';
import DashboardLayout from '@/layout/dashboardLayout';
import UserLayout from '@/layout/userLayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {

  const router = useRouter();

  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  // const [isTokenThere, setIsTokenThere] = useState(false);

 

  // useEffect(() => { 
  //   if (localStorage.getItem("token") == null) {
  //     route.push("/login");
  //   } 
  //   setIsTokenThere(true);
    
  // });

  useEffect(() => {
    if (authState.isTokenThere) {
      console.log("Auth token");
      dispatch(getAllPosts());
      dispatch(getAboutUser({ token: localStorage.getItem("token") }));
    }

    if (!authState.all_profile_fetched) {
        dispatch(getAllUsers());
    }
  }, [authState.isTokenThere]);
  return (
    <UserLayout> 
      <DashboardLayout>
        <div>
          <h1>Dashboard</h1>
        </div>
      </DashboardLayout>
    </UserLayout>
  )
}
