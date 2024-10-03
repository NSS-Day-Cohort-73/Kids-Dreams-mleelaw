import { getChildren } from "./database.js"
import { getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    for (const celebrity of celebrityArray) {
        if (celebrity.id === kidObject.celebrityId) {
            return celebrity
        }
    }
    return null
}

export const Pairings = () => {
    let html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        if (kidsStar) {
            html += `
                <li class="kidsStar">
                    ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
                </li>
            `
        }
    }

    html += "</ul>"

    return html
}

