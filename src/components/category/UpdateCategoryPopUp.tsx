import React, { useState } from 'react'
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createCategory } from '../../api/CategoryApi.tsx'

export default function UpdateCategoryPopUp() {
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
                <label style={{ margin: "1%", justifyContent: "center" }}>Kategori Adını Giriniz</label>
                <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Eski Kategori Adı"
                />
            </div>
            <div
                className="card flex justify-content-center"
                style={{ margin: "20px" }}
            >
                <label style={{ margin: "1%" }}>Yeni Kategori Giriniz</label>
                <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Yeni Kategori Adı"
                />
            </div>
            <div className="card flex justify-content-center m-5">
                <Button label="Değiştir" onClick={handleClick} />
            </div>
        </>
    )
}
