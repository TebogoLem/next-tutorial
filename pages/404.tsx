import Link from "next/link";
import React from "react";
import { NextRouter, useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router: NextRouter = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="not-found">
        <h1>Oops...</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the <Link href="/">Home page</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
