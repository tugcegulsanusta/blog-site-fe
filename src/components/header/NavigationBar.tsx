import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import AddCategoryPopUp from "../category/AddCategoryPopUp.tsx";
import DeleteCategoryPopUp from "../category/DeleteCategoryPopUp.tsx";
import user from "../../jsonfiles/user.json"
import UpdateCategoryPopUp from "../category/UpdateCategoryPopUp.tsx";
import categoryData from "../../jsonfiles/categories.json"
import { useLocation } from "react-router-dom";

interface User {
  id: string,
  username: string,
  email: string,
  password: string,
  authorities: string,
  base64img: string
}
interface Category {
  id: number;
  name: string;
}
interface Post {
  id: number;
  header: string;
  content: string;
  categoryName: string;
  base64img: string;
}

export default function NavigationBar() {
  const location = useLocation();
  if (location.pathname.includes("login") || location.pathname.includes("signup")) {
    return null;
  }

  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [addCategoryDialog, setAddCategoryDialog] = useState(false);
  const [deleteCategoryDialog, setDeleteCategoryDialog] = useState(false);
  const [updateCategoryDialog, setUpdateCategoryDialog] = useState(false);

  const [categories, setCategories] = useState<Category[]>(categoryData);




  function handleUserAvatar() {
    if (isLogin) {
    }
  }

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
      items: categories.map(category => ({
        label: category.name,
        icon: 'pi pi-folder',
        command: () => navigate(`/category/${category.name.toLowerCase()}`)
      }))
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
        image='https://media.istockphoto.com/id/1381221247/tr/foto%C4%9Fraf/beautiful-afro-girl-with-curly-hairstyle.jpg?s=1024x1024&w=is&k=20&c=4p6sLfDa4Sssxgq0wZBL5TF_yeTCobkrNZ3f2LKIqA0='
        shape='circle'
        onClick={() => {
          if (!isLogin) {
            navigate("/login");
          } else {
            navigate("/user");
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
        header={<h2 style={{ textAlign: 'center' }}>Kategori Ekle</h2>}
        visible={addCategoryDialog}
        onHide={() => setAddCategoryDialog(false)}
      >
        <AddCategoryPopUp />
      </Dialog>

      <Dialog
        className="dialog"
        header={<h2 style={{ textAlign: 'center' }}>Kategori Sil</h2>}
        visible={deleteCategoryDialog}
        onHide={() => setDeleteCategoryDialog(false)}
      >
        <DeleteCategoryPopUp />
      </Dialog>

      <Dialog
        className="dialog"
        header={<h2 style={{ textAlign: 'center' }}>Kategori Düzenle</h2>}
        visible={updateCategoryDialog}
        onHide={() => setUpdateCategoryDialog(false)}
      >
        <UpdateCategoryPopUp />
      </Dialog>
    </>
  );
}
