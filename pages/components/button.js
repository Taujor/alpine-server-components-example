export default function Button(children, attributes){
    return /*html*/`
        <a class="button" ${attributes.join()}>${children}</a>
    `
}