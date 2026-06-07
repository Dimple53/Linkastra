import { getAboutUser } from '@/config/redux/action/authAction';
import { getAllPosts } from '@/config/redux/action/postAction';
import DashboardLayout from '@/layout/dashboardLayout';
import UserLayout from '@/layout/userLayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {

  const route = useRouter();

  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  const [isTokenThere, setIsTokenThere] = useState(false);

 

  useEffect(() => { 
    if (localStorage.getItem("token") == null) {
      route.push("/login");
    } 
    setIsTokenThere(true);
    
  });

  useEffect(() => {
    if (isTokenThere) {
      dispatch(getAllPosts());
      dispatch(getAboutUser({ token: localStorage.getItem("token") }));
    }
  }, [isTokenThere]);
  return (
    <UserLayout>
      
      <DashboardLayout>
        <h1>Dashboard</h1>

      </DashboardLayout>



    </UserLayout>
  )
}
