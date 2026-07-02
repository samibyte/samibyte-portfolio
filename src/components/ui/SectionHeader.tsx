import { motion } from "framer-motion";

const SectionHeader = ({title}: {title: string}) => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="glow-green font-mono text-4xl font-bold text-matrix-green md:text-5xl">
            &gt; {title}
          </h2>
          <div className="mt-4 h-[2px] w-24 bg-matrix-green/50 rounded-full" />
        </motion.div>
  )
}

export default SectionHeader