import {useEffect, useState} from "react" 

function useCurrencyInfo(currency){

    const [data,setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) //call the get api end point
        .then((res) => res.json()) //convert the data to JSON
        .then((res) => setData(res[currency])) // hold the json data
        console.log(data)
    }, [currency])
    console.log(data); //setData helps to set the value in the data

    return data
    

}

export default useCurrencyInfo;