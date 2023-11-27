import {useCallback, useState} from "react"

//Custom hook usando useCallback
function useFetch(url){
    const [data, setData] = useState()

    const request = useCallback(async () =>{
        const response = await fetch(url)
        const dataJson = await response.json()

        setData(dataJson)
    }, [url])

    return [data, request]
}

export default useFetch