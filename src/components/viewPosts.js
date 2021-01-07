import React, { useState, Component } from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { GoComment } from "react-icons/go";

import './style.css'
/* Image Import */
import post1 from "./images/post/post1.jpg"
import profile1 from "./images/profile/profile1.jpg"

function Post({profileImage, userName, timeStamp, caption, postImage, likes, shares, comments}) {
    const {show, alterShow} = useState(false)
    return (
        <div className="post">
            <div className="post_head">
                <img src={profileImage} alt="profile" />
                <div className="profile_info"><p>{userName}</p><p>{timeStamp}</p></div>
                <div className="post_menu"><BiDotsHorizontalRounded /></div>
            </div>
            <div className="caption">{caption}</div>
            <div className="post_image"><img src={postImage} alt="post" /></div>
            <div className="reaction_value_bar"><span><AiFillLike className="likeicon" />{likes}</span><span onClick={()=>alterShow(!show)}>{comments.length} Comments</span><span>{shares} Shares</span></div>
            <div className="reaction_button"><span><AiOutlineLike className="icon" /> Like</span><span><GoComment className="icon" /> Comment</span><span><RiShareForwardLine className="icon" /> Share</span></div>
            <div className="comment_tray">{show?comments.map(comment=>(<Comment {...comment} key={comment} />)):null}</div>
        </div>
    )
}

/*
{
    profile:"..///",
    username:"name"
    str:"Very nice"
}
*/

function Comment({profile, username, str}) {
    return (
        <div className="detail_comment">
            <img src={profile} alt="profile" />
            <div className="comment_info"><span>{username}</span><span>{str}</span></div>
        </div>
    )
}


class viewPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                data:[
                    {
                        profileImage:profile1,
                        userName:"Papai Parua",
                        timeStamp:"November 12, 2020 at 3:00 PM",
                        caption:"What a charming evening...",
                        postImage:post1,
                        likes:221,
                        shares:39,
                        comments:[
                            {
                                profile:"..///",
                                username:"name",
                                str:"Very nice"
                            },
                            {
                                profile:"..///",
                                username:"name",
                                str:"Very nice"
                            },
                            {
                                profile:"..///",
                                username:"name",
                                str:"Very nice"
                            },
                            {
                                profile:"..///",
                                username:"name",
                                str:"Very nice"
                            }
                        ]
                    }
                ]
        }
    }
    
    render() {
        const { data } = this.state
        return (
            <div className="sub_post">
                {data.map(post=><Post {...post} key={post} />)}
            </div>
        )
    }
}

export default viewPosts
