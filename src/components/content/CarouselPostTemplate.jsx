import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

export default function CarouselPostTemplate(product) {
  function getSeverity(product) {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  }

  return (
    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
      <div className="mb-3">
        <img
          src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
          alt={product.image}
          className="w-6 shadow-2"
        />
      </div>
      <div>
        <h4 className="mb-1">{product.header}</h4>
        <h6 className="mt-0 mb-3">{product.content}</h6>
        <Tag
          value={product.inventoryStatus}
          severity={getSeverity(product)}
        ></Tag>
        <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
          <Button icon="pi pi-search" rounded />
          <Button icon="pi pi-star-fill" rounded severity="success" />
        </div>
      </div>
    </div>
  );
}
