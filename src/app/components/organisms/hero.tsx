"use client"
import { motion } from "framer-motion"
import HeroButton from "../atoms/hero-button"
import MarqueePortfolio from "../molecules/marque-project"

const containerVariants:any = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants:any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const HeroSection = () => {
  return (
    <motion.div
      className="lg:py-8 py-6 px-4 sm:px-8 w-full flex flex-col items-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div
        className="flex items-center justify-center px-3 sm:px-4 py-1 sm:py-1.5 bg-white max-w-max dark:bg-neutral-900 dark:shadow-xs shadow-xs rounded-full text-xs sm:text-sm"
        variants={itemVariants}
      >
        <span>⚡</span>
        <h1 className="mx-1">Chaos Into Solution</h1>
        <span>🚀</span>
      </motion.div>

      <motion.div
        className="mt-6 sm:mt-8 w-full sm:max-w-[60%] flex flex-col items-center"
        variants={itemVariants}
      >
        <h1 className="text-3xl sm:text-5xl text-center dark:text-white leading-snug sm:leading-tight">
          Fast, reliable IT help for students, freelancers & businesses.
        </h1>
        <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm dark:text-white lg:max-w-sm">
          Your tech problems don’t have to slow you down. Get secure and trusted help anytime, anywhere
        </p>
      </motion.div>

      <motion.div className="mt-4" variants={itemVariants}>
        <HeroButton />
      </motion.div>

      <motion.div className="mt-6" variants={itemVariants}>
        <MarqueePortfolio />
      </motion.div>
    </motion.div>
  )
}

export default HeroSection
