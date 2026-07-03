import { getAboutUser, getAllUsers } from '@/config/redux/action/authAction';
import { createPost, getAllPosts } from '@/config/redux/action/postAction';
import DashboardLayout from '@/layout/dashboardLayout';
import UserLayout from '@/layout/userLayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css'
import { BASE_URL } from '@/config';

export default function Dashboard() {

  const router = useRouter();

  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  const postState = useSelector((state) => state.post)

  useEffect(() => {
    if (authState.isTokenThere) {
      console.log("Auth token");
      dispatch(getAllPosts());
      dispatch(getAboutUser({ token: localStorage.getItem("token") }));
    }

    if (!authState.all_profiles_fetched) {
        dispatch(getAllUsers());
    }
  }, [authState.isTokenThere]);

  const[postContent, setPostContent] = useState("");
  const[fileContent, setFileContent] = useState();

  const handleUpload = async() => {
    await dispatch(createPost({file: fileContent, body: postContent}))
  }

  if (authState.user) {
    return (
      <UserLayout>
        <DashboardLayout>
          <div className={styles.scrollComponent}>
            <div className={styles.wrapper}>
              <div className={styles.createPostContainer}>
                <img className={styles.profilePic} src={`${BASE_URL}/${authState.user.userId.profilePicture}`} alt="profile" />
                <textarea onChange={(e) => setPostContent(e.target.value)} value={postContent} placeholder={"What's in your mind?"} className={styles.postTextArea} id=""></textarea>
                <label htmlFor="fileUpload">
                  <div className={styles.Fab}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
              
                </label>
                <input onChange={(e) => setFileContent(e.target.files[0])} type="file" hidden id="fileUpload" />
                {postContent.length > 0 &&
                  <div onClick={handleUpload} className={styles.uploadButton}>Post</div>
                }
              </div>
              <div className={styles.postContainer}>
                {postState.posts.map((post) => {
                  return (
                    <div key={post._id} className={styles.singleCard}>
                      <div className={styles.singleCard_profileContainer}>
                        <img className={styles.profilePic} src={`${BASE_URL}/${post.userId.profilePicture}`} alt="profile" />
                        <div className={styles.singleCard_profileName}>
                          <h3>{post.userId.name}</h3>
                        </div>
                      </div>
                    </div>
                  )
                })}
              
              </div>
            </div>
          </div>
        </DashboardLayout>
      </UserLayout>
    )
  } else {
    return (
      <UserLayout>
        <DashboardLayout>
          <h2>Loading...</h2>
        </DashboardLayout>
      </UserLayout>
    )}
  }


