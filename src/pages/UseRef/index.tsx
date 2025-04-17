

import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    // const [count, setCount] = useState(0);
    // const intervalRef = useRef<number>(0);
    // useEffect(() => {
    //     intervalRef.current = window.setInterval(() => {
    //         setCount(count => count + 1);
    //     }, 100)
    //     return () => {
    //         intervalRef.current != undefined && clearInterval(intervalRef.current)
    //     }
    // }, []);

    //Problem 1
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFocusClick() {
        inputRef.current?.focus();
    }

    //Probmel 2
    const videoRef = useRef<HTMLVideoElement>(null)

    //Problem 3
    const [myNum, setMyNum] = useState<number>(0);
    const randNum = useRef<number>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        randNum.current = getRandomNumber();
        console.log(randNum.current);

    }, [])

    function getRandomNumber(): number {
        return Math.floor(Math.random() * 10);
    }

    function handleGuessClick() {
        if (randNum.current == myNum) {
            console.log("You Win!");
            paraRef.current != null ? paraRef.current.innerHTML = "You Win!" : null;
        }
        else if (Number(randNum.current) < myNum) {
            console.log("Too High!");
            paraRef.current != null ? paraRef.current.innerHTML = "Too High!" : null;
        }
        else if (Number(randNum.current) > myNum) {
            console.log("Too Low!");
            paraRef.current != null ? paraRef.current.innerHTML = "Too Low!" : null;
        }
        else {
            console.log("nothing works");
            paraRef.current != null ? paraRef.current.innerHTML = "" : null;
        }
    }

    //Problem 4
    const formParaRef = useRef<HTMLParagraphElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    function handleFormSubmit(e:any) {
        e.preventDefault();

        const formData = new FormData(formRef.current?? new HTMLFormElement)
        console.log(...formData.entries());
        console.log(paraRef.current);
        let content : string = "";
        formData.entries().forEach(e => {
            content += `<div><span className="text-lg"> ${e[0]}</span> <span className="ms-4">${e[1]}</span></div>`;
        })
       
        if(formParaRef.current != null){
            formParaRef.current.innerHTML = 
            `<div>
                ${content}
            <div>`
        }
        
        formRef.current?.reset();
    }
    return (
        <div>
            <h2>UseRef</h2>
            {/* <h4>Counter is {count}</h4>
            <button onClick={() => intervalRef.current!=null && clearInterval(intervalRef.current)}>Stop Interval</button> */}
            <div>
                <h5>Problem 1 : Try to Focus input element on click of button</h5>
                <input ref={inputRef} type="text" placeholder='Enter something' />
                <button onClick={handleFocusClick}>Focus</button>
            </div>

            <div className='py-4'>
                <h5>Problem 2 : Try to play video on mouese enters and pause on it leaves</h5>
                <video onMouseEnter={() => videoRef.current?.play()} onMouseLeave={() => videoRef.current?.pause()} ref={videoRef} src="/video.mp4" className='w-[400px]' controls></video>
            </div>

            <div className='py-4'>
                <h5>Problem 3 : Guess the number</h5>
                <input type="number" value={myNum} onChange={(e) => setMyNum(Number(e.target.value))} />
                <button className='px-4 mr-4 bg-blue-500 rounded-xl py-1' onClick={handleGuessClick}>Guess Number</button>
                <button className='px-4 mr-4 bg-yellow-500 rounded-xl py-1' onClick={() => {
                    setMyNum(0);
                    randNum.current = getRandomNumber();
                    if (paraRef.current != null) {
                        paraRef.current.innerHTML = "";
                    }
                }}>Reset All</button>
                <p ref={paraRef}></p>
            </div>

            <div>
                <h5>Problem 5 : Print form data in empty paragraph</h5>
                <form ref={formRef} onSubmit={(e) => handleFormSubmit(e)}>
                    <div id="message"></div>
                    <div >
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your fullname" required />
                        <small></small>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                        <small></small>
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" placeholder="Enter your age" required />
                        <small></small>
                    </div>
                    <div >
                        <button type="submit" className='px-4 mr-4 bg-blue-500 rounded-xl py-1'>Submit</button>
                    </div>
                </form>
                <p ref={formParaRef} ></p>
            </div>
        </div>

    )
}

export default UseRef
// import React, { useEffect, useRef, useState } from 'react'

// function UseRef() {
//     const [count, setCount] = useState(0);
//     const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCount(count => count + 1);
//         }, 1000)
//         intervalRef.current = interval;
//         return () => {
//             intervalRef.current!=null && clearInterval(intervalRef.current)
//         }
//     }, []);

// return (
//     <div>
//         <h2>UseRef</h2>
//         <h4>Counter is {count}</h4>
//         <button onClick={() => intervalRef.current!=null && clearInterval(intervalRef.current)}>Stop Interval</button>
//     </div>

// )
// }

// export default UseRef