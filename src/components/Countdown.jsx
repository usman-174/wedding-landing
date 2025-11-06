import { useState, useEffect } from 'react'

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

  return (
    <section className="bg-white py-8 pb-20 px-8">
      <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
        {[
          { value: timeLeft.days, label: 'Dani' },
          { value: timeLeft.hours, label: 'Sati' },
          { value: timeLeft.minutes, label: 'Minute' },
          { value: timeLeft.seconds, label: 'Sekunde' }
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="font-serif text-4xl md:text-6xl font-light text-gray-800 mb-1">
              {item.value}
            </div>
            <div className="font-sans text-xs md:text-sm text-gray-600 font-light tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
