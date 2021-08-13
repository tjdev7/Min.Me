import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function CreatePost(props) {

    // const [postNameData, SetNameData] = useState('');

    // prevents page from reloading after a form submission
    // function handleSubmit(e) {
    // e.preventDefault();
    // props.DashAdd(postNameData)
    // SetNameData("");
    // }

    // function handleChange(e) {
    //     SetNameData(e.target.value);
    // }

  return (
    // <form onSubmit={handleSubmit} >
    //   <input 
    //     autoComplete="off"
    //     onChange={handleChange}
    //     type="text"
    //     value={postNameData}
    //   />

    // <button>
    //   <FaPlusCircle />
    //    Submit
    //   </button>
    // </form>
  );
}

export default CreatePost;
