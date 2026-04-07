
export default function Flaverlist (props){

const flavorList = props.flavor.map(items => {
    return <li key={items}>{items}</li>
})

    return(
        <section>
                <h2>Candle Making Materials List</h2>
                <ul className="ingredients-list flovorstyle" aria-live="polite">{flavorList}</ul>
                {props.flavor.length > 3 && <div className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Let’s Make Something Cozy</h3>
                        <p>Pick your materials and we’ll help you turn them into a beautiful candle.</p>
                    </div>
                    <button onClick={props.getRecipe}>Start Creating</button> 
                </div>}
            </section> 
        )
}  

