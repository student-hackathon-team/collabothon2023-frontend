import {BiChart, BiCog, BiHome, BiUser} from "react-icons/bi";

const AppNavigation = () => {
    return (
        <nav className="fixed bottom-0 w-full h-12 bg-dark text-light border-t border-light/20 py-1">
            <div className="w-4/5 mx-auto grid grid-cols-4 h-full items-center">
                <div className="flex justify-center">
                    <BiHome className="w-7 h-7" />
                </div>
                <div className="flex justify-center">
                    <BiUser className="w-7 h-7" />
                </div>
                <div className="flex justify-center">
                    <BiChart className="w-7 h-7" />
                </div>
                <div className="flex justify-center">
                    <BiCog className="w-7 h-7" />
                </div>
            </div>
        </nav>
    )
}

export default AppNavigation