import React from "react";


function Title(prop: any) {
    console.log(`Rendering Title`);

    return <h2>{prop.text}</h2>
}

export default React.memo(Title);