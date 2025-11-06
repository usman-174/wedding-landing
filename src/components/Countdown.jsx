import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Countdown() {
  const weddingDate = new Date('2026-07-14T00:00:00')
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const now = new Date()
    const difference = weddingDate - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Animation variants for numbers
  const numberVariants = {
    enter: {
      y: 20,
      opacity: 0
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      position: 'absolute',
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  // Component for animated numbers - only animates on actual change
  const AnimatedNumber = ({ value, label }) => {
    // Format value to always have 2 digits
    const formattedValue = String(value).padStart(2, '0')

    return (
      <div className="text-center">
        <div className="relative h-[50px] md:h-[70px] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={value}
              className="font-serif text-4xl md:text-6xl font-light text-gray-800 absolute inset-0 flex items-center justify-center"
              variants={numberVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {formattedValue}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="font-sans text-xs md:text-sm text-gray-600 font-light tracking-wider mt-1">
          {label}
        </div>
      </div>
    )
  }

  return (
    <section className="bg-white py-8 pb-20 px-8">
      <motion.div
        className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <AnimatedNumber value={timeLeft.days} label="Dani" />
        <AnimatedNumber value={timeLeft.hours} label="Sati" />
        <AnimatedNumber value={timeLeft.minutes} label="Minute" />
        <AnimatedNumber value={timeLeft.seconds} label="Sekunde" />
      </motion.div>
    </section>
  )
}