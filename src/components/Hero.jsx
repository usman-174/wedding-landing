import heroImage from '../assets/images/hero.jpg'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImage})`
        }}
      />
      <div className="relative z-10 text-center text-white px-8">
        <p className="font-serif text-xl md:text-2xl font-light tracking-[3px] mb-3 opacity-0 animate-slide-down"
           style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          14.7.2026 | SRIJEDA
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-[5px] opacity-0 animate-slide-up"
            style={{
              animationDelay: '0.6s',
              animationFillMode: 'forwards',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
            }}>
          Vit & Josip
        </h1>
      </div>
    </section>
  )
}
