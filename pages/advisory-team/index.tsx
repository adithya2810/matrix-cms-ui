import SocialMetaTags from '@components/SocialMetaTags';
import React from "react";
import AdvisoryTeam from "../../src/modules/advisoryTeam";
import _ from "lodash";

function AdvisoryTeamPage(props) {
  return (<>
    <SocialMetaTags title="Advisory Team" url="/advisoryTeam" image={`${process.env.NEXT_PUBLIC_APP_URL}/images/matrix-websitebanner-team1.jpg`} description="We are company builders first Our experience supports and amplifies companies over their lifespan" />
    <AdvisoryTeam deviceType={props.deviceType} invesmentTeam={props.investment} operationsTeam={props.operations} />
  </>);
}


export async function getServerSideProps() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/people?type=investment&_sort=last_name:ASC`);
  let data = await res.json()

  const res1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/people?type=operations&_sort=last_name:ASC`);
  let data1 = await res1.json()

  data.splice(_.findIndex(data, ['_id', "6112641431f3105968351e5d"]), 1);
  //data1.splice(_.findIndex(data1, ['_id', "6112641431f3105968351e5d"]), 1);
  data.splice(_.findIndex(data, ['_id', "611253da31f3105968351e57"]), 1);
  data.splice(_.findIndex(data, ['_id', "60d42e18f4ab72cb2ac8128f"]), 1);

  return {
    props: {
      investment: data,
      operations: data1,
    }
  }
}

export default AdvisoryTeamPage;
