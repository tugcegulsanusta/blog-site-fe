import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import AddCategoryPopUp from "../category/AddCategoryPopUp.tsx";
import DeleteCategoryPopUp from "../category/DeleteCategoryPopUp.tsx";

export default function NavigationBar() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [addCategoryDialog, setAddCategoryDialog] = useState(false);
  const [deleteCategoryDialog, setDeleteCategoryDialog] = useState(false);
  const [updateCategoryDialog, setUpdateCategoryDialog] = useState(false);
  const [navItems, setNavItems] = useState([]);

  const items = [
    {
      label: "Anasayfa",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "İstatistikler",
      icon: "pi pi-chart-line",
      command: () => navigate("/statistics")
    },
    {
      label: "Kategori",
      icon: "pi pi-bars",
      items: [
        {
          label: "Kategori ekle",
          icon: "pi pi-plus",
          command: () => setAddCategoryDialog(true),
        },
        {
          label: "Kategori sil",
          icon: "pi pi-minus",
          command: () => setDeleteCategoryDialog(true),
        },
        {
          label: "Kategori düzenle",
          icon: "pi pi-pencil",
          command: () => setUpdateCategoryDialog(true),
        },
      ],
    },
    {
      label: "Blog",
      icon: "pi pi-bars",
      items: [
        {
          label: "Blog ekle",
          icon: "pi pi-plus",
          command: () => navigate("/addPost"),
        },
        {
          label: "Blog sil",
          icon: "pi pi-minus",
          command: () => navigate("/deletePost"),
        },
        {
          label: "Blog düzenle",
          icon: "pi pi-pencil",
          command: () => navigate("/updatePost"),
        },
      ],
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
    <>
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
      <Dialog
        className="dialog"
        header=<h2>Kategori Ekle</h2>
        visible={addCategoryDialog}
        onHide={() => setAddCategoryDialog(false)}
      >
        <AddCategoryPopUp />
      </Dialog>
      <Dialog
        className="dialog"
        header=<h2>Kategori Sil</h2>
        visible={deleteCategoryDialog}
        onHide={() => setDeleteCategoryDialog(false)}
      >
        <DeleteCategoryPopUp />
      </Dialog>
    </>
  );
}
