import {BiChart, BiCog, BiHome, BiUser} from "react-icons/bi";

const AppNavigation = () => {
    return (
        <nav className="absolute bottom-0 border-t py-1">
            <div className="w-4/5 mx-auto grid grid-cols-4">
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