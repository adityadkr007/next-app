import Link from "next/link";
import { Fragment } from "react";
interface User {
    id:number,
    name:string
}
const view = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users:User[] = await res.json();
    return (
       <>
       <button className="btn btn-success text-info">Button</button>
       <h1>Users</h1>
       <ul>
        {users.map(x=> <li key={x.id} className="bg-sky-300 hover:bg-sky-100 p-3">{x.name}</li>)}
       
       </ul>
       </>
    );
}
export default view
