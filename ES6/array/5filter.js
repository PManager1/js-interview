
var post = { id : 2, title: 'New title for first '};

var comments = [
  { postId: 1, content: 'awesome'},
  { postId: 1, content: '1 first awesome'},
  { postId: 2, content: '22222 second'},
  { postId: 3, content: '33333 awesome33333'}
];

//  return just the comments associated wiht this post.
// given a very particular post, we want to list all the comments associated with that post.
// How will we do that.

let commentsForPost = function (post, comments) {
  // first we filter the comments based on the id
  // first we get/ capture all the comments.
  return comments.filter(function (comment) {
    // then for every comment that we have , i want the comment where => comment.postId === post.id
    return comment.postId === post.id;

  })
}


// console.log(' 13   - output  = ', output );
commentsForPost(post, comments);

console.log('26-  commentsForPost  = ',  commentsForPost(post, comments) );
