import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'

export default function UpdatePost() {
    const[id,setId] = useState(0);
    function handleClick(){

    }

  return (
    <>
    <div className='text'>Lütfen düzenlemek istediğiniz gönderi id'sini giriniz</div>
    <InputText  type='number' placeholder='id' />
    <Button type='submit' >Düzenle</Button>
    </>
  )
}
