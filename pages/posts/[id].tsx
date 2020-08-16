import {GetStaticProps, NextPage} from "next";
import {getIdList, getPost } from "../../lib/posts";
import React from "react";

type Props={
    post:Post
}
const postShow:NextPage<Props>=(props)=>{
    const {post}=props
    return (<div>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{__html:post.htmlContent}} />

    </div>)
}
export default postShow
export const getStaticPaths=async ()=>{
    const idList=await getIdList()
    return {
        paths:idList.map(id=>({params:{id:id}})),
        fallback:false
    }
}


export const getStaticProps:GetStaticProps=async (x:any)=> {
    const id =x.params.id
    const post = await getPost(id)
    return {
        props: {
            post
        }

    }
}