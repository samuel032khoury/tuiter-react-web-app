const PostSummaryItem = (post) => {
  const {topic, userName, time, title, image, tweets} = post;
  return (
    `
    <li class="list-group-item">
          <div class="row">
              <div class="col-8 col-sm-9">
                  ${topic ? 
                    `<div class="text-secondary">
                        ${topic}
                    </div>` : ""}
                  ${userName ?
                    `
                    <div>
                        <span class="fw-bolder">${userName}</span> <i class="fa fa-check-circle"></i> <span
                            class="text-secondary">- ${time}</span>
                    </div>
                    ` : ""}
                  <div class="fw-bolder">
                      ${title}
                  </div>
                  ${ tweets ?
                  `
                    <div class="text-secondary">
                                  ${tweets} Tuits
                    </div>
                  ` : ""}
              </div>
              <div class="col-4 col-sm-3">
                  <img class="float-end rounded-3" src="../../image/${image}" height="100px" alt=${image.split('.'[0])}>
              </div>
          </div>
      </li>
      `
  )
}

const post1 =  {
       topic: 'Web Development',
       userName: 'NodeJS',
       title: '',
       time: 'last month',
       image: '../../images/node.png',
       tweets: '120K',
   }
;

export default PostSummaryItem;