import React from "react";
import { Image } from "@components";

export type Props = {
  operationsTeam: any;
};

const PastInvestmentTeam: React.FC<Props> = ({ operationsTeam }) => {
  console.log("Check---------------0", operationsTeam)
  return (

    <figure className="rounded-xl p-8">
      <div className="team-member cursor-pointer grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {operationsTeam?.map((t: any, index) => (
          <div key={t._id} style={{ position: 'relative' }}>
            <div className="overflow-hidden shadow-xl card team-hover" >
              <Image src={t.image_url} alt={t.name} className="team-member-img" />
              <div className="team-overlay">
                <div className="team-member-info px-6 py-4">
                  <h6 className="font-light text-secondary uppercase text-4sm" style={{ lineHeight: "36px", letterSpacing: "0.05em" }}>
                    {t.name}
                  </h6>
                  <h6 className="text-secondary sub-h2 font-medium text-lg leading-6">{t.designation}</h6>
                </div>
                <div style={{ width: '100%', height: '100%', position: "absolute", background: "#083A4A", bottom: -10, left: -10, zIndex: 11, }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </figure >
  );
};

export default PastInvestmentTeam;
