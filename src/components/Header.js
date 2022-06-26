import React, { useState } from "react";
import CommentSection from "./CommentSection"

function Header({ video }) {
  const [isUpvote, setIsUpvote] = useState(video.upvotes)
  const [isDownvote, setIsDownvote] = useState(video.downvotes)
  const [showComments, setShowComments] = useState(true)

  const handleUpvote = () => {
    let increaseVote = isUpvote + 1
    setIsUpvote(increaseVote)
  }

  const handleDownvote = () => {
    let increaseVote = isDownvote + 1
    setIsDownvote(increaseVote)
  }

  const handleCommentSection = () => {
    setShowComments(!showComments)
  }

  const buttonText = showComments ? "Hide Comments" : "Show Comments"

  const showCommentSection = showComments ? <CommentSection video={video} showComments={showComments} setShowComments={setShowComments} /> : null

  return (
    <div>
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button
        onClick={handleUpvote}
      >{isUpvote} 👍 </button>
      <button
        onClick={handleDownvote}
      >{isDownvote} 👎</button>
      <br></br>
      <br></br>
      <button
        onClick={handleCommentSection}
      >{buttonText}</button>
      {showCommentSection}
    </div>
  )
}

export default Header

