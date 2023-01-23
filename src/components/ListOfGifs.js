import React, {useState, useEffect}  from "react"
import Gif from "./Gif"
import getGifs from '../services/getGifs'

export default function ListOfGifs({query}){
    const [gifs, setGifs]=useState([])

    useEffect(()=>{
        getGifs({query})
        .then(gifs=>setGifs(gifs))
    }, [query])

    return gifs.map(({id, title, url}) =>
        <Gif
            key={id}
            title={title}
            id={id}
            url={url}
        />
    )
}
