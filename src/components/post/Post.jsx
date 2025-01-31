import React from 'react'
import { MoreVert, Favorite, Comment,ThumbUp  } from '@mui/icons-material'
import './post.css'

function Post(post) {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={post.img} alt="" />
                    <span className="postUsername">{post.author}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.content}</span>
                <img className="postImg" src={post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp htmlColor='blue' className="postIcons"/>
                    <Favorite htmlColor='red' className="postIcons"/>
                    <span className="postLikeCounter">{post.likes} likes</span>
                </div>
                <div className="postBottomRight">
                    <Comment className="commentIcon"/>
                    <span className="postCommentText">{post.comments} comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post

