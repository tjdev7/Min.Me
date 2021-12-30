import React, { useState } from "react";
import props from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

function NewPost(props) {
  //const edit function
  // const [NewestPost, SetNewestPost] = useState('');

  //  function handleChange(event) {
  //     SetNewestPost(event.target.value);
  //  }

  //    function handleSubmit(event) {
  //     event.preventDefault();
  //     //props. (props.id, NewestPost)
  //     SetNewestPost("");
  //    }

  // const editpost

  //    <input
  //             id={props.id}
  //             value={NewestPost}
  //             onChange={handleChange}
  //         />

  return (
    <div>
      <button>
        <FaEdit />
      </button>
      <input id={props.id} />
      <button>
        <FaTrash />
      </button>
    </div>
  );
}

export default NewPost;
