import React from 'react'
import { useParams } from "react-router-dom";
import UseFetchOne from './UseFetchOne';


type Id = {
    [key: string]: string
}

export default function UserDetails() {
    const { id } = useParams<Id>()
    const data= UseFetchOne(`https://jsonplaceholder.typicode.com/comments/${id}`)
    console.log(data)
    return (

        <div>
            check
        </div>
    )
}
