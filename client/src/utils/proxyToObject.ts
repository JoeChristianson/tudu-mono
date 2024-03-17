const proxyToObject = (proxy:any)=>{
    return JSON.parse(JSON.stringify(proxy))
}

export default proxyToObject