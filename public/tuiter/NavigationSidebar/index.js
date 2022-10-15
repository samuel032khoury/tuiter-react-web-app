const NavigationSidebar = () => {

  return (`
  <div class="list-group">
                <div class="list-group-item">
                    <i class="fab fa-twitter m-xl-1"></i>
                </div>
                <a class="list-group-item list-group-item-action" href="../rawPages/home.html">
                    <i class="fa fa-home m-xl-1" aria-hidden="true"></i>
                    <span class="d-none d-xl-inline">
                        Home
                    </span>
                </a>
                <a class="list-group-item list-group-item-action active" href="#">
                    <i class="fa fa-hashtag m-xl-1" aria-hidden="true"></i>
                    <span class="d-none d-xl-inline">
                        Explore
                    </span>
                </a>
                <a class="list-group-item list-group-item-action" href="../rawPages/emptyPages/notifications.html">
                    <i class="fa fa-bell m-xl-1" aria-hidden="true"></i>
                    <span class="d-none d-xl-inline">
                        Notifications
                    </span>
                </a>
                <a class="list-group-item list-group-item-action" href="../rawPages/emptyPages/messages.html">
                    <i class="fa fa-envelope m-xl-1" aria-hidden="true"></i>
                    <span class="d-none d-xl-inline">
                        Messages
                    </span>
                </a>
                <a class="list-group-item list-group-item-action" href="../bookmarks/index.html">
                    <i class="fa fa-bookmark m-xl-1" aria-hidden="true"></i>
                    <span class="d-none d-xl-inline">
                        Bookmarks
                    </span>
                </a>
                <a class="list-group-item list-group-item-action" href="../rawPages/emptyPages/lists.html">
                    <i class="fa fa-list m-xl-1" aria-hidden="true"></i>
                    <span class="d-none d-xl-inline">
                        Lists
                    </span>
                </a>
                <a class="list-group-item list-group-item-action" href="../rawPages/profile.html">
                    <i class="fa fa-user m-xl-1" aria-hidden="true"></i>
                    <span class="d-none d-xl-inline">
                        Profile
                    </span>
                </a>
                <a class="list-group-item list-group-item-action" href="#">
                    <i class="fa fa-ellipsis-h m-xl-1" aria-hidden="true"></i>
                    <span class="d-none d-xl-inline">
                        More
                    </span>
                </a>
            </div>
            <button class="btn btn-primary w-100 mt-1 rounded-pill" formaction="">
                Tuit
            </button>
  `);
}
export default NavigationSidebar