import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Error";
import Loading from "../../components/Loading/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../Head";
import { PHOTO_GET } from "../../services/api";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head
          title={data.photo.title}
          description={`Informações do dog ${data.photo.title}`}
        />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
