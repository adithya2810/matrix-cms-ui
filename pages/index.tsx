import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from 'next/link'
import HomePage from './home';

type deviceType = {
  mobile: boolean;
};

type propsType = {
  deviceType: deviceType;
};

const Home: React.FC<propsType> = (props) => {
  // const router = useRouter();
  // React.useEffect(() => {
  //   router.replace('/home');
  // })

  return (
    // <Container>
    //   <Main />
    // </Container>
    // <>
    //   <Head>
    //     <title>Matrix</title>
    //   </Head>
    // </>
    <HomePage {...props} />
  );
};

export default Home;
