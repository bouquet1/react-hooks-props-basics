import React from "react";

function Comment(props) {
  return <div className="comment">{props.commentText}</div>;
}

export default Comment;

/*
This component, when used, will display content that is passed down to it, allowing us to pass different content to multiple Comment components. Let's add them in. Of course, with components being re-usable, we can make as many as we want:

This component, when used, will display content that is passed down to it, allowing us to pass different content to multiple Comment components. Let's add them in. Of course, with components being re-usable, we can make as many as we want. ...and just as before, we can pass content data down to them:

function BlogPost() {
  return (
    <div>
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}
*/
