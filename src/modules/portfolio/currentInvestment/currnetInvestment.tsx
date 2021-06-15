import React from "react";

const CurrentInvestment = () => {

  return (
    <div className="relative ">
      <div className="w-full m-auto">
        <h2 className="text-3xl text-center font-bold text-current">Select  Current Investments</h2>
      </div>
      <div className="grid grid-cols-4 h-96 sm:grid-cols-1 gap-4">
        <div className="flex relative self-center justify-center ">
          <div className="hover-to-show-image">
            <img className="w-6/12	 m-auto" src="../../img/&me.png" alt="" />
            <div className="hover-to-show-text">
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
              <a href="#" className="web-url">Visit Webiste</a>
            </div>
          </div>
        </div>
        <div className="flex self-center justify-center">
          <div className="hover-to-show-image">
            <img className="w-6/12	" src="../../img/Anaek_light.svg" alt="" />
            <div className="hover-to-show-text">
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
              <a href="#" className="web-url">Visit Webiste</a>
            </div>
          </div>
        </div>
        <div className="flex self-center justify-center">
          <div className="hover-to-show-image">
            <img className="w-6/12	" src="../../img/antwak.png" alt="" />
            <div className="hover-to-show-text">
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
              <a href="#" className="web-url">Visit Webiste</a>
            </div>
          </div>
        </div>
        <div className="flex self-center justify-center">
          <div className="hover-to-show-image">
            <img className="w-6/12	" src="../../img/avail.png" alt="" />
            <div className="hover-to-show-text">
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
              <a href="#" className="web-url">Visit Webiste</a>
            </div>
          </div>
        </div>



      </div>
      <div className="grid grid-cols-4 h-96 sm:grid-cols-1 gap-4">

        <div className="flex self-center justify-center"><img className="w-6/12	" src="../../img/itz-cash.png" alt="" /></div>
        <div className="flex self-center justify-center"><img className="w-6/12	" src="../../img/muthoot.png" alt="" /></div>
        <div className="flex self-center justify-center"><img className="w-6/12	" src="../../img/myra.png" alt="" /></div>
        <div className="flex self-center justify-center"><img className="w-6/12	" src="../../img/Ridlr.png" alt="" /></div>



      </div>
      <div className="grid grid-cols-4 h-96 sm:grid-cols-1 gap-4">


        <div className="flex self-center justify-center"><img className="w-6/12	" src="../../img/treehouse.png" alt="" /></div>
        <div className="flex self-center justify-center"><img className="w-6/12	" src="../../img/utopia.webp" alt="" /></div>
        <div className="flex self-center justify-center"><img className="w-6/12	" src="../../img/w.png" alt="" /></div>
        <div className="flex self-center justify-center"><img className="w-6/12	" src="../../img/oo.png" alt="" /></div>


      </div>
    </div>

  );
};

export default CurrentInvestment;

