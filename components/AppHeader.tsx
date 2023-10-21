import {BiBell, BiBulb} from "react-icons/bi";
import bankLogo from '../assets/img/bank_logo.svg'
const AppHeader = () => {
    return (
        <header className="sticky z-10 top-0 left-0 w-full h-16 border-b border-white/20 bg-dark">
            <div className="h-full grid grid-cols-3 px-2">
                <div className="flex items-center">
                    <div className="relative h-12 w-14 flex items-center justify-center">
                        <img className="absolute top-0 left-0 h-full" src={bankLogo.src} alt=""/>
                        <span className="text-sm relative z-10 font-bold px-2 text-white bg-dark/90 rounded-xl">87</span>
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