import React from "react";
import HomeContent from "./homeContent";
import HomeCarousal from "./homeCarousal";

const Home: React.FC = () => {
    return (<>
        <HomeCarousal />
        <HomeContent />
    </>)
}

export default Home;