export default function Schedule() {
  const events = [
    {
      time: '14:00',
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      description: (
        <>
          Okupljanje svatova kod mladenke<br />
          Okupljanje svatova kod mladoženje
        </>
      )
    },
    {
      time: '18:00',
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: (
        <>
          Crkveno vjenčanje - crkva sv. Franje<br />
          Asiškog, Bukovica-Tomislavgrad
        </>
      )
    },
    {
      time: '20:00',
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: (
        <>
          Svadbena večera - sala Lovre,<br />
          Bukovica-Tomislavgrad
        </>
      )
    }
  ]

  return (
    <section className="bg-wedding-sage py-20 px-8">
      <h2 className="font-serif text-5xl md:text-6xl font-light text-white text-center tracking-[5px] mb-20">
        Raspored dana
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-[1px] bg-white/40" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <div key={index} className="flex items-start gap-6 md:gap-12">
                <div className="flex-shrink-0 w-[50px] md:w-[70px] flex justify-center">
                  {event.icon}
                </div>
                <div className="pt-2">
                  <div className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
                    {event.time}
                  </div>
                  <div className="font-sans text-sm md:text-base text-white font-light leading-relaxed">
                    {event.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
