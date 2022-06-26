import React from "react";
import Comments from "./Comments"

function CommentSection({ video }) {

  const numberOfComments = video.comments.length

  return (
    <div>
      <h2>{numberOfComments} Comments</h2>
      {video.comments.map(vid => (
        <Comments
          key={vid.id}
          username={vid.user}
          comment={vid.comment}
        />
      ))}
    </div>
  )
}

export default CommentSection