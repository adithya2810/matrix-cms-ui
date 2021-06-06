import React from "react";


export type Props = {
    names: Array<string>;
    background_url: string;
    tags: Array<string>;
    logo: string;
}

export const FounderDetail = () => {
    return (<div className="" style={{
        width: 650,
        height: 744,
        position: "relative"
    }}>
        <div className="" style={{
            width: 571,
            height: 762,
            position: "absolute",
            background: "#083A4A"
        }}>

        </div>
        <div className="" style={{
            width: 594,
            height: 788,
            position: "absolute",
            marginLeft: 15,
            marginTop: -41,
            background: "red",
            display: "flex",
            flexDirection: "column"
        }}>

            <img style={{ flexGrow: 1 }}>
            </img>

            <div style={{ height: 209, background: "#01576E" }}>

            </div>

        </div>
    </div>)
}