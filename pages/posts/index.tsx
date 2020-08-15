import {GetStaticProps, NextPage} from "next";
import React from "react";
import {getPosts} from "../../lib/posts";


const PostsIndex:NextPage<Props>=(props)=>{
    console.log(props.posts)
    const {posts}=props
    debugger
    // const {posts,isLoading,isEmpty}= usePosts()
    return (
        <div>
            <h1>文章列表</h1>
            {posts.map(p=><div key={p.id}>
                {p.id}
            </div>)}
            {/*{isLoading? <div>loading...</div>:*/}
            {/*    isEmpty?<div>nothing here</div>:*/}
            {/*        posts.map(item=><div key={item.id}>*/}
            {/*        {item.title}*/}
            {/*    </div>*/}
            {/*)}*/}
    </div>)
}
export default PostsIndex

export const getStaticProps:GetStaticProps=async ()=>{
    const posts= await getPosts()
    return {
        props:{
            posts
        }

    }
}