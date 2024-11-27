'use client'
// import {Metadata} from "next";
import Link from "next/link";
import {useEffect, useState} from "react";
import {getAllPosts} from "@/services/getPosts";
import {Posts} from "@/components/Posts";
import {PostSearch} from "@/components/PostSearch";
// Это серверный вариант
// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         next: {
//             revalidate: 60,
//         },
//     });
//
//     if (!response.ok) throw new Error("Unable to fetch posts!");
//
//     return response.json();
// }

// export const metadata: Metadata = {
//     title: "Blog | Next App"
// }
// Это серверный вариант
// export default async function Blog() {
//
//     const post = await getData()
//
//     return (
//
//         <>
//             <h1>Blog page</h1>
//             <ul>
//                 {post.map((post: any) => (
//                     <li key={post.id}>
//                         <Link href={`/blog/${post.id}`}>
//                             {post.title}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </>
//
//
//     )
// }

// Это клиентский вариант
export default function Blog() {

    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    //Базовая щагрузка
    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(()=>setLoading(false))
    }, []);
    return (

        <>
            <h1>Blog page</h1>
            <PostSearch onSearch={setPosts}/>
            {loading ? (
                <h3>loading....</h3>
            ) : (
                <Posts posts={posts} />
            )}
        </>
    )
}