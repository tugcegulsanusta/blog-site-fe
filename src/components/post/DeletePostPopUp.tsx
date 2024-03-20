import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import './style.css';


export default function DeletePostPopUp() {
    const [value, setValue] = useState("");

    return (
        <>
            <div
                className="card flex justify-content-center"
                style={{ margin: "20px" }}
            >
                <label style={{ margin: "1%" }}>Gönderi Id'sini Giriniz</label>
                <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Gönderi Id"
                />
            </div>
            <div className="card flex justify-content-center m-5">
                <Button label="Sil" />
            </div>
        </>
    );
}
