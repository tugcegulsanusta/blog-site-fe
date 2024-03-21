import React, { useState } from 'react';
import { createPost } from '../../api/PostApi.tsx';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from 'primereact/inputtextarea';


export default function UpdatePostPopUp() {
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);

    function handleClick() {
        const x = createPost(value);
    }
    return (
        <>
            <div className='container'>
                <div className="d-flex flex-column flex-shrink-0 p-6 w-100">
                    <div>
                        <span className="d-block me-3" >Gönderi Id: </span>
                        <InputText placeholder="Gönderi Id'sini Giriniz" className='input-id' />
                    </div>
                    <div>
                        <span className="d-block me-3">Başlık: </span>

                        <InputText placeholder="Gönderi Başlığını Giriniz" className='input-header' />
                        <Button className="add-photo" label='Fotoğraf Ekle' onChange={handleClick} />
                    </div>
                    <div>
                        <InputTextarea className="text-area" rows={10} cols={60} placeholder="İçerik Giriniz" />
                    </div>
                    <Button className="button-color" label="Oluştur" onClick={handleClick} />
                </div>
            </div>
        </>
    )
}
