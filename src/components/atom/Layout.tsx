import React from "react";
import styled from "styled-components";

type TProps = {
  children: React.ReactNode;
};
const StyledLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Layout = (props: TProps) => {
  return <StyledLayout>{props.children}</StyledLayout>;
};

export default Layout;
