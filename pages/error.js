import Main from "./layouts/main.js"
import Heading from "./components/heading.js"

const meta = {
    title: "Not Found"
}

export default function Error(){
    return Main(/*html*/`
        <div>
            ${Heading("Not Found")}
        </div>
    `, meta)
}