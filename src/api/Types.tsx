interface Category {
    id: number;
    name: string;
}
interface Post {
    id: number,
    category_id: number,
    header: string,
    content: string,
    view: number
}

export { Category, Post };