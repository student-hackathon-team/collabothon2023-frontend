import {BiBell, BiBulb} from "react-icons/bi";
import bankLogo from '../assets/img/bank_logo.svg'
import palomaBitmoji from '../assets/img/bitmojis/paloma_bitmoji.png'

const AppHeader = () => {
    return (
        <header className="sticky z-10 top-0 left-0 w-full h-16 bg-white border-b">
            <div className="h-full grid grid-cols-3 px-5">
                <div className="flex items-center">
                    <div className="relative">
                        <img className="w-10 object-contain rounded-full border-primary border-2" src={palomaBitmoji.src} alt=""/>
                        <span className="block absolute bottom-1 left-3/4 px-1 py-0.5 bg-accent text-primary text-xs rounded-xl text">
                            42.0
                        </span>
                    </div>

                </div>
                <div className="flex items-center justify-center">
                   <h3 className="font-primary font-semibold text-3xl">
                       <span className="text-primary text-5xl">4</span>
                       sigma
                   </h3>
                </div>
                <div className="flex items-center justify-end">

                    <div className="transform translate-y-[5px]">
                        <button>
                            <BiBulb className="w-6 h-6" />
                        </button>
                        <button className="ml-2">
                            <BiBell className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader