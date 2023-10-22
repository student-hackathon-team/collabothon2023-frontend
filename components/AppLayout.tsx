import AppNavigation from "../components/AppNavigation";
import AppHeader from "./AppHeader";
import type {FC} from "react";
import {DeviceFrameset} from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import {useEffect, useState} from "react";
import * as ScrollArea from '@radix-ui/react-scroll-area';

const DeviceFrame = ({children}) => (
    <div className="">
        <DeviceFrameset device="iPhone X" color="black">
            {children}
        </DeviceFrameset>
    </div>
)

const breakpoint = 1024 // tw md

const AppLayout: FC = ({children}) => {
    const [isDesktop, setIsDesktop] = useState(false)
    const handleResize = () => {
        setIsDesktop(window.innerWidth > breakpoint)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()
    }, [])

    const appContent = (
        <div className="w-full h-full relative pb-24">
            <AppHeader/>
            {children}
            <AppNavigation/>
        </div>
    )

    return (
        <div className={[
            "w-full min-h-full",
            isDesktop ? 'bg-gray-900' : ''
        ].join(' ')}>
            {
                isDesktop ? (
                    <DeviceFrame>
                        <ScrollArea.Root className="w-full h-full rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA4 bg-dark">
                            <ScrollArea.Viewport className="w-full h-full rounded">
                                {appContent}
                            </ScrollArea.Viewport>
                            <ScrollArea.Scrollbar
                                className="flex select-none touch-none py-0.5 pl-0.5 pr-2 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                                orientation="vertical"
                            >
                                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                            </ScrollArea.Scrollbar>
                            <ScrollArea.Corner className="bg-blackA5" />
                        </ScrollArea.Root>
                    </DeviceFrame>
                ) : appContent
            }
        </div>

    );
};

export default AppLayout;
