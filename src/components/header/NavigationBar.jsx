import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { useNavigate } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const items = [
    {
      label: "Anasayfa",
      icon: "pi pi-home",
    },
    {
      label: "Kategoriler",
      icon: "pi pi-search",
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          template: itemRenderer,
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
          shortcut: "⌘+B",
          template: itemRenderer,
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          template: itemRenderer,
        },
      ],
    },
  ];
  function handleClick() {
    console.log("clicked");
    if (!isLogin) {
      console.log("false");
      navigate("/login");
    } else {
      navigate("/");
    }
  }
  const start = (
    <img alt="logo" src="micro-dot-blog.svg" height="40" className="mr-2"></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
        onClick={handleClick}
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar
        model={items}
        start={start}
        end={end}
        className="bg-gray-900 shadow-2"
        style={{
          borderRadius: "3rem",
          backgroundImage:
            "linear-gradient(to right, var(--bluegray-300), var(--bluegray-700))",
        }}
      />
    </div>
  );
}
