import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import "./style.css";

export default function CarouselPostTemplate(product) {
  return (
    <div
      style={{
        width: "450px",
        height: "400px",
        margin: "1px",
        overflow: "hidden",
      }}
    >
      <div
        className="border-2 border-round h-full text-center p-3"
        style={{ borderColor: "#B4B4B8", overflow: "hidden" }}
      >
        <div className="mb-2">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.base64img}`}
            alt={product.base64img}
            className="w-48 h-48 object-cover shadow-2 mx-auto"
          />
        </div>
        <div>
          <h4 className="mb-3 text-lg font-semibold">{product.header}</h4>
          <h6 className="mt-0 mb-3 text-sm">{product.content}</h6>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button
              icon="pi pi-link"
              rounded
              style={{ backgroundColor: "#6c757d", borderColor: "#6c757d" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
