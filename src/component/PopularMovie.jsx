import { useEffect, useState } from "react"

function PopularMovie (props) {



    return (
        <>
        <div className="w-96 inline-flex flex-col ">

            {/* Why does it return an extra div (GET: Undefined), after the array ?? */}
            <img className="my-4 m-auto" src={(`https://www.themoviedb.org/t/p/w220_and_h330_face/${props.poster_path}`)} />

            <h4 className="text-3xl mb-2">{props.title}</h4>
            <p className=" w-80 m-auto">{props.overview}</p>
        </div>
        </>
    )
}
export default PopularMovie