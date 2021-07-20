import React from "react";
import { useRouter } from "next/router";
import { Logo } from '@components';

export type Props = {
  toggle: () => void;
}

export const Header: React.FC<Props> = ({ toggle }) => {
  const router = useRouter();
  const siteLogoBlock = '/icons/matrixLogo.svg';
  const siteLogoWhite = '/icons/MatrixLogoFinal_White.svg';


  const isSiteBgtrans = (router.route.indexOf("blog") < 0 && router.route.indexOf("about-us") < 0 &&
    router.route.indexOf("portfolio") < 0 && router.route.indexOf("advisoryTeam") < 0 &&
    router.route.indexOf("careers") < 0 && router.route.indexOf("news") < 0 &&
    router.route.indexOf("events") < 0);

  React.useEffect(() => {
    console.log(router.route.indexOf("about-us"));
  })
  return (
    <div className="headerOuter-warpper transparentMenu"> {/*flex w-full z-20 justify-between items-start laptop:pl-8 mt-11 sm:mt-0 sm:p-5 */}
      <div className="page-center">
        <div className="headerInner-warpper">
          <a href="/home">
            {isSiteBgtrans ?
              <Logo src={siteLogoBlock} alt={"nextjs"} className="black" /> :
              <Logo src={siteLogoWhite} alt={"nextjs"} className="white" />
            }
          </a>
          <div className="menuOuter" onClick={() => toggle()} > {/* flex items-center justify-start mt-2 text-accent */}
            <h6 className={`sub-h1 pr-1 menu-text ${isSiteBgtrans ? 'black' : 'white'}`}>Menu</h6>
            {isSiteBgtrans ?
              <img src="/icons/menu.svg" className="pl-2 text-blue" /> :
              <img src="/icons/Symbol_All_white.svg" className="pl-2 sm:pl-2 text-blue" />
            }

          </div>
        </div>
      </div>

    </div>
  );
};
