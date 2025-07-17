import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops !</h1>
      <h2>{err.statusText}</h2>
      <h2>It's error Dude</h2>
    </div>
  );
};
export default Error;
