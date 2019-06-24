import React from "react";
import { Link } from "react-router-dom";
import Vote from "./VotingPage";

const Home = () => {
  return (
    <div className='col-lg-12 text-center'>
      <h1>Hold ID against the back of your phone!</h1>
      <Link to='/Vote' className='btn btn-primary'>
        Register
      </Link>
    </div>
  );
};

export default Home;
