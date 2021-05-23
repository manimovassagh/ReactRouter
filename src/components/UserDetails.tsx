import React from 'react'
import { useParams } from "react-router-dom";
import UseFetchOne from './UseFetchOne';
import { useHistory } from "react-router-dom";

type Id = {
    [key: string]: string
}

export default function UserDetails() {
    const { id } = useParams<Id>()
    const data= UseFetchOne(`https://jsonplaceholder.typicode.com/comments/${id}`)
    let history = useHistory();
    function handleClick() {
        history.push("/comments");
      }
    return (
        <div>
          {data?.body}
          {data?.name}
          {data?.email}
          <button  className="ui brown button" onClick={handleClick}>Back to Home</button>
        </div>
    )
}
