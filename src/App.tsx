import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {ICard} from "./Interfaces/interface";
import {createDeck} from "./Utils/createDeck";
import {createLogger} from "vite";

function App() {

    const [deck, setDeck] = useState<ICard[]>()

    useEffect(() => {
        if (!deck){
            let tempDeck = createDeck()
            setDeck(tempDeck)
        }
    },[])

    useEffect(() => console.log(deck),[deck])

    return (
        <div className={"gameboard-wrapper"}>
            <div className={"upper-row"}
                 style={{width: "100%", height: "25%"}}>
                <div className={"player-field-horizontal"}></div>
            </div>
            <div className={"middle-row"}
                 style={{width: "100%", height: "50%", display: "flex", flexDirection: "row"}}>
                <div className={"player-field-vertical"} style={{}}></div>
                <div className={"gameboard"}>
                    {/*TODO move to CSS, only placeholder here for testing*/}
                    <div className={"deck-container"}>
                        <div className={"discard-deck"}>
discard deck
                        </div>
                        <div className={"draw-deck"}>
                            <img src={"./assets/card-back.png"} alt={"uno-deck"} className={"uno-draw-deck-img"}/>
                        </div>
                    </div>
                </div>
                <div className={"player-field-vertical"}></div>
            </div>
            <div className={"last-row"}
                 style={{width: "100%", height: "25%"}}>
                <div className={"player-field-horizontal"}></div>
            </div>
        </div>
    )
}

export default App
