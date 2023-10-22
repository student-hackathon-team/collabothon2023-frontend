import * as ScrollArea from "@radix-ui/react-scroll-area";
import {DeviceFrameset} from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

const DeviceFrame = ({children}) => (
    <div className="">
        <DeviceFrameset device="iPhone X" color="black">
            {children}
        </DeviceFrameset>
    </div>
)

const FramePage = () => {
    return (
        <div className={[
            "w-full min-h-full flex items-center justify-center",
            'bg-gray-900'
        ].join(' ')}>
            <DeviceFrame>
                <iframe src="/" className="w-full h-full overflow-hidden"></iframe>
            </DeviceFrame>
        </div>
    )
}

export default FramePage