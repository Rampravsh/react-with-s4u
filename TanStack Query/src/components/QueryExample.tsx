import react, { useEffect, useState } from 'react';

type Post = {
    id: number;
    title: string;
    body:string;
};

export function QueryExample() {
    
    const [posts, setPost] = useState<Post[]>([]);
    const [isLoading , setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        fetchPosts()
            .then(setPost)
            .catch((error) => {
                setError(error instanceof Error ? error : new Error(String(error)));
            })
            .finally(() => setIsLoading(false));

    },[]);

    return(
        <>
            <div className='section'>
                <h2>
                    1. Intro and Setup 
                </h2>
                <p>
                    This is our first query without Tanstack Query.
                </p>
                {isLoading && <p>Loading...</p>}
                {
                    error && <p>Something went wrong {error.message}</p>
                }
                {
                    posts.map((post)=>(
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
function fetchPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            return response.json() as Promise<Post[]>;
        });
}

