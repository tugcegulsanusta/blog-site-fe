import React from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

export default function Signup() {
  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <img
            alt="logo"
            src="micro-dot-blog.svg"
            height={50}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">
            Welcome On Board!
          </div>
        </div>

        <div>
          <label htmlFor="username" className="block text-900 font-medium mb-2">
            Username
          </label>
          <InputText
            id="username"
            type="text"
            placeholder="Username"
            className="w-full mb-3"
          />
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

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
              <Checkbox id="rememberme" className="mr-2" />
              <label htmlFor="rememberme">Remember me</label>
            </div>
          </div>

          <Button label="Sign Up" icon="pi pi-user" className="w-full" />
        </div>
      </div>
    </div>
  );
}
