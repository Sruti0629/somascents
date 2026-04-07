import ReactMarkdown from "react-markdown"

export default function Candlecreat(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Your Custom Candle Recipe</h2>
     <ReactMarkdown>{props.recipe}</ReactMarkdown>
     </section>
    )
}