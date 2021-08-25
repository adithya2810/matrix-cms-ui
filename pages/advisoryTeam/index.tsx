import SocialMetaTags from '@components/SocialMetaTags';
import React from "react";
import AdvisoryTeam from "../../src/modules/advisoryTeam";

function AdvisoryTeamPage(props) {
  return (<>
    <SocialMetaTags title="Advisory Team" image={`${process.env.NEXT_PUBLIC_APP_URL}/img/advisory-banner.png`} description="We are company builders first Our experience supports and amplifies companies over their lifespan" />
    <AdvisoryTeam deviceType={props.deviceType} invesmentTeam={props.investment} operationsTeam={props.operations} />
  </>);
}


export async function getServerSideProps() {

  const res = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/people?type=investment`);
  const data = await res.json()

  const res1 = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/people?type=operations`);
  const data1 = await res1.json()
  return {
    props: {
      investment: data,
      operations: data1,
    }
  }
}

export default AdvisoryTeamPage;
