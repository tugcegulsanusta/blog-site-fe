interface Category {
    id: number;
    name: string;
}
interface Post {
    id: number,
    categoryId: number,
    header: string,
    content: string,
    view: number
}

export { Category, Post };