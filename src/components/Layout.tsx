import React, { ReactNode } from "react";
import styled from "styled-components";
import { padding, rem } from "polished";

interface Props {
  className?: string;
  header: ReactNode;
  children: ReactNode;
}

const Grid = styled.div`
  position: relative;
  display: grid;
  width: 100vw;
  min-height: 100vh;
  grid-template-rows:
    [page-start header-start]
    min-content
    [header-end body-start]
    auto
    [body-end page-end];
  grid-template-columns:
    [page-start route-start]
    2fr
    [route-end editor-start]
    3fr
    [editor-end page-end];
`;

const Header = styled.header`
  display: grid;
  grid-auto-flow: column dense;
  grid-gap: ${rem(16)};
  grid-column: page-start / page-end;
  grid-row: header-start / header-end;
  justify-content: start;
  ${padding(rem(8), rem(16))};
`;

function Layout({ className, header, children }: Props) {
  return (
    <Grid className={className}>
      {header}
      {children}
    </Grid>
  );
}

export default Layout;

export { Header };
