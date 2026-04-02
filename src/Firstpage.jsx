import { useState } from "react";
import Flaverlist from "./Componets/Flaverlist";
import Candlecreat from "./Componets/Candlecreat";

export default function Firstpage() {

const [flavor, setFlavor] = useState(["Vanilla", "Lavender", "Rose", "Sandalwood", "Jasmine"]);



const [recipeShown, setRecipeShown] = useState(false);


function addFlavor(formData){
    const newFlaver = formData.get("flavor")
    setFlavor(prevFlavor => [...prevFlavor, newFlaver])

}

function toggleCandle(){
    setRecipeShown(prevState => !prevState)
}


    return(
        <>
        <form action={addFlavor} className="add-ingredient-form">
            <input type="text" placeholder="Enter candle scent flavor" aria-label='Add flaver' name="flavor" />
            <button type="submit"> Add</button>
         </form>

              {flavor.length > 0 && <Flaverlist 
              flavor={flavor} 
              toggleCandle={toggleCandle}
              /> }

            {recipeShown && <Candlecreat/> }

        </>

 

    )
}