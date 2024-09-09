"use client"
import { motion } from "framer-motion"

export function FadeInSection({
  children,
  animate = true,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  animate?: boolean
  delay?: number
  className?: string
}) {

  return (
    <motion.div
      className={className}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      initial={animate ? { opacity: 0, y: 10, scale: 0.8 } : { opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: delay,
        type: "tween",
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}