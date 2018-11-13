import React from "react";
import RedditResource from "./RedditResource";

function Typescript() {
  const { data } = RedditResource.read("typescript");

  return (
    <div>
      <h1>Typescript</h1>
      <ul>
        {data.children.map(({ data: post }: any) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Typescript;
