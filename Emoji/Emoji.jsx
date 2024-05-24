import React, { useRef, useState } from 'react'
import '../Emoji/emoji.css'
const Emoji = () => {
    let [emo, setemo] = useState([])
    let emoji = useRef()
    let handlesubmit = (e) => {
        e.preventDefault()
        let val = emoji.current.value
        fetch(` https://emoji-api.com/emojis?search=${val}&access_key=2e44d72c492bad83bb4a4ddb388c2c4d15b52906`)
            .then(resp => resp.json())
            .then(data => setemo(data))
    }
    // emo.map((emojis => { console.log(emojis.character); }))
    return (
        <>
            <div className="emoji-page">
                <div className="header">
                   <h1>Search_<span>EmojiS</span></h1>
                   <p>a playful and expressive way to infuse personality into your <span>emoji's</span></p>
                </div>
                <div className="emoji">
                    <form onSubmit={handlesubmit}>
                        <input type="text" placeholder='enter emoji name' ref={emoji} />
                        <button>submit</button>
                    </form>
                </div>
                <div className="display">
                   <div className="hi">
                     {emo.map((aemo)=>{
                        let{character}=aemo;
                        return(
                            
                           <>
                            <h1> {character}</h1>
                           
                           </>
                            
                        )
                    })}
                   </div>
                </div>
                <div className="footer">
                   <h3>Search_EMOJI'S</h3>
                   <p>Search_EMOJI'S © 2023-All rights reserved || Designed By: PURUSHOTHAM  </p>
                </div>
            </div>
        </>
    )
}

export default Emoji