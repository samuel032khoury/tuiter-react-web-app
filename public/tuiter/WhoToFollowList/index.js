import who from "./who.js";
import whoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return (
    `
    <div class="list-group">
      <div class="list-group-item">
                      <span class="fw-bold">Who to follow</span>
                  </div>
      ${who.map(obj => whoToFollowListItem(obj)).join('')}
    </div>
    `
  )
}
export default WhoToFollowList