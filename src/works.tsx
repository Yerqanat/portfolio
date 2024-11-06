import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { FaTruckFast } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SiWeb3Dotjs } from "react-icons/si";

interface CardProps {
  card: {
    url: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    id: number;
  };
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] w-full">
      <div className="sticky top-12 flex h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group p-4 relative h-[400px] w-[320px] duration-300 transition-all hover:h-[550px] overflow-hidden bg-[#070d27] border-2 border-[#19284c] hover:border-[#122771] cursor-pointer"
    >
      <div className="absolute w-full top-0 left-0 h-full pb-10 bg-[#01071f] z-50 group-hover:hidden duration-300 flex flex-col justify-around items-center ">
        <IoMdArrowDropdown className="text-[#7285bf]" />
        {card.icon}
        <p className="text-[#7285bf]">·</p>
        <h3 className="font-poppins tracking-[.5em] uppercase">{card.title}</h3>
        <p className="text-yellow-200 font-inter text-sm font-semibold">
          {String(card.id).padStart(2, "0")}
        </p>
      </div>
      <div className="flex items-center h-[360px] overflow-hidden">
        <img src={card.url} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="mt-4 px-8 ">
        <h3 className="font-poppins font-bold">{card.title}</h3>
        <p className="text-gray-400 font-inter text-sm">{card.description}</p>
        <p className="text-blue-300 font-inter text-sm font-semibold mt-2">
          {String(card.id).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "alsat.jpg",
    title: "Alsat",
    icon: <FaTruckFast size="5em" className="text-[#7285bf]" />,
    description:
      "Innovative logistics application designed to streamline supply chain management for businesses.",
    id: 1,
  },
  {
    url: "alaman.jpg",
    title: "Alaman",
    icon: <BiCameraMovie size="5em" className="text-[#7285bf]" />,
    description:
      "It's a versatile and interactive video streaming application designed for Weixin Mini Programs (微信小程序).",
    id: 2,
  },
  {
    url: "mini-shop.jpg",
    title: "Mini shop",
    icon: <FaCartShopping size="5em" className="text-[#7285bf]" />,
    description:
      "It is a all-in-one e-commerce app designed to revolutionize your shopping experience.",
    id: 3,
  },
  {
    url: "snapgram.png",
    title: "snapgram",
    icon: <TiSocialInstagramCircular size="5em" className="text-[#7285bf]" />,
    description:
      "It's a instagram clone that allows users to share photos and videos with friends.",
    id: 4,
  },
  {
    url: "threejs.gif",
    title: "3D protfolio",
    icon: <SiWeb3Dotjs size="5em" className="text-[#7285bf]" />,
    description: "It's a protfolio website that use Three.js to generate.",
    id: 5,
  },
];
