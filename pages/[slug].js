import Head from "next/head";
import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.slug}</title>
      </Head>
      <div>Page {router.query.slug} </div>
    </div>
  );
};

export default DynamicRoute;
