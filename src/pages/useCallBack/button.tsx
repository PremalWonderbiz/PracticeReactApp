import React from "react";

function Button(prop: any) {
    console.log(`Rendering Button`);

    return <button onClick={prop.func}>{prop.children}</button>
}

export default React.memo(Button);