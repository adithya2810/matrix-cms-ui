import React from "react";
import { Image } from "@components";
import Link from "next/link";

export type Props = {
  operationsTeam: any;
};

const PastInvestmentTeam: React.FC<Props> = ({ operationsTeam }) => {

  const capitalize = (str) => {
    if (str) {
      const words = str.split(" ");

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
      }
      return words.join(" ");
    }
    return '';
  };

  const getFullName = (v: any) => {
    if (v.hasOwnProperty("first_name")) {
      return `${v.first_name} ${v.last_name}`;
    } else {
      return v.name;
    }
  };

  return (
    <figure className="rounded-xl p-10">
      <div className="team-member p-5 cursor-pointer grid grid-cols-4 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {operationsTeam?.map((t: any, index) => (
          <div key={t._id} style={{ position: 'relative' }}>
            <Link href={'/advisory-team/' + t.slug} passHref>
              <div className="overflow-hidden shadow-xl card team-hover" >
                <Image src={t.image_url} alt={getFullName(t)} className="team-member-img" />
                <div className="team-overlay">
                  <div className="team-member-info px-6 py-4">
                    <h6 className="font-light text-secondary uppercase font-bold" style={{ fontSize: '1.1rem', lineHeight: "36px", letterSpacing: "0.05em" }}>
                      {getFullName(t)}
                    </h6>
                    <h6 className="text-secondary sub-h2 font-medium text-lg leading-6" style={{ fontSize: '0.85rem', letterSpacing: 1 }}>{t.designation}</h6>
                  </div>
                  <div style={{ width: '100%', height: '100%', position: "absolute", background: "#083A4A", bottom: -10, left: -10, zIndex: 11, }}></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </figure >
  );
};

export default PastInvestmentTeam;
