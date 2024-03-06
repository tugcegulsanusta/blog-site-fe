import React from "react";
import { useLocation } from "react-router-dom";
import { Post } from '../api/Types.tsx';
import categories from '../jsonfiles/category.json';

interface LocationState {
    filteredPosts: Post[];
}

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
                        <h3>{post.header}</h3> {/* post'un başlık özelliğini göstermek için post.title kullanılmalı */}
                        <p>Kategori: {categoryName[post.id - 1]}</p> {/* categoryId kullanarak kategori adını bul, -1 çünkü kategori id'leri 1'den başlıyor ancak indexler 0'dan başlıyor */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilteredPostsPage;
