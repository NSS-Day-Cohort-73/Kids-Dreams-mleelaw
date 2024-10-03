import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (celebrityClick) => {
        const celebrityTarget = celebrityClick.target
        if (celebrityTarget.dataset.type === "celebrity") {
            window.alert(`${celebrityTarget.dataset.name}is a ${celebrityTarget.dataset.sport} star`)
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-type="celebrity"
                    data-id="${celebrity.id}" 
                    data-sport="${celebrity.sport}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
