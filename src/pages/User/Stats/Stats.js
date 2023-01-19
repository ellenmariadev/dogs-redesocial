import { lazy, Suspense, useEffect } from "react";
import Error from "../../../components/Error";
import Head from "../../../components/Head";
import Loading from "../../../components/Loading/Loading";
import useFetch from "../../../hooks/useFetch";
import { STATS_GET } from "../../../services/api";

const Graphs = lazy(() => import("./Graphs"));

const Stats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <Graphs data={data} />
      </Suspense>
    );
  else return null;
};

export default Stats;
