import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './style.css';
import { User } from '../../api/Types'


const AccountSetting: React.FC = () => {
  const user: User = {
    id: '1',
    username: 'example_user',
    email: 'user@example.com',
    password: 'example_password',
    base64img: 'https://media.istockphoto.com/id/1381221247/tr/foto%C4%9Fraf/beautiful-afro-girl-with-curly-hairstyle.jpg?s=1024x1024&w=is&k=20&c=4p6sLfDa4Sssxgq0wZBL5TF_yeTCobkrNZ3f2LKIqA0=',
  };

  const [newImage, setNewImage] = useState<string | undefined>(undefined);
  const [newUsername, setNewUsername] = useState<string>(user.username);
  const [newEmail, setNewEmail] = useState<string>(user.email);
  const [newPassword, setNewPassword] = useState<string>(user.password);
  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    navigate('/');
  };

  return (
    <div className='container'>
      <div className="p-d-flex p-jc-center avatar-container " >
        <Avatar
          image={user.base64img}
          className="custom-avatar"
          size="xlarge"
        />
        <div className="p-col-12 p-md-8">
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="username" className="block text-900 font-medium mb-2">
                Username
              </label>
              <InputText
                id="username"
                type="text"
                placeholder={user.username}
                className="w-full mb-3"
              />
            </div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">
              Email
            </label>
            <InputText
              id="email"
              type="text"
              placeholder="Email address"
              className="w-full mb-3"
            />
            <label htmlFor="password" className="block text-900 font-medium mb-2">
              Password
            </label>
            <InputText
              id="password"
              type="password"
              placeholder="Password"
              className="w-full mb-3"
            />
            <div className="p-field">
              <label htmlFor="image">Profile Picture</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="p-d-flex p-jc-center">
              <Button
                label="Save"
                icon="pi pi-check"
                className="p-mt-3"
                onClick={handleSave}
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default AccountSetting;
