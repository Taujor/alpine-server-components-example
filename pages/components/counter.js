import Button from "./button.js"

export default function Counter (){
    return /*html*/`
        <div x-data="{ count: 0 }">
            <span class="count" x-text="count"></span>
            ${Button("Increment", ["x-on:click='count++'"])}
        </div>
    `
}