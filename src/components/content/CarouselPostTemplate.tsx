import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function CarouselPostTemplate(product) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/post/${product.id}`)
  }

  return (
    <div
      style={{
        position: "relative",
        width: "480px",
        height: "500px",
        margin: "0.5px",
        overflow: "hidden",
      }}
    >
      <div
        className="border-2 h-full text-center p-3"
        style={{ borderColor: "#B4B4B8", overflow: "hidden" }}
      >
        <div className="mb-2">
          <img
            src={product.base64img}
            alt={product.base64img}
            className="w-48 h-48 object-cover shadow-2 mx-auto"
            style={{ maxWidth: '240px', maxHeight: '150px', borderRadius: '5%' }}
          />
        </div>
        <div style={{ position: "relative" }}>
          <h4 className="mb-3 text-lg font-semibold"><b>{product.header}</b></h4>
          <h6 className="mt-0 mb-3  text-sm p-4">{product.content.slice(0, 200)}...</h6>
          <div className="mt-3 text-center">
            <Button
              icon="pi pi-link"
              rounded
              style={{
                backgroundColor: "#6c757d", borderColor: "#6c757d"
              }}
              onClick={handleClick}
              label="Okumaya devam et"
            />
          </div>
          <div> </div>
          <div className="views">Görüntüleme: {product.view}</div>
        </div>
      </div>
    </div>
  );
}
