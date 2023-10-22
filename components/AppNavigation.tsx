import {BiChart, BiCog, BiHome, BiUser} from "react-icons/bi";
import Link from "next/link";
import {useRouter} from "next/router";
import {HiSparkles} from "react-icons/hi2";
import {BsCamera} from "react-icons/bs";

const activeLinkClassName = 'text-primary'

const links = [
    {
        href: '/',
        icon: BiHome,
        name: 'Start'
    },
    {
        href: '/social',
        icon: BiUser,
        name: 'Social'
    },
    {
        href: '/analytics',
        icon: BiChart,
        name: 'Analytics'
    },
    {
        href: '/addons',
        icon: HiSparkles,
        name: 'Addons'
    },
]

const LinksSlice = ({linksSlice, pathname}) => {
    return linksSlice.map(({href, name, icon: Icon}) => (
        <div className="flex justify-center">
            <Link href={href} className={pathname === href ? activeLinkClassName : ''}>
                <Icon className="w-7 h-7" />
            </Link>
        </div>
    ))
}

const AppNavigation = () => {
    const {pathname} = useRouter();

    return (
        <nav className="fixed bottom-0 w-full h-12 bg-dark text-light border-t border-light/20 py-1">
            <div className="w-4/5 mx-auto grid grid-cols-5 h-full items-center transform translate-y-[-16px]">
                <LinksSlice linksSlice={links.slice(0, links.length/2)} pathname={pathname} />
                <div className="flex items-center justify-center">
                    <Link href="/transfer/record" className="rounded-full w-16 h-16 flex items-center justify-center bg-primary border-2 border-dark transform translate-y-[-10px]">
                        <BsCamera className="w-10 h-10 text-dark" />
                    </Link>
                </div>
                <LinksSlice linksSlice={links.slice(links.length/2, links.length)} pathname={pathname} />
            </div>
        </nav>
    )
}

export default AppNavigation