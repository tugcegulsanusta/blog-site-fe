import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import AddCategoryPopUp from "../category/AddCategoryPopUp.tsx";
import DeleteCategoryPopUp from "../category/DeleteCategoryPopUp.tsx";
import data from '../../jsonfiles/category.json';

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
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [addCategoryDialog, setAddCategoryDialog] = useState(false);
  const [deleteCategoryDialog, setDeleteCategoryDialog] = useState(false);
  const [updateCategoryDialog, setUpdateCategoryDialog] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const categoryData = [
      { id: 1, name: "Teknoloji" },
      { id: 2, name: "Bilim" },
      { id: 3, name: "Sağlıklı Yaşam" },
      { id: 4, name: "Seyahat" }
    ];
    setCategories(categoryData);

    const postsData = [
      { id: 1, header: "Header 1", content: "Content 1", categoryName: "Teknoloji", base64img: "img1" },
      { id: 2, header: "Header 2", content: "Content 2", categoryName: "Bilim", base64img: "img2" },
      { id: 3, header: "Header 3", content: "Content 3", categoryName: "Sağlıklı Yaşam", base64img: "img3" },
      { id: 4, header: "Header 4", content: "Content 4", categoryName: "Seyahat", base64img: "img4" },
      { id: 5, header: "Header 5", content: "Content 5", categoryName: "Teknoloji", base64img: "img5" },
      { id: 6, header: "Header 6", content: "Content 6", categoryName: "Bilim", base64img: "img6" }
    ];
    setPosts(postsData);
  }, []);



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
        image='../../../public/micro-dot-blog.svg'
        shape="circle"
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
