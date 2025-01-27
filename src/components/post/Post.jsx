import React from 'react'
import './post.css'

function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="https://via.placeholder.com/40" alt="" />
                    <span className="postUsername">John Doe</span>
                    <span className="postDate">1 min ago</span>
                </div>
                <div className="postTopRight">
                    <span className="postTopRightIcon">...</span>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">This is a post</span>
                <img className="postImg" src="" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.png" alt="" />
                    <img className="likeIcon" src="/assets/heart.png" alt="" /> 
                    <span className="postLikeCounter">1 like</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">1 comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post

