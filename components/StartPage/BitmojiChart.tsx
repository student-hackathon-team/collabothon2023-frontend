import palomaBitmoji from "../../assets/img/bitmojis/paloma_bitmoji.png";
import kuba_bitmoji from "../../assets/img/bitmojis/kuba_bitmoji.png";
import m_bitmoji_1 from "../../assets/img/bitmojis/m_bitmoji_1.png";
import m_bitmoji_2 from "../../assets/img/bitmojis/m_bitmoji_2.png";
import f_bitmoji_1 from "../../assets/img/bitmojis/f_bitmoji_1.png";
import f_bitmoji_2 from "../../assets/img/bitmojis/f_bitmoji_2.png";
import { faker } from "@faker-js/faker";

const bitmojis = [
  palomaBitmoji,
  kuba_bitmoji,
  m_bitmoji_1,
  f_bitmoji_1,
  m_bitmoji_2,
  f_bitmoji_2,
];

const BitmojiChart = () => {
  return (
    <div className="grid grid-cols-6 gap-5">
      {bitmojis.map((bitmoji) => (
        <div className="">
          <div className="flex items-end justify-center mb-2 border-b h-16">
            <div
              className="w-[5px] block  bg-primary rounded-xl"
              style={{
                height: `${faker.number.int({ min: 20, max: 100 })}%`,
              }}
            ></div>
          </div>
          <div className="">
            <img
              src={bitmoji.src}
              alt=""
              className="rounded-full w-10 aspect-square border border-primary bg-light"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BitmojiChart;
