import {NextPage} from "next";
import axios from 'axios'
import React, {useEffect, useState} from "react";

type Post={title:string,
id:string,
date:string}
const PostsIndex:NextPage=()=>{
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
    return (
        <div>
            <h1>文章列表</h1>
            {isLoading? <div>loading...</div>:
                isEmpty?<div>nothing here</div>:
                    posts.map(item=><div key={item.id}>
                    {item.title}
                </div>
            )}
    </div>)
}
export default PostsIndex