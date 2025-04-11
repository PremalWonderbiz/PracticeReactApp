
const Child = (props : any) => {
    return (
        <div>
            <h1>Hello {props.name} in Child Component</h1>
            <button className="bg-blue-600 hover:bg-blue-500 text-white py-1 px-4 rounded-sm cursor-pointer" onClick={() => props.setName("Amit")}>Change Name</button>
            {/* {props.children} */}
        </div>
    );
}

export default Child;