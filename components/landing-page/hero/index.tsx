import Link from "next/link";
import TrendingCoins from "./trending-coins";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      className="text-white"
    >
      <div className="w-[90%] mx-auto ">
        <div className="flex flex-col items-center justify-center my-16">
          <motion.h1
            variants={variants}
            className="text-3xl md:text-4xl capitalize font-bold text-center leading-normal"
          >
            build your Investment Portfolio today
          </motion.h1>
          <motion.p
            variants={variants}
            className="font-regular py-3 capitalize text-lg text-center text-neutral-300"
          >
            discover,trade and increase your investment Portfolio with zero
            exchange chargers.
          </motion.p>
          <Link
            href="/auth/sign-up"
            className="bg-teal-500 text-base md:text-xl px-6 py-3 rounded mt-4 text-bg font-medium"
          >
            Get Start today
          </Link>
        </div>
      </div>
      <div>
        <img
          src="https://naga.com/_next/image?url=%2Fimages%2Fwhy-choose-naga%2Finvest%2Fimg-3.png&w=1440&q=75"
          alt="image"
          className="mx-auto w-[90%] lg:w-[50%]"
        />
      </div>
      {/* <TrendingCoins /> */}
    </motion.section>
  );
};

export default Hero;
