import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import UserLayout from "@/layout/userLayout";

const inter = Inter({subsets: ["latin"]});

export default function Home() {

  const router = useRouter();

  return (
    <UserLayout>
      
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.mainContainer__left}>
            <p>Connect with Friends without Exaggeration</p>
            <p>A true social media platform, with stories no blufs!</p>
            {/* <p>Linkastra is a social media platform designed to foster genuine connections and meaningful interactions. We believe in creating a space where users can connect with friends, share their thoughts, and engage in authentic conversations without the noise of exaggeration. Join us today and experience a social media platform that values real connections over superficial interactions.</p> */}
          
            <div onClick={() => {
              router.push("/login");
            }} className={styles.buttonJoin}>
              <p>Join Now</p>
            </div>
          </div>
          <div className={styles.mainContainer__right}>
            <img src="/images/homemain_connection.png" alt="" />
          </div>
        </div>
      </div>
    
      {/* <h2>Welcome to Linkastra</h2> */}
      
    </UserLayout>
  );
}
