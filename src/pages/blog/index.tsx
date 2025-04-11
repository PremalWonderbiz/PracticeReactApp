import { useState } from "react";
import Child from "../Child/index";

const Editable = () => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState("Title");

  const toggleEditable = () => {
    setEditable((prevEditable) => !prevEditable);
  };

  const handleInputChange = (e:any) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {editable ? (
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      ) : (
        <>Title: {inputValue}</>
      )}
      <button onClick={toggleEditable}>{editable ? "Cancel" : "Edit"}</button>
    </div>
  );
};

export default function Blog() {
    const [name,setName] = useState("Premal");
    const [count,setCount] = useState(1);
    function handleClick() {  
        console.log("Before Set Count", count);  
        // This is what actually happens, we are just calling setCount(0+1) thrice.
        // If you pass a function as nextState, it will be treated as an updater function
        setCount(count => count + 1);  
        setCount(count); 
        setCount(count => count + 1);  
        setCount(count => count + 1);  
        console.log("After Set Count", count);  
      }  
    return (
            <div className="text-center">
                <h1>UseState Hook in Functional Component</h1>
                <p>This is component will show use of useState using Hook as its a Functional Component.</p>
                <hr />
                <h2>Hello {name}</h2>
                <button className="bg-blue-600 hover:bg-blue-500 text-white py-1 px-4 rounded-sm cursor-pointer" onClick={() => setName("Amit")}>Change Name</button>
                {/* Here below in Child component paragraph will only show up when we display props.children in Child component  */}
                <Child name={name} setName = {setName} > <p className="text-black">Hii </p> </Child> 
                <br />
                <h3>Count {count}</h3>
                <button className="bg-green-600 hover:bg-green-500 text-white py-1 px-4 rounded-sm cursor-pointer" onClick={() => handleClick()} >Increment</button>
                <br />
                <br />
                <hr />
                <br />
                <Editable />                
            </div>
    );
}