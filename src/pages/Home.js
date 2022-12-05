import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/login">go to login page</Link>
    </>
  );
}

export default Home;
