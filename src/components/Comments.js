import React from "react";

function Comments({ username, comment }) {

  return(
    <div>
      <h3>{username}</h3>
      <p>{comment}</p>
    </div>
  )
}

export default Comments