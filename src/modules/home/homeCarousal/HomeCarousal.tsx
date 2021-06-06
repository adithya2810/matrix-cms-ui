import React from "react";
import { Image, ContentSlider } from "@components"
import { FounderDetail } from "@components/founder/FounderDetail";


const data = [
    {
        image_url: "/icons/content1.svg",
        title: "From both sides of the table : Kunal Bahl unplugged",
        author: "TARUN DAVDA",
        content_id: "abcdef",
        content_type: "blog",
        read_duration: "4 MIN"
    },
    {
        image_url: "/icons/content1.svg",
        title: "From both sides of the table : Kunal Bahl unplugged",
        author: "TARUN DAVDA",
        content_id: "abcdefg",
        content_type: "blog",
        read_duration: "4 MIN"
    }
]


const HomeCarousal = () => {
    const [backgroundUrl, setBackgroundUrl] = React.useState("/icons/backgroundCarousalImage.svg")
    return <div className="relative" style={{ height: 1113 }}>
        <div className="absolute h-full w-full flex flex-col items-center" style={{ backgroundImage: `url(${backgroundUrl})` }}>
            <div className="flex">
                <Image src="/icons/rightArrow.large.svg" alt={"right Icon"} height={73} width={37} />
                <div style={{ width: 533, marginLeft: 104 }}>
                    <div style={{ fontWeight: 300, fontSize: "100px", lineHeight: "120px", letterSpacing: "-0.01em", opacity: 0.35 }}> 01/05</div>
                    <div style={{ fontWeight: 200, fontSize: "85px", lineHeight: "95px", opacity: 1, marginTop: 151 }}> Tech-enabled Student housing Platform</div>
                </div>
                <FounderDetail />
                <Image src="/icons/rightArrow.large.svg" alt={"right Icon"} height={73} width={37} />
            </div>
            <ContentSlider style={{
                width: "100%", left: 325, background: "#EBEBE9",
                border: "1px solid #EBEBE9",
                boxSizing: "border-box",
                fontSize:28,
                lineHeight: "34px",
                paddingTop:24,
                paddingLeft:34
            }}  contentList={data} className="absolute bottom-0 right-0 text-primary-dark" />
        </div>
    </div>
}

export default HomeCarousal;