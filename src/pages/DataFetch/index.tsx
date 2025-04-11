import React,{useState,useEffect} from 'react'
import axios from "axios";

function DataFetch() {
    const [posts,setPosts] = useState<any[]>([]);
    const[input,setInput] = useState("todos");
    const[fetchItem,setFetchItem] = useState("todos");

    function handleChange(e : any) {
        setInput(e.target.value);
    }

    function handleClick(){
        setFetchItem(input);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${fetchItem}`)
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        }).catch((err) => {
            setPosts([]);
            console.log(err);
        })
    },[fetchItem]);
  return (
    <div>
        <h4>Type What data to fetch : </h4>
        <input value={input} type="text" onChange={handleChange} /> <button onClick={handleClick}>Fetch</button>
        <h2>Data Fetched from API : </h2>
        <ul className='list-decimal pl-10'>
            {posts.length > 0 ? posts.map(todo => <li key={todo.id}>{todo.title}</li> ): <p>No data to fetch!</p>}
        </ul>
    </div>
  )
}

export default DataFetch;