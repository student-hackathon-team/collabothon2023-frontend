import palomaBitmoji from '../../assets/img/bitmojis/paloma_bitmoji.png'
import {faker} from "@faker-js/faker";

const BitmojiChart = () => {
    return (
        <div className="grid grid-cols-6 gap-5">
            {
                new Array(6).fill(null).map(() => (
                    (
                        <div className="">
                            <div className="flex items-end justify-center mb-2 border-b h-16">
                                <div className="w-[5px] block from-secondary to-purple bg-gradient-to-t rounded-xl" style={{
                                    height: `${faker.number.int({ min: 20, max: 100 })}%`
                                }}></div>
                            </div>
                            <div className="">
                                <img src={palomaBitmoji.src} alt=""
                                     className="rounded-full w-10 aspect-square border border-purple bg-light"/>
                            </div>
                        </div>
                    )
                ))
            }

        </div>
    )
}

export default BitmojiChart