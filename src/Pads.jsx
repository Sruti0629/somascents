import { useState } from "react";
import filepad from "./filepad";
import Pad from "./Pad";

export default function Pads({darkMode}) {


    const [pads, setPads] = useState(filepad);

    const style = {
        backgroundColor: darkMode ? "#222222" : "#cccccc"
    };

function toggle(id){
    setPads(prevPads => prevPads.map(item => {
        return item.id === id ? {...item, on: !item.on} : item
    }))
}

    const buttonElements = pads.map((pad) => {
        return <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} toggle={toggle} />;
    });
 
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    );
}

