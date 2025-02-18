import Link from "next/link";
import { Fragment } from "react";
interface User {
    id: number,
    name: string
}
const view = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();
    return (
        <>
            <button className="btn btn-primary">Button</button>
            <h1>Users</h1>
            <table className="table table-zebra w-96">
                <thead>
                    <tr>
                        <th>
                            <td>Id</td>
                            <td>Name</td>
                        </th>
                    </tr>
                </thead>
                <tbody>
                
                        {users.map(x =>
                            <tr key={x.id}>
                                <td>{x.id} </td>
                                <td>{x.name}</td>
                            </tr>
                        )}

                   
                </tbody>


            </table>
        </>
    );
}
export default view
