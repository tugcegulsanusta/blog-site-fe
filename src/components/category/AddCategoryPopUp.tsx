import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createCategory } from '../../api/CategoryApi.tsx'

export default function AddCategoryPopUp() {
  const [value, setValue] = useState("");

  function handleClick() {
    const x = createCategory(value);
  }

  return (
    <>
      <div
        className="card flex justify-content-center"
        style={{ margin: "20px" }}
      >
        <label style={{ margin: "1%" }}>Kategori Giriniz</label>
        <InputText
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Kategori Adı"
        />
      </div>
      <div className="card flex justify-content-center m-5">
        <Button label="Ekle" onClick={handleClick} />
      </div>
    </>
  );
}
