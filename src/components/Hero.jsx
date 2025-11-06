import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import heroImage from '../assets/images/hero.webp'

export default function Hero() {
  const controls = useAnimation()
  const [isFlipComplete, setIsFlipComplete] = useState(false)

  // Container animation for orchestrating children
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5
      }
    }
  }

  // Flipping animation for initial load
  const flipVariants = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      y: 20
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8
      }
    }
  }

  // Subtle floating animations after flip completes
  const floatAnimations = [
    { y: [0, -4, 0], duration: 3.5 },
    { y: [0, -3, 0], duration: 4 },
    { y: [0, -5, 0], duration: 3 },
    { y: [0, -3, 0], duration: 4.5 },
    { y: [0, -4, 0], duration: 3.2 },
    { y: [0, -3, 0], duration: 4.3 },
    { y: [0, -5, 0], duration: 3.7 },
    { y: [0, -3, 0], duration: 4.1 },
    { y: [0, -4, 0], duration: 3.8 }
  ]

  // Date flipping animation
  const dateVariants = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      y: -20
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 1,
        delay: 0.2
      }
    }
  }

  const nameLetters = [
    { letter: 'V', delay: 0 },
    { letter: 'i', delay: 0.05 },
    { letter: 't', delay: 0.1 },
    { letter: '&', isAmpersand: true, delay: 0.15 },
    { letter: 'J', delay: 0.2 },
    { letter: 'o', delay: 0.25 },
    { letter: 's', delay: 0.3 },
    { letter: 'i', delay: 0.35 },
    { letter: 'p', delay: 0.4 }
  ]

  // Start floating animation after flip completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipComplete(true)
    }, 1200) // Start floating sooner after flip completes

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImage})`
        }}
      />
      <div className="relative z-10 text-center text-white px-8">
        <motion.p
          className="font-serif text-xl md:text-3xl font-light tracking-[3px] mb-3"
          initial="hidden"
          animate="visible"
          variants={dateVariants}
          style={{ perspective: 1000 }}
        >
          14.7.2026 | SRIJEDA
        </motion.p>

        <motion.h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-[5px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ perspective: 1000 }}
        >
          {nameLetters.map((item, index) => (
            <motion.span
              key={index}
              className={`inline-block ${item.isAmpersand ? 'mx-3' : ''}`}
              variants={flipVariants}
              animate={isFlipComplete ? {
                y: floatAnimations[index].y,
                transition: {
                  duration: floatAnimations[index].duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.1
                }
              } : {}}
              whileHover={{
                scale: 1.1,
                rotateZ: [-2, 2, -2],
                transition: {
                  scale: { type: "spring", stiffness: 300 },
                  rotateZ: { duration: 0.3 }
                }
              }}
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'center bottom'
              }}
            >
              {item.letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtle wave animation after text loads */}
        {isFlipComplete && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(200,213,208,0.15) 0%, transparent 60%)'
            }}
          />
        )}
      </div>
    </section>
  )
}