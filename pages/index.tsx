import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from 'next/link'

const Home: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/home');
  })

  return (
    // <Container>
    //   <Main />
    // </Container>
    <>
      <Head>
        <title>Matrix</title>
      </Head>
    </>
  );
};

export default Home;
