import { useState, useEffect } from 'react'

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    'https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2073',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden shadow-2xl">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Wedding ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
