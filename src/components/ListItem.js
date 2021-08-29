import React from "react";

export const ListItem=({todo , id})=>{

    const consoleId = (e) => {
        console.log(e.target.id);
      };
return <li onClick={consoleId} >
todo = {todo}
</li>

}

