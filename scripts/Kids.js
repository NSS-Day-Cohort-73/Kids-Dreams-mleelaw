import { getChildren } from "./database.js"

const children = getChildren()


document.addEventListener(
    "click",
    (kidClick) => {
        const kidTarget = kidClick.target
        if (kidTarget.dataset.type === "kids") {
                
            window.alert(`${kidTarget.dataset.name} wish is to ${kidTarget.dataset.wish}`)

        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-type="kids"  data-name="${child.name}" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

