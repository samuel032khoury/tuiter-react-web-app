const WhoToFollowListItem = (who) => {
  const {avatarIcon, userName, handle} = who;
  return (
    `<div class="list-group-item">
                    <div class="row">
                        <div class="col-2  pe-0 my-auto">
                            <img class="img-fluid rounded-circle wd-rec-follow-avatar"
                                 src="../../image/${avatarIcon}" alt="${userName.toLowerCase()}"/>
                        </div>
                        <div class="col-6 col-xxl-7 my-auto">
                            <span class="fw-bold">${userName}</span> <i class="fa fa-check-circle"></i><br>
                            <span class="wd-text-grey">@${handle}</span>
                        </div>
                        <div class="col-4 col-xxl-3 my-auto">
                            <button class="px-3 btn btn-primary rounded-pill">Follow</button>
                        </div>
                    </div>
                </div>
`
  )
}
export default WhoToFollowListItem;