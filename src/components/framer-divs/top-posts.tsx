"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
interface TopPostsDivProps {
  children: React.ReactNode;
  direction: string;
  deley: number;
}

const MotionDivWrapper = ({ children, direction, deley }: TopPostsDivProps) => {
  return (
    <motion.div
      variants={fadeIn(direction, deley)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};

export default MotionDivWrapper;
