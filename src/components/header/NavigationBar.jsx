import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const items = [
    {
      label: "Anasayfa",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "Kategori Ekle",
      icon: "pi pi-plus",
      command: () => navigate("/addCategory"),
    },
    {
      label: "Blog Ekle",
      icon: "pi pi-pencil",
      command: () => navigate("/addPost"),
    },
    {
      label: "Kategoriler",
      icon: "pi pi-search",
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          command: () => navigate("/core"),
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
          shortcut: "⌘+B",
          command: () => navigate("/blocks"),
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          command: () => navigate("/ui-kit"),
        },
      ],
    },
  ];

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
        onClick={() => {
          if (!isLogin) {
            navigate("/login");
          } else {
            navigate("/");
          }
        }}
      />
    </div>
  );

  return (
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
  );
}
