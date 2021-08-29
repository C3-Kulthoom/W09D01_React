import React from "react";
import { ListItem } from "./ListItem";

export const  List =({todos})=> {

    const todoItem =todos.map((e,i)=>{

return <ListItem todo ={e.todo} id={e.id}/>

})

return (
    <ul>{todoItem}</ul>
) }

