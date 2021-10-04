import React from "react";
import "./Products.css"

export default function Products({ data }) {

    return (
        <div className="swiper2">
            <img src={data.image} />
            <h3>{data.title}</h3>
        </div>
    );
}