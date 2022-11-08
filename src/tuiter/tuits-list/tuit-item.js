import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";


const TuitItem = (
  {
    post
  }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id))
  }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img width={35} className="rounded-circle" src={`/image/${post.image}`} alt={`${post.image}`}/>
        </div>
        <div className="col-11">
          <i className="bi bi-x-lg float-end"
             onClick={() => deleteTuitHandler(post._id)}></i>
          <div><span className="fw-bolder"> {post.userName}</span> <span><img width={"14"}
                                                                              src={"/image/badge.png"}></img></span> {`${post.handle} • ${post.time}`}
          </div>
          <div>{post.tuit}</div>
          <div className={"row mt-2"}>
            <div className={"col-3"}>
              <a href="#" className="text-decoration-none">
                <img width={"14"} src={"/image/comments.png"}></img>
                <span className={"text-black"}> {post.replies}</span>
              </a>
            </div>
            <div className={"col-3"}>
              <a href="#" className="text-decoration-none">
                <img width={"14"} src={"/image/repost.png"}></img>
                <span className={"text-black"}> {post.retuits}</span>
              </a>
            </div>
            <div className={"col-3"}>
              <div className="text-decoration-none" onClick={() => dispatch(updateTuitThunk(
                {
                  ...post,
                  likes: !post.liked ? post.likes + 1 : post.likes - 1,
                  liked: !post.liked
                }
              ))}>
                <img width={"14"} src={post.liked ? "/image/like.png" : "/image/unliked.png"}></img>
                <span className={"text-black"}> {post.likes}</span>
              </div>
            </div>
            <div className={"col-3"}>
              <a href="#" className="text-decoration-none">
                <img width={"14"} src={"/image/share.png"}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;