import { elapsedTime } from "../scripts/start-game.js"


const timeFormat = (time) => {
    const hours = time/3600000
    const hh = Math.floor(hours)

    const minutes = (hours - hh) * 60
    const mm = Math.floor(minutes)

    const seconds = (minutes - mm) * 60
    const ss = Math.floor(seconds)

    const formattedHH = hh.toString().padStart(2, "0");
    const formattedMM = mm.toString().padStart(2, "0");
    const formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`
}


export { timeFormat }


