import React, { ReactElement } from 'react'
import UseFetch from "./UseFetch"
import Post from "./Types"
import { Link } from 'react-router-dom'

export function UserList(): ReactElement {

    const data = UseFetch("https://jsonplaceholder.typicode.com/comments")

    if (!data) { return <div>Loading</div> }
    return (
        <div>
            {data.map((data) =>
            <Link to={`/comments/${data.id}`}>
                <div key={data.id}>
                    <span>{data.name}</span>
                    <span>{data.email}</span>
                    <span>{data.name}</span>
                </div>
                </Link>
            )}
        </div>
    )
}
