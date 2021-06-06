import React from "react";
import { Image } from "@components";
import Button from "@components/button/PrimaryButtonIconRight";
import getContentTypeImageUrl from "../../../utils/getContentTypeImageUrl";


export type Props = {
    image_url: string;
    title: string;
    author: string;
    onClick: (id: string) => void;
    content_id: string;
    content_type: string;
    read_duration: string;
    style?: any;
}


export const ContentItem: React.FC<Props> = ({ image_url, title, author, onClick, content_id, content_type, read_duration, style = {} }) => {
    return (<div className="relative mb-11 ml-0 bg-secondary-light" style={style}>
        <Image src={image_url} alt="content-image" className="" />
        <div className="content-item-desc bg-secondary-light absolute top-4 p-3" style={{ top: "2.5rem", left: "9.5rem" }}>
            <h5 className="text-lg font-medium leading-6 text-primary-dark ml-2 p-0.5">{title}</h5>
            <div className="flex justify-between ml-2 pl-0.5 pt-0.5">
                <span className="font-normal text-xs leading-3  text-primary-dark opacity-50">BY {" " + author}</span>
                <span className="font-normal text-xs leading-3  text-primary-dark opacity-50 mr-1">{read_duration + " READ"}</span>
            </div>
            <div className="flex justify-between mt-3">
                {/* <button onClick={() => onClick(content_id)} /> */}
                <Button title={"Read More"} className="h-8 w-36 text-accent" url="/icons/rightArrowGray.svg" />
                <Image src={getContentTypeImageUrl(content_type)} alt="content type image" className="mr-1" />
            </div>
        </div>
    </div>)
}