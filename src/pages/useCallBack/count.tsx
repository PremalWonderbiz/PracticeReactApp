import React from "react";

function Count(prop: any) {
    console.log(`Rendering ${prop.text}`);

    return <h3>{prop.text} is {prop.count}</h3>
}

export default React.memo(Count);