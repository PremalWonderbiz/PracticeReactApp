import React, { useCallback, useEffect, useState } from 'react'
import Title from './title';
import Count from './count';
import Button from './button';


function UseCallBack() {
    const [count, setCount] = useState(25);
    const [salary, setSalary] = useState(29000);

    const handleClick = useCallback(() => {
        setCount(count => {
            return count + 1;
        });
    },[count]);

    const handleSalary = useCallback(() => {
        setSalary(salary + 1000);
    },[salary]);

    return (
        <div className=''>
            <Title text="UseCallBack Hook" />
            <div>
                <Count text="Age" count={count} />
                <Button func={handleClick}>Increment Age</Button>
                <Count text="Salary" count={salary} />
                <Button func={handleSalary}>Increment Salary</Button>
            </div>
        </div>
    )
}

export default UseCallBack;