import React from "react";
import "./HomePage.scss";
import Directory from "../../components/directory/Directory.jsx";

const HomePage = ({ history }) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
