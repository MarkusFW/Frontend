import React, { useState } from "react";
import "./App.css";
import { auth, db } from "./firebase/init";
import { collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import Nav from "./Components/Nav.jsx";

function App() {
  const [user, setUser] = useState({});

  async function updatePosts() {
    const hardCodedId= "r0zaS828mXC5xK8uZbD1"
    const postRef = doc(db, "posts", hardCodedId )
    const post =  await getPostById(hardCodedId)
    const newPost = {
      ...post,
      title: "Land a 7000000K Job"
    }
    console.log(newPost)
    updateDoc(postRef, newPost)
   }

   function deletePost() {
    const hardCodedId= "Z8qqUSXIWKdyR29iZ2TI"
    const postRef = doc(db, "posts", hardCodedId )
    deleteDoc(postRef)
  }

  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"));
    const posts = docs.map((elem) => ({ ...elem.data(), id: elem.id })); // data is a function we get from firebase that makes the collection into javascript // spread operator "..." return a copy of the object
    console.log(posts);
  }

  function createPost() {
    const post = {
      title: "Finish Interview section",
      describe: "Do Finish Frontend Simplfied",
      uid: "1"
    };
    addDoc(collection(db, "posts"), post);
  }

  async function getPostById(id) {
    const postRef = doc(db, "posts", id )
    const postSnap = await getDoc(postRef)
    return postSnap.data()
  }

  async function getPostByUid () {
    const postCollectionRef = await query (
      collection(db, "posts"),
      where("uid", "==", user.id)
    )
    const { docs } = await getDocs(postCollectionRef);
    console.log(docs.map(doc => doc.data()))
  }

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} auth={auth} />
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={getPostById}>Get Post By Id</button>
      <button onClick={getPostByUid}>Get Post By Uid</button>
      <button onClick={updatePosts}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default App;
