
export default function Input() {

const flavor = ['Vanilla', 'Lavender', 'Cinnamon', 'Rose', 'Lemon'];

const flavorList = flavor.map(items => {
    return <li key={items}>{items}</li>
})

function handleSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const newFlaver = formData.get("flavor")
    flavor.push(newFlaver)
    console.log(flavor);

}
    return(
        <>
         <form onSubmit={handleSubmit} className="add-ingredient-form">
            <input type="text" placeholder="Enter candle scent flavor" aria-label='Add flaver' name="flavor" />
            <button type="submit"> Add</button>
         </form>
<ul>
{flavorList}
</ul>

        </>
    )
}