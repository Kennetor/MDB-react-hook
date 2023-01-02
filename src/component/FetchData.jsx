import { useState, useEffect } from "react"
import PopularMovie from "./PopularMovie"

const API_ENDPOINT = "https://api.themoviedb.org/3/movie/popular?api_key=b20153559d384216be71ca79a4585245&language=en-US&page=1"

function FetchData() {
    const [data, setData] = useState(null)


    useEffect(
        () => {
            async function getData() {
                const response = await fetch(API_ENDPOINT)
                const data = await response.json()
                console.log(data)
                setData(data)
            }
            getData()
        },
        []
    )
return (
    <div>
        {
            data && 
            data.results.map(
                (movie, index) => <PopularMovie key={index} {...movie}/>
            )
        }

    </div>
)
}

export default FetchData