import React from "react";

function BlogContent(props) {
  return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;

/*
Having the ability to share this data between components by passing props down to a child component from a parent makes our components incredibly flexible! For example, here's how we could expand our BlogContent component based on those additional props:

function BlogContent(props) {
  console.log(props);

  if (!props.isPublished) {
    // hide unpublished content
    // return null means "don't display any DOM elements here"
    return null;
  } else {
    // show published content
    return (
      <div>
        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead} minutes to read</p>
      </div>
    );
  }
}

Above, we are using conditional renderingLinks to an external site. to only display the blog content if it is published, based on the isPublished prop.
*/
