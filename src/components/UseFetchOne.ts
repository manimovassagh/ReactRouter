import  { useEffect ,useState} from 'react';
import axios from "axios";
import Post from "./Types"

export default function UseFetchOne(url:string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const[data,setData]=useState<Post>()
    useEffect(() => {
        axios.get(url)
            .then(respond => respond.data)
            .then(data => setData(data))
    })
        return data
}
