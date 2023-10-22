import Link from "next/link";
import {BsX} from "react-icons/bs";


const Transfer = () => {
    return (
        <div className="w-screen h-screen bg-black">
            <Link href="/" className="fixed top-5 left-5 z-10">
                <BsX className="w-10 h-10 text-white" />
            </Link>
            <video src="/example_snap.mp4" autoPlay={true} loop={true} muted={true} className="fixed top-0 left-0 w-full h-full object-cover bg-black"></video>

            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="relative h-20 w-20">
                    <Link href="/transfer/edit" className="w-20 h-20 bg-black rounded-full border-4 border-white flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-500 rounded-full animate-pulse"></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Transfer