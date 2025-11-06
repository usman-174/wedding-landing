import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const carouselImages = [
    'https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2073',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2069',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentImageIndex])

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 400)
    }
  }

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentImageIndex((prev) => prev === 0 ? carouselImages.length - 1 : prev - 1)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 400)
    }
  }

  const handleSelect = (index) => {
    if (!isTransitioning && index !== currentImageIndex) {
      setIsTransitioning(true)
      setCurrentImageIndex(index)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 400)
    }
  }

  const getPrevIndex = () => {
    return currentImageIndex === 0 ? carouselImages.length - 1 : currentImageIndex - 1
  }

  const getNextIndex = () => {
    return (currentImageIndex + 1) % carouselImages.length
  }

  // Animation variants - optimized for faster transitions
  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1,
      x: 100
    },
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 1,
      x: -100,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const sideImageVariants = {
    hidden: {
      opacity: 0.4,
      scale: 0.9
    },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section className="bg-white py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[500px] md:h-[700px] flex items-center justify-center gap-2 md:gap-6">
          {/* Left Image - Partial Visible on Mobile */}
          <motion.div
            className="w-[20%] md:w-1/3 h-full overflow-hidden cursor-pointer"
            variants={sideImageVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              opacity: { md: 0.85 },
              scale: { md: 1.02 },
              transition: { type: "spring", stiffness: 300 }
            }}
            onClick={handlePrev}
          >
            <motion.img
              src={carouselImages[getPrevIndex()]}
              alt="Previous"
              className="w-full h-full object-cover rounded-lg md:rounded-xl transform translate-x-[30%] md:translate-x-0"
              style={{ filter: 'brightness(0.6) contrast(0.9)' }}
              whileHover={{ filter: { md: 'brightness(0.85)' } }}
            />
          </motion.div>

          {/* Center Image - Full Visible */}
          <motion.div
            className="relative w-[60%] md:w-1/2 h-full overflow-hidden rounded-xl md:rounded-2xl shadow-2xl"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              const swipeThreshold = 50
              if (offset.x > swipeThreshold && !isTransitioning) {
                handlePrev()
              } else if (offset.x < -swipeThreshold && !isTransitioning) {
                handleNext()
              }
            }}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={carouselImages[currentImageIndex]}
                alt={`Wedding ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>

            {/* Gradient Overlay for better dot visibility */}
            <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-b-xl md:rounded-b-2xl pointer-events-none" />

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-10">
              {carouselImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={isTransitioning}
                  className="h-1.5 md:h-2 rounded-full bg-white/50 overflow-hidden"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    width: index === currentImageIndex ? 24 : 6,
                    backgroundColor: index === currentImageIndex ? '#ffffff' : 'rgba(255,255,255,0.5)'
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Image - Partial Visible on Mobile */}
          <motion.div
            className="w-[20%] md:w-1/3 h-full overflow-hidden cursor-pointer"
            variants={sideImageVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              opacity: { md: 0.85 },
              scale: { md: 1.02 },
              transition: { type: "spring", stiffness: 300 }
            }}
            onClick={handleNext}
          >
            <motion.img
              src={carouselImages[getNextIndex()]}
              alt="Next"
              className="w-full h-full object-cover rounded-lg md:rounded-xl transform -translate-x-[30%] md:translate-x-0"
              style={{ filter: 'brightness(0.6) contrast(0.9)' }}
              whileHover={{ filter: { md: 'brightness(0.85)' } }}
            />
          </motion.div>
        </div>

        {/* Image Counter with animation */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.p
            key={currentImageIndex}
            className="font-sans text-sm text-gray-500 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentImageIndex + 1} / {carouselImages.length}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}