import React from "react";
import { motion } from "framer-motion";
import * as Md from "react-icons/md";

const lists = [
  {
    id: 1,
    title: "Instant Withdrawals",
    about: "Get your profit withdrawal in several minutes on your wallet",
    icon: <Md.MdQuickreply size="30px" />,
  },
  {
    id: 2,
    title: "Versatile Platform",
    about:
      "Use it anywhere you want. On any device and without downloading software.",
    icon: <Md.MdLaptopMac size="30px" />,
  },
  {
    id: 3,
    title: "Easy to use Platform",
    about:
      "Easy to use Platform, from real time chart to market table analysis",
    icon: <Md.MdAreaChart size="30px" />,
  },
];

const Brag = () => {
  return (
    <section className="text-white my-10">
      <div>
        <motion.h4
          initial="initial"
          whileInView="finish"
          variants={{
            initial: {
              scale: 0,
              opacity: 0,
            },
            finish: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.2,
              },
            },
          }}
          className="text-center text-5xl p-3 capitalize font-bold underline"
        >
          Deal with the best
        </motion.h4>
        <div className="grid md:grid-cols-3 gap-4 p-3 my-10">
          {lists.map((list, index) => (
            <motion.div
              key={list.id}
              initial="initial"
              whileInView="finish"
              variants={{
                initial: {
                  scale: 0,
                  opacity: 0,
                },
                finish: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.2 * index,
                  },
                },
              }}
              className="flex flex-col gap-6 items-center justify-center"
            >
              <div className="rounded-full p-4 bg-teal-400/20">{list.icon}</div>
              <div className="text-center space-y-3 md:w-[60%] mx-auto">
                <h4 className="capitalize text-2xl font-bold">{list.title}</h4>
                <p>{list.about}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brag;
