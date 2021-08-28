import React, { useState } from "react";
import { useRouter } from "next/router";
import { Logo } from '@components';
import _ from 'lodash';
import Link from 'next/link';

export type Props = {
  toggle: () => void;
  mobile: boolean;
}

export const Header: React.FC<Props> = ({ toggle, mobile }) => {
  const router = useRouter();
  const [brightSts, setBrightSts] = useState(true);
  const siteLogoBlock = '/icons/matrixLogo.svg';
  const siteLogoWhite = '/icons/MatrixLogoFinal_White.svg';

  const isSiteBgtrans = () => {
    const brightPages = ['/', '/home', '/advisoryTeam/[slug]', '/events/[eventsId]', '/presskit', '/news/[newsId]', '/contact'];
    const mobileBrightPages = ['/advisoryTeam/[slug]'];
    return !(mobile && _.indexOf(mobileBrightPages, router.route) != -1) && _.indexOf(brightPages, router.route) != -1;
  }

  React.useEffect(() => {
    // console.log(router.route);
    setBrightSts(isSiteBgtrans);
  }, [router.route]);

  return (
    <div className="headerOuter-warpper transparentMenu"> {/*flex w-full z-20 justify-between items-start laptop:pl-8 mt-11 sm:mt-0 sm:p-5 */}
      <div className="page-center">
        <div className={`headerInner-warpper ${brightSts ? 'laptop:pl-0' : 'laptop:pl-12'} sm:mt-5`}>
          <Link href="/"><a>
            {brightSts ? <>
              <Logo src={siteLogoBlock} alt={"nextjs"} className="black block sm:hidden" />
              <Logo src={siteLogoBlock} alt={"nextjs"} className="black hidden sm:block" width={91} height={40} />
            </> :
              <>
                <Logo src={siteLogoWhite} alt={"nextjs"} className="white block sm:hidden" />
                <Logo src={siteLogoWhite} alt={"nextjs"} className="white hidden sm:block" width={91} height={40} />
              </>}
          </a>
          </Link>
          <div className="menuOuter mr-7 sm:mr-3" onClick={() => toggle()} > {/* flex items-center justify-start mt-2 text-accent */}
            <p className="sm:hidden text-white flex pr-5 pt-2" style={{ fontSize: 18, lineHeight: '24px', fontWeight: 500, color: brightSts ? '#01576e' : 'white' }}>View Interest Areas
              {brightSts ? <img className="px-1 pt-1" src="/icons/arrow_b.svg" /> :
                <img className="px-1 pt-1" src="/icons/arrow-white.svg" />}
            </p>
            <h6 className={`sub-h1 -mb-2 menu-text ${brightSts ? 'black' : 'white'}`} style={mobile ? { lineHeight: '20px', fontWeight: 500, fontSize: 18, width: 50 } : { lineHeight: '34px', fontWeight: 400, fontSize: 22, width: 60 }}>Menu</h6>
            {brightSts ?
              <img src={`${mobile ? '/icons/menu-mobile.svg' : '/icons/menu.svg'}`} className="pl-2 text-blue" /> :
              <img src="/icons/Symbol_All_white.svg" className="pl-2 sm:pl-2 text-blue" />
            }
          </div>
        </div>
      </div>

    </div>
  );
};
