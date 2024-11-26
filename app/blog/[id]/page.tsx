import {Metadata} from "next";

async function  getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) throw new Error("Unable to fetch posts!");

    return response.json();
}

type Props = {
    params: {
         // название именно по наименованию папки
        id: string;
    }
}

// Передаем сео для динамических страниц
export async function generateMetadata({ params }: Props) {
    const { id } = await params; // Используем await для params
    const post = await getData(id)
    return {
        title: post.title, // Теперь id доступен
    }
}


export default async function Post({ params }: Props) {
    const { id } = await params; // Используем await для params
    const post = await getData(id)
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
        // <h1>Post page {id}</h1>
    )
}