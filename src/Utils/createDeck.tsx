import {ICard} from "../Interfaces/interface";

export const createDeck = () => {
    const COLORS = ["RED", "BLUE", "GREEN", "YELLOW"]

    let unoDeck: ICard[] = []
    let card: ICard
    for (let i = 0; i < COLORS.length; i++) {
        let color: string = COLORS[i]
        for (let j = 0; j <= 9; j++) {
            card = {
                color: color,
                symbol: j as number,
                wasFired: false,
                id: idBuilder(j, color)
            }
            unoDeck.push(card)
            if (j !== 0)
                unoDeck.push(card)
        }

        for (let j = 0; j < 2; j++) {
            let drawTwoCard = {
                color: color,
                symbol: "D2",
                wasFired: false,
                id: idBuilder("D2", color)
            }
            let skipCard = {
                color: color,
                symbol: "S",
                wasFired: false,
                id: idBuilder("S", color)
            }
            let reverseCard = {
                color: color,
                symbol: "R",
                wasFired: false,
                id: idBuilder("R", color)
            }
            unoDeck.push(drawTwoCard, skipCard, reverseCard)
        }
    }

    for (let i = 0; i < 4; i++) {
        let color = "W"
        let drawFourCard = {
            color: color,
            symbol: "D4",
            wasFired: false,
            id: idBuilder("D4", color)
        }
        let wildCard = {
            color: color,
            symbol: "W",
            wasFired: false,
            id: "W"
        }
        unoDeck.push(drawFourCard,wildCard)
    }

    // shuffle
    return unoDeck
        .map((value) => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)
}

const idBuilder = (symbol: string | number, color: string) => {
    return "".concat(symbol.toString(), color.charAt(0)).toUpperCase()
}