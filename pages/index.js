import Main from "./layouts/main.js"
import Hero from "./components/hero.js"

const meta = {
    title: "Home"
}

export default function Index(){
    return Main(/*html*/`
        ${Hero()}
    `, meta)
}