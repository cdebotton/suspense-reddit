import React, { lazy, Suspense, useCallback } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Layout, { Header } from "./components/Layout";
import RedditResource from "./RedditResource";
import styled from "styled-components";

const Home = lazy(() => import("./Home"));
const Subreddit = lazy(() => import("./Subreddit"));
const Editor = lazy(() => import("./Editor"));
const Post = lazy(() => import("./Post"));

const RedditLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    border-bottom: 1px solid black;
  }
`;

function App() {
  const preloadNin = useCallback(() => {
    RedditResource.preload("nin");
  }, []);

  const preloadTypescript = useCallback(() => {
    RedditResource.preload("typescript");
  }, []);

  const preloadAww = useCallback(() => {
    RedditResource.preload("aww");
  }, []);

  return (
    <Suspense fallback="Loading">
      <Layout
        header={
          <Header>
            <RedditLink exact to="/">
              Home
            </RedditLink>
            <RedditLink to="/r/nin" onMouseEnter={preloadNin}>
              r/nin
            </RedditLink>
            <RedditLink to="/r/typescript" onMouseEnter={preloadTypescript}>
              r/typescript
            </RedditLink>
            <RedditLink to="/r/aww" onMouseEnter={preloadAww}>
              r/aww
            </RedditLink>
          </Header>
        }
      >
        <Suspense fallback="Loading page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/r/:subreddit" component={Subreddit} />
          </Switch>
        </Suspense>
        <Suspense fallback="Loading editor">
          <Switch>
            <Route exact path="/" component={Editor} />
            <Route path="/r/:subreddit/:postId" component={Post} />
          </Switch>
        </Suspense>
      </Layout>
    </Suspense>
  );
}

export default App;
