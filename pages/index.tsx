import React, {useEffect, useState} from 'react'
import {GetServerSideProps, NextPage} from "next";
import {UAParser} from 'ua-parser-js'

type Props={
    browser:{
        name:string,
        version:string,
        major:string
    }
}
const Home:NextPage<Props>=(props)=> {
    const {browser}=props
    const [width,setWidth]=useState(0)
    useEffect(()=>{
        const w = document.documentElement.clientWidth
        setWidth(w)
    },[])
    return (
        <div>
            <h1>Your browser is {browser.name}</h1>
            <h1>Your browser width is {width}</h1>
        </div>
    );
}
export default Home
export const getServerSideProps:GetServerSideProps=async (context)=>{
    const ua=context.req.headers['user-agent']
    const result =await new UAParser(ua).getResult()
    return  {
        props:{
            browser:result.browser
        }
    }
}