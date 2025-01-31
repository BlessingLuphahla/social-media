import React from 'react'
import personOne from '../../assets/images/person/apollo.jpg'
import postPic from '../../assets/images/person/apollo.jpg'
import { MoreVert, Favorite } from '@mui/icons-material'
import './post.css'

function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={personOne} alt="" />
                    <span className="postUsername">Apollo</span>
                    <span className="postDate">1 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">This is a post</span>
                <img className="postImg" src={postPic} alt="" />
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

