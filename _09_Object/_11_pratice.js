let comments = [
  { postId: 1, text: "Great post!" },
  { postId: 2, text: "Thanks" },
  { postId: 1, text: "Very helpful" }
]


let groupByPost = (comments) => {

  let groupedComments = {}
  comments.forEach((obj) => {
    if (groupedComments.hasOwnProperty(obj.postId)) {
      groupedComments[obj.postId].push(obj.text)
    } else {
      groupedComments[obj.postId] = [obj.text]
    }
  })
  console.log(groupedComments)
}

groupByPost(comments)
