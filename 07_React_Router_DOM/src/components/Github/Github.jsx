import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github(){
    const data = useLoaderData();
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Anshydv18")
    //     .then((response)=> response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    return(
        <>
        <div className="m-1 p-4 bg-red-300">
        <img src={data.avatar_url} alt="Git_picture" />
         Github-followers {data.followers}</div>
        
        </>
    )
}

export const githubInfoLoader = async()=>{
    const response =await fetch("https://api.github.com/users/Anshydv18")
    return response.json()
}