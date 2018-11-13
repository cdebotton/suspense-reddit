import React from "react";
import RedditResource from "./RedditResource";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

function Subreddit(props: RouteComponentProps<{ subreddit: string }>) {
  const {
    match: { url },
    match: {
      params: { subreddit }
    }
  } = props;
  const { data } = RedditResource.read(subreddit);
  return (
    <div>
      <h1>{subreddit}</h1>
      <ul>
        {data.children.map(({ data: post }: any) => {
          return (
            <li
              key={post.id}
              onMouseEnter={() => {
                RedditResource.preload(`${subreddit}/${post.id}`);
              }}
            >
              <Link to={`${url}/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Subreddit;
