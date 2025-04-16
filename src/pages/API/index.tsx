import React, { useEffect, useState } from 'react'

function APICosume() {
    const [posts, setPosts] = useState<any>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    function capitalizeFirstLetter(val : string) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }    
    return (
        <div className='text-center'>
            <h1>APICosume</h1>
            <div className='px-50 py-10 text-left'>
                <h3>Data fetched from posts API : <a className='text-lg hover:text-blue-600 hover:underline text-blue-700 ' href="https://jsonplaceholder.typicode.com/" target='_blank'>JsonPlaceholder website</a></h3>
                {posts.map((post : any) => {
                    return (
                        <h5>Post {post.id} Title :  {capitalizeFirstLetter(post.title)}</h5>
                    );
                })}
            </div>
        </div>
    )
}

export default APICosume
