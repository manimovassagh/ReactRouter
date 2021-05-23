import React, { ReactElement } from 'react'
import UseFetch from "./UseFetch"
import { Link } from 'react-router-dom'

export function UserList(): ReactElement {

    const data = UseFetch("https://jsonplaceholder.typicode.com/comments")

    if (!data) { return <div>Loading</div> }
    return (
        <div className="ui list">
            {data.map((data) =>
            <Link to={`/comments/${data.id}`}>
                <div className="item" key={data.id}>
                <i className="users icon"></i>
                    <div className="item">{data.name}</div>
                    <i className="mail icon"></i>
                    <div className="content">{data.email}</div>
                    
                </div>
                </Link>
            )}
        </div>
    )
}
