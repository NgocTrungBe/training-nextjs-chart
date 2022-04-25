import React from "react";

const withAuthenticate = (WrappedComponent: any) => {
  const AuthenticatedRoute: React.FC<any> = (props) => {
    // check authentica here!
    // return loading ? <div> Loading</div> : <WrappedComponent {...props} />;
    return <WrappedComponent {...props} />;
  };
  return AuthenticatedRoute;
};
export default withAuthenticate;
