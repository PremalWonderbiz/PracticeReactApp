

import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<number>(0);
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setCount(count => count + 1);
        }, 100)
        return () => {
            intervalRef.current!=undefined && clearInterval(intervalRef.current)
        }
    }, []);

return (
    <div>
        <h2>UseRef</h2>
        <h4>Counter is {count}</h4>
        <button onClick={() => intervalRef.current!=null && clearInterval(intervalRef.current)}>Stop Interval</button>
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