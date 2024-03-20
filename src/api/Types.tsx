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
interface User {
    id: string,
    username: string,
    email: string,
    password: string,
    authorities: string,
    base64img: string
}

export { Category, Post, User };