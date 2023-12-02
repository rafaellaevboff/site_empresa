import {useCallback, useState} from "react"

//Custom hook usando useCallback
function useFetch(url){
    const [data, setData] = useState()

    const request = useCallback(async () =>{
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    
        fetch(url, options)
        .then(response =>{
            if(!response.ok){
                throw new Error(`Erro na solicitação: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            setData(data)
        })
        .catch(error => {
            console.log("Erro durante a solicitação: ");
        })
    }, [url])

    return [data, request]
}

export default useFetch