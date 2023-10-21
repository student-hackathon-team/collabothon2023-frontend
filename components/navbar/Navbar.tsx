import additional from "../../public/navbar/additional.png";
import payments from "../../public/navbar/payments.png";
import graph from "../../public/navbar/graph.png";
import home from "../../public/navbar/home.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  image: StaticImageData;
  text: string;
  href: string;
};

const NavbarIcon: React.FC<Props> = ({ image, href, text }) => {
  const router = useRouter();
  let selected = false;
  if (router.pathname === href) selected = true;

  return (
    <div
      className={
        " w-full transition-all " + (selected ? "opacity-100" : "opacity-60")
      }
    >
      <div className={"w-8 mx-auto "}>
        <Link href={href}>
          <Image src={image} alt={text} />
        </Link>
      </div>
      <div className="text-center text-sm mx-auto">{text}</div>
    </div>
  );
};

const Navbar: React.FC<{}> = ({}) => {
  return (
    <div className=" fixed bottom-0 w-full max-w-sm flex justify-center items-center ">
      <div className="max-w-sm h-full w-full bg-slate-100 bg-opacity-70 p-2 z-50">
        <div className="grid grid-cols-5 w-full">
          <NavbarIcon image={home} text={"home"} href="/" />
          <NavbarIcon image={payments} text={"money"} href="/payments" />
          <div className="text-center">Bitmoji</div>
          <NavbarIcon image={additional} text={"graphs"} href="/analisys" />
          <NavbarIcon image={graph} text={"extras"} href="/additional" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
