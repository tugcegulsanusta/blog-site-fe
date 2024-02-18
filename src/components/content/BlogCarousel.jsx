import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import blogItems from "./blogItems.json";
import CarouselPostTemplate from "./CarouselPostTemplate";

export default function BlogCarousel() {
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    setProducts(blogItems);
  }, []);

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={CarouselPostTemplate}
      />
    </div>
  );
}
