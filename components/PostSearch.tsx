'use client';



import {FormEvent, FormEventHandler, useState} from "react";
import {getPostsBySearch} from "@/services/getPosts";

type Props = {
    onSearch: (value: any[]) => void
}

const PostSearch=({ onSearch }: Props)=>{
    const [search, setSearch] = useState('')
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        const post = await getPostsBySearch(search)
        onSearch(post)
    }
    return(
        <form onSubmit={ handleSubmit }>
            <input
                type="search"
                placeholder="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export {PostSearch}