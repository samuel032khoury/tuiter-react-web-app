import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
  {
    active = 'home'
  }
) => {
  return (
    <div className="list-group">
      <a href={"#"} className="list-group-item">Tuiter</a>
      <Link to={"/tuiter"} className={`list-group-item ${active === 'home'? 'active' : ''}`}>Home</Link>
      <Link to={"explore"} className={`list-group-item ${active === 'explore'? 'active' : ''}`}>Explore</Link>
      <a href={"#"} className={`list-group-item ${active === 'notifications'? 'active' : ''}`}>Notifications</a>
      <a href={"#"} className={`list-group-item ${active === 'messages'? 'active' : ''}`}>Messages</a>
      <a href={"#"} className={`list-group-item ${active === ''? 'bookmarks' : ''}`}>Bookmarks</a>
      <a href={"#"} className={`list-group-item ${active === ''? 'lists' : ''}`}>Lists</a>
      <a href={"#"} className={`list-group-item ${active === ''? 'profile' : ''}`}>Profile</a>
      <a href={"#"} className={`list-group-item ${active === ''? 'more' : ''}`}>More</a>
    </div>);
};
export default NavigationSidebar;