import React, { useState, useRef }  from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import "./style.css";


export default function AddPost() {
    const [visible,setVisible]= useState(false);
    const toast = useRef<Toast>(null);


  return(
    <>
    <div className='container'>
    <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
    <span className="d-block">Başlık: </span>
    <InputText placeholder="Gönderi Başlığını Giriniz" className='input-header' />
    <Button className="add-photo" label='Ftotoğraf Ekle' onClick={(e)=> setVisible(true)}/>
    <div>
    <InputTextarea rows={10} cols={60} placeholder="İçerik Giriniz" />
  </div>

  <div className='create-button'>
  </div>
    <Button label="Oluştur" onClick={() => setVisible(true)} />
  </div>
  </div>
    </>
  )
}
