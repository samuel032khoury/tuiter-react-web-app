import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import PostSummaryList from "../PostSummaryList";

function exploreComponent() {
   $('#wd-explore').append(`
        <h2>Explore</h2>
        <div class="row mt-2">
            <div class="col-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
                ${PostSummaryList()}
            </div>
            <div class="d-none d-lg-block col-lg-4">
               ${WhoToFollowList()}
            </div>
        </div>

   `);
}
$(exploreComponent);
