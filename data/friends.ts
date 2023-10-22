import palomaBitmoji from '../assets/img/bitmojis/paloma_bitmoji.png'
import m1Bitmoji from '../assets/img/bitmojis/m_bitmoji_1.png'
import f1Bitmoji from '../assets/img/bitmojis/f_bitmoji_1.png'
import m2Bitmoji from '../assets/img/bitmojis/m_bitmoji_2.png'

export interface Friend {
    name: string
    username: string
    bitmojiSrc: string
}

export const exampleUser = {
    name: 'Paloma Jones',
    username: 'paloma',
    bitmojiSrc: palomaBitmoji.src
}

const friends: Friend[] = [
    exampleUser,
    {
        name: 'Andrew',
        username: 'andrew45',
        bitmojiSrc: m1Bitmoji.src
    },
    {
        name: 'Amy',
        username: '__amy',
        bitmojiSrc: f1Bitmoji.src
    },
    {
        name: 'Matthiew',
        username: 'matthiew2',
        bitmojiSrc: m2Bitmoji.src
    }
]

export default friends