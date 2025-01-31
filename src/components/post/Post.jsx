import React from 'react'
import personOne from '../../assets/images/person/apollo.jpg'
import postPic from '../../assets/images/person/liu-kang.jpg'
import { MoreVert, Favorite } from '@mui/icons-material'
import './post.css'

function Post(post) {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={post.img} alt="" />
                    <span className="postUsername">{post.author}</span>
                    <span className="postDate">1 min ago</span>
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
                    <Favorite className="likeIcon"/>
                    <span className="postLikeCounter">{post.likes} likes</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comments} comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post

