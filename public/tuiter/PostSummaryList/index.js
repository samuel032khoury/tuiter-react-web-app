import postSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummary = () => {
  return (
    `
    <div class="row mb-1 align-items-center">
                <div class="col-11">
                    <div class="position-relative">
                        <input id="search-input" class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <label for="search-input" class="position-absolute wd-search-tuiter"><i class="fa fa-search"></i> </label>
                    </div>
                </div>
                <div class="position-relative col-1 p-0 p-xxl-2">
                    <a href="../explore/explore-settings.html">
                        <i class="fas fa-cog fa-2x wd-cog" style="color: royalblue"></i>
                    </a>
                </div>
            </div>

            <ul class="nav nav-tabs mt-1 mb-2 text-nowrap flex-nowrap overflow-scroll">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        For You
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1">
                        Sports
                    </a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#" tabindex="-1">
                        Entertainment
                    </a>
                </li>
            </ul>

            <div class="position-relative">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" width="100%" alt="spaceship"/>
                <h1 class="position-absolute wd-big-img-cap text-white">SpaceX's Starship</h1>
            </div>
            <ul class="list-group mt-2">
              ${posts.map(post => postSummaryItem(post)).join('')}
            </ul>
            `
  )
}
export default PostSummary