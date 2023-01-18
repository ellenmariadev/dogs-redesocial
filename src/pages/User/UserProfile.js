import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import Head from "../../components/Head";

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container mainSection">
      <Head
        title={user}
        description={`Página de perfil com fotos postadas por ${user}`}
      />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
