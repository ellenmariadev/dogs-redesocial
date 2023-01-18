import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import Head from "../../components/Head";
import { UserContext } from "../../contexts/userContext";
import PageNotFound from "../PageNotFound";
import Header from "./Header/Header";
import PhotoPost from "./PhotoPost/PhotoPost";
import Stats from "./Stats/Stats";

const User = () => {
  const { data } = useContext(UserContext);
  return (
    <section className="container">
      <Head
        title="Minha conta"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<PhotoPost />} />
        <Route path="estatisticas" element={<Stats />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
};

export default User;
