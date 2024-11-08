//FortuneCookie.js

const fortunes = require('./fortunes.json')


const randomFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length)
    return fortunes[randomIndex]
}
module.exports = randomFortune
