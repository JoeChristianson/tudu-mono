import { DynamicObject } from "../../types/generic"
import getJWT from "./getJWT"
import route from "./route"


export const fexGet = async (urlEnd:string)=>{
    const url = route(urlEnd)
    const bearer = getJWT()
    const resp = await fetch(url,{
    method:'GET',
        headers:{
            'Content-Type':"application/json",
            'Authorization':`Bearer ${bearer}`
        }
    })
    const data = await resp.json()
    return data
}

export const fexPost = async (urlEnd:string,body:any)=>{
    try{
        const bearer = getJWT()
        const url = route(urlEnd)
        const resp = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':"application/json",
                'Authorization':`Bearer ${bearer}`
            },
            body:JSON.stringify(body)
        })

        const data = await resp.json()
        return data
    }catch(err){
        return err
    }
}

export const fexDelete = async (urlEnd:string,body:DynamicObject)=>{
    
    const url = route(urlEnd)
    const resp = await fetch(url,{
        method:'DELETE',
        headers:{
            'Content-Type':"application/json",
            'Authorization':`Bearer ${getJWT()}`
        },
        body:JSON.stringify(body)
    })
    const data = await resp.json()
    return data
}

export const fexPut = async (urlEnd:string,body:any)=>{
    const url = route(urlEnd)
    console.log({url})
    const resp = await fetch(url,{
        method:'PUT',
        headers:{
            'Content-Type':"application/json",
            'Authorization': `Bearer ${getJWT()}`
        },
        body:JSON.stringify(body)
    })
    const data = await resp.json()
    return data
}

export const fexCorsGet = async (url:string)=>{
    try{
        const resp = await fetch(url)
        return resp
    }catch(err){
        const resp = await fexPost("api/nocors/",{
            url
        })
        return resp
    }
}