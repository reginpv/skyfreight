import Link from "next/link";
import { motion } from "motion/react";

export default function BannerHomeTopRight() {
  return (
    <div className="flex-1 flex flex-col gap-7 justify-center">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="uppercase font-bold">
          <span className="~text-[40px]/[60px] text-primary">We handle it</span>
          <br />
          <span className="~text-[50px]/[70px] text-secondary">better</span>
        </h1>
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        className="flex flex-col md:flex-row gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div>
          <Link
            href="/tracking"
            className="button button--white md:button--md rounded-full uppercase font-semibold"
          >
            Track your package
          </Link>
        </div>
        <div>
          <Link
            href="/shipping-rates"
            className="button button--white md:button--md rounded-full uppercase font-semibold"
          >
            Shipping rates
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
