import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Category, Post } from '../api/Types.tsx';
import categoryData from '../jsonfiles/categories.json';
import blogItems from "../jsonfiles/posts.json";
import CarouselPostTemplate from "../components/content/CarouselPostTemplate.tsx";
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

// categories json dosyasından kategori isimlerini al
const getCategoryId = (categoryName: string) => {
    const category = categories.find(category => category.name.toLowerCase() == categoryName.toLowerCase());
    return category ? category.id : -1;
};

const FilteredPostsPage: React.FC = () => {
    const location = useLocation();

    const categoryName = location.pathname.replace("/category/", "");
    const categoryNameUtfDecoded = decodeURIComponent(categoryName); // url'
    const categoryId = getCategoryId(categoryNameUtfDecoded);
    const products = blogItems.filter(item => item.categoryId == categoryId);

    return (
        <div>
            <h1>{categoryNameUtfDecoded} </h1>
            <div className="card">
                <Carousel
                    value={products}
                    numVisible={3}
                    numScroll={3}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={CarouselPostTemplate}
                    color="light"
                />
            </div>
        </div>
    );
};

export default FilteredPostsPage;
