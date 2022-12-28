import { useState, useEffect } from "react"
function PopularMovie (props) {
    const [movieDetails, setMovieDetails] = useState(null)

    const API_ENDPOINT = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';

    // const getPoster = (posterPath) => {
    //     return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`
    // }
    useEffect(
        () => {
            // Logic here
            async function getData() {
                const response = await fetch(API_ENDPOINT)
                const data = await response.json()

                // console.log(data)
                setMovieDetails(data)
            }
            getData()
        },
        []
    )
    // console.log(props)

    return (
        <>
        <div className="movies">

        <h4>{props.title}</h4>
        <p>{props.overview}</p>
        {
            movieDetails &&
        <img src={movieDetails.poster_path} />
        }

        </div>
        </>
    )
}
export default PopularMovie