import React from "react";
import { Image } from "@components";
import getContentTypeImageUrl from "../../../utils/getContentTypeImageUrl";


export type Props{
    image_url: string;
    title: string;
    author: string;
    onClick: (id: string) => void;
    content_id: string;
    content_type: string;
    read_duration: string;
}


const ContentItem: React.FC<Props> = ({ image_url, title, author, onClick, content_id, content_type, read_duration }) => {
    return (<div>
        <Image src={image_url} alt="content-image" className="" />
        <div>
            <h5>{title}</h5>
            <div>
                <span>{author}</span>
                <span>{read_duration}</span>
            </div>
            <div>
                <button onClick={() => onClick(content_id)} />
                <Image src={getContentTypeImageUrl(content_type)} alt="content type image" className=" " />
            </div>
        </div>
    </div>)
}