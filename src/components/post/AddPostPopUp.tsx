import React, { useState } from 'react'
import { Button } from "primereact/button";
import { createPost } from '../../api/PostApi.tsx'
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';



export default function AddPostPopUp() {
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);

    function handleClick() {
        const x = createPost(value);
    }
    return (
        <>
            <div className='container'>
                <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
                    <span className="d-block">Başlık: </span>
                    <InputText placeholder="Gönderi Başlığını Giriniz" className='input-header' />
                    <Button className="add-photo" label='Ftotoğraf Ekle' onClick={(e) => setVisible(true)} />
                    <div>
                        <InputTextarea className="text-area" rows={10} cols={60} placeholder="İçerik Giriniz" />
                    </div>

                    <div className='create-button'>
                    </div>
                    <Button label="Oluştur" onClick={handleClick} />
                </div>
            </div>
        </>
    )
}
