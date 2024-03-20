import { InputText } from 'primereact/inputtext'
import React from 'react'
import './style.css';


export default function DeletePost() {
  return (
    <>
      <div className='container'>
        Silmek istediğiniz gönderi id'sini giriniz:
      </div>
      <InputText placeholder='id' className='text-input' />
    </>
  )
}
