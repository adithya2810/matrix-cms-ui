import React from "react";
import AdvisoryTeam from "../../src/modules/advisoryTeam";

function AdvisoryTeamPage({ investment, operations }) {
  return <AdvisoryTeam invesmentTeam={investment} operationsTeam={operations} />;
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
