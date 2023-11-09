import React from "react"
import memesData from "../memesData"
export default function Meme()
{
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage()
    {
        const memeArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomNumber].url)
    }


    return (
        <main>
            <div className="form">
            <input className="form--input" type="text" placeholder="Top Text" />
            <input className="form--input" type="text" placeholder="Buttom Text"/>
            <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src = {memeImage} className="meme--image" />
        </main>
    )
}