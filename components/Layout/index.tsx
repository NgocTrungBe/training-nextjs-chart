import React from "react";
import withAuthenticate from "@src/components/Hocs/withAuthenticate";
interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  return <div className="container-layout">
    {children}
  </div>;
};

export default withAuthenticate(Layout);
