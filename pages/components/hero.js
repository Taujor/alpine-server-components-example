import Counter from "./counter.js"
import Heading from "./heading.js"

export default function Hero(){
    return /*html*/`
        <section id="hero" class="center max">
            ${Heading("Example")}
            <div class="flex">
                ${Counter()}
            </div>
        </section>
    `
}