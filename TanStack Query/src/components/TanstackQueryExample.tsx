import { useQuery } from '@tanstack/react-query';
import react, { useState } from 'react';

type Post = {
    id: number;
    title: string;
    body: string;
};

export function TanstackQueryExample() {
    const [isLoadData , setIsLoadData] = useState(false);

    const {data: posts, isLoading, error ,refetch} = useQuery({queryKey:['posts'], queryFn:fetchPosts ,enabled:isLoadData});

    return (
        <>
            <div className='section'>
                <h2>
                    1. Intro and Setup
                </h2>
                <p>
                    This is our first query with Tanstack Query.
                </p>
                 {isLoading && <p>Loading...</p>}
                {
                    error && <p>Something went wrong {error.message}</p>
                }
                <button onClick={()=>setIsLoadData(true)}>Load Data</button>
                <button onClick={()=>refetch()}>Refetch Data</button>
                {posts &&
                    posts.map((post:Post) => (
                        <div key={post.id} className='card'>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>

                        </div>
                    ))
                }

            </div>
        </>
    )
}


async function fetchPosts() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    
    if(!res.ok){
        throw new Error("Network response was not ok")
    }

    const data = await res.json();
    return data;
}

