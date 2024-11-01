import React from "react";
import Chart from "../../../shared/charts/Chart";
import { motion } from "framer-motion";
// import Logo from "../../../shared/logo/Logo";

const Platform = () => {
  return (
    <div className="mb-10">
      <div className="mx-auto md:w-[60%]">
        <h3 className="text-white underline text-xl md:text-2xl lg:text-6xl capitalize text-center font-bold mb-12">
          Easy to Use
        </h3>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.9,
              ease: "easeIn",
            },
          }}
        >
          {/* <Chart /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Platform;
