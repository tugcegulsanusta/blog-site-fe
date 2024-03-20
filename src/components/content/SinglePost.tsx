import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Category, Post } from '../../api/Types.tsx';
import categoryData from '../../jsonfiles/categories.json';
import blogItems from "../../jsonfiles/posts.json";
import CarouselPostTemplate from "./CarouselPostTemplate.tsx";
import { Carousel } from "primereact/carousel";
interface LocationState {
    filteredPosts: Post[];
}

const responsiveOptions = [
    {
        breakpoint: "1400px",
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: "1199px",
        numVisible: 3,
        numScroll: 1,
    },
    {
        breakpoint: "767px",
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: "575px",
        numVisible: 1,
        numScroll: 1,
    },
];

const categories: Category[] = categoryData;


const SinglePost: React.FC = () => {
    const location = useLocation();
    const postId = location.pathname.replace("/post/", "");
    const products = blogItems.filter(item => item.id == Number(postId));
    const product = products[0];


    /** {product.header}
        {product.base64img}
        {product.content}
        {product.view}
        */

    return (
        <div className="grid grid-nogutter surface-20 text-800">
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">{product.header}</span>
                    <div style={{ minHeight: 50 }} className="text-6xl text-primary font-bold mb-3"></div>
                    <p className="mt-0 mb-4 text-700 line-height-3">{product.content}</p>
                    <div style={{ minHeight: 50 }} className="text-6xl text-primary font-bold mb-3"></div>
                    <span style={{ textAlign: "right" }} className="block text-1xl font-bold mb-1">{product.view} kez görüntülendi.</span>
                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden">
                <img src={product.base64img} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>

    );
};

export default SinglePost;
