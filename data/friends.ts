import palomaBitmoji from '../assets/img/bitmojis/paloma_bitmoji.png'

export interface Friend {
    name: string
    username: string
    bitmojiSrc: string
}

export const exampleUser = {
    name: 'Paloma',
    username: 'paloma',
    bitmojiSrc: palomaBitmoji
}

const friends: Friend[] = [
    exampleUser
]

export default friends