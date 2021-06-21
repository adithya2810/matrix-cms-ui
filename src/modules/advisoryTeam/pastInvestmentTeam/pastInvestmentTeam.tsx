import React from "react";
import { Image } from "@components";

const teams = [
  {
    id: 5,
    userImg: '../../image/nitisha.png',
    userName: 'Nitisha',
    position: 'Senior Analyst',
  },
  {
    id: 6,
    userImg: '../../image/Rajinder_Balaraman.png',
    userName: 'Rajinder Balaraman',
    position: 'Senior Analyst',
  },
  {
    id: 7,
    userImg: '../../image/Tarun_Davda.png',
    userName: 'Tarun-Davda',
    position: 'Senior Analyst',
  },
  {
    id: 8,
    userImg: '../../image/Rahul.png',
    userName: 'Rahul',
    position: 'Senior Analyst',
  },
  {
    id: 1,
    userImg: '../../image/Rajat_Agrawal.jpg',
    userName: 'Rajat Agrawal',
    position: 'Senior Analyst',
  },
  {
    id: 2,
    userImg: '../../image/Divyanshi.png',
    userName: 'Divyanshi',
    position: 'Senior Analyst',
  },
  {
    id: 3,
    userImg: '../../image/Ananya.png',
    userName: 'Ananya',
    position: 'Senior Analyst',
  },
  {
    id: 4,
    userImg: '../../image/Ayush.png',
    userName: 'Ayush',
    position: 'Senior Analyst',
  },
]

const PastInvestmentTeam = () => {
  return (

    <figure className="rounded-xl p-8">
      <div className="team-member cursor-pointer grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {teams.map((t: any, index) => (
          <div key={t.index} style={{ position: 'relative' }}>
            <div className="overflow-hidden shadow-xl card team-hover" >
              <Image src={t.userImg} alt={"Rajat Agrawal"} className="team-member-img" />
              <div className="team-overlay">
                <div className="team-member-info px-6 py-4">
                  <h6 className="font-light text-secondary uppercase text-4sm" style={{ lineHeight: "36px", letterSpacing: "0.05em" }}>
                    {t.userName}
                  </h6>
                  <h6 className="text-secondary sub-h2 font-medium text-lg leading-6">{t.position}</h6>
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
