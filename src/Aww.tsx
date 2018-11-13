import React from "react";
import RedditResource from "./RedditResource";

function Aww() {
  const { data } = RedditResource.read("aww");

  return (
    <div>
      <h1>Aww</h1>
      <ul>
        {data.children.map(({ data: post }: any) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Aww;
