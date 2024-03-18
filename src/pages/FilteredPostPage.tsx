import React from "react";
import { useLocation } from "react-router-dom";
import { Category, Post } from '../api/Types.tsx';
import categoryData from '../jsonfiles/categories.json';
interface LocationState {
    filteredPosts: Post[];
}

const categories: Category[] = categoryData;

const FilteredPostsPage: React.FC = () => {
    const location = useLocation();
    const { filteredPosts } = (location.state as LocationState) || { filteredPosts: [], categoryName: '' };

    // categories json dosyasından kategori isimlerini al
    const categoryName = categories.map((category) => category.name);

    return (
        <div>
            <h1>{categoryName} Kategorisine Göre Filtrelenmiş Gönderiler</h1>
            <div>
                {filteredPosts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.header}</h3>
                        <p>Kategori: {categoryName[post.id]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilteredPostsPage;
