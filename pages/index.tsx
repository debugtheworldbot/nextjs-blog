import React from 'react'
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
    return (
        <div>
            <h1>Your browser is {browser.name}</h1>
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