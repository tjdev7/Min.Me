import React, { useState } from "react";
import '../App.css';
import { v4 as uuidv4 } from "uuid";
import CreatePost from "./CreatePost.js"
import NewPost from "./NewPost.js"
import PropTypes from 'prop-types';

//function NewPost 
// <NewPost
// id key name, , edit, delete

function Dashboard(props) {

  //   function DashAdd(postNameData) {
  //   const NewPostAdd = { id: "Posting" + uuidv4(), name:postNameData };
  //     SetNewPosts([...posts , NewPostAdd]);
  // }
  //   function delPost(id) {
  //     const updateStream = posts.filter(post => id !== post.id) 
  //     SetNewPosts(updateStream);
  //   }

    // function changePost() {
    //   const = {};
    //   SetNewPosts([]);
    // }

    // const [posts, SetNewPosts] = useState(props.posts);
    // const DataStream = posts.map(post => (
    //   <NewPost
    //     key={post.id}
    //     id={post.id}
    //     delPost={delPost}
    //     // editPost={editPost}

    //   />
    // ));
        return (
          <div>
        {/* <CreatePost DashAdd={DashAdd}/> */}

          {/* {DataStream} */}

          </div>
        );
    }  

export default Dashboard;

