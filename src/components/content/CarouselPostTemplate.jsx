import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
export default function CarouselPostTemplate(product) {
  return (
    <div
      className="carousel-item"
      style={{ width: "450px", height: "400px", margin: "10px" }}
    >
      <div
        className="border-2 border-indigo-500/75 border-round h-full text-center p-3"
        style={{ borderColor: "rgba(75, 0, 130, 0.75)" }}
      >
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.image}
            className="w-48 h-48 object-cover shadow-2 mx-auto"
          />
        </div>
        <div>
          <h4 className="mb-1 text-lg font-semibold">{product.header}</h4>
          <h6 className="mt-0 mb-3 text-sm">{product.content}</h6>
          <Tag value={product.inventoryStatus}></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-link" rounded />
          </div>
        </div>
      </div>
    </div>
  );
}
