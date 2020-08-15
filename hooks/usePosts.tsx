import {useEffect, useState} from "react";
import axios from "axios";

export const usePosts=()=>{
    const [posts,setPosts]=useState<Post[]>([])
    const [isLoading,setIsLoading]=useState(false)
    const [isEmpty,setIsEmpty]=useState(false)
    useEffect(()=>{
        setIsLoading(true)
        axios.get('/api/v1/posts').then(response=>{
            response.data.length===0?setIsEmpty(true): setPosts(response.data)
            setIsLoading(false)
        })
    },[])
    return{posts,isEmpty,isLoading,setIsEmpty,setIsLoading,setPosts}
}
