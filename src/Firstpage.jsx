import { useState, useRef, useEffect } from "react";
import Flaverlist from  "./Componets/Flaverlist";
import Candlecreat from "./Componets/Candlecreat";

import { getRecipeFromChefClaude } from './ai.js'


export default function Firstpage() {

const [flavor, setFlavor] = useState(["Soy Wax",
  "Cotton Wick (medium size)",
  "Fragrance Oil (Lavender or Vanilla)", "Glass Jar"]);

const [recipe, setRecipe] = useState("");

const recipeSection = useRef(null);
useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

  async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(flavor)
        setRecipe(recipeMarkdown)
    }

function addFlavor(formData){
    const newFlaver = formData.get("flavor")
    setFlavor(prevFlavor => [...prevFlavor, newFlaver])
 
}


    return(
        <>
        <form action={addFlavor} className="add-ingredient-form">
            <input type="text" placeholder="Add your must-haves" aria-label='Add flaver' name="flavor" />
            <button> Add</button>
         </form>

              {flavor.length > 0 && 
              <Flaverlist 
              ref={recipeSection}
              flavor={flavor} 
              getRecipe={getRecipe}
              /> }

            {recipe && <Candlecreat recipe={recipe} /> }

        </>

 

    )
}