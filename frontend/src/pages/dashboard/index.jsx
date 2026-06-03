import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function dashboard() {

  const route = useRouter();

  useEffect(() => { 
    if (localStorage.getItem("token")== null) {
      route.push("/login");
    }
  });

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
