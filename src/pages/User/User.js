import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import Header from "./Header/Header";
import PhotoPost from "./PhotoPost/PhotoPost";
import Stats from "./Stats/Stats";

const User = () => {
  return (
    <section className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<PhotoPost />} />
        <Route path="estatisticas" element={<Stats />} />
      </Routes>
    </section>
  );
};

export default User;
