import React from "react"

export default function Meme()
{

    function getMemeImage()
    {
        console.log("ge")
    }

    return (
        <main>
            <div className="form">
            <input className="form--input" type="text" placeholder="Top Text" />
            <input className="form--input" type="text" placeholder="Buttom Text"/>
            <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
        </main>
    )
}