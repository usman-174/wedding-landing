import { useState } from 'react'
import { toast } from 'sonner'

export default function RSVPForm() {
  const [showPerson2, setShowPerson2] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    attending: '',
    person2: {
      firstName: '',
      lastName: ''
    },
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)

    // Success toast with wedding theme
    toast.success('Prijava poslana!', {
      description: `Hvala ${formData.firstName}! Vaša prijava je uspješno poslana. Radujemo se što ćete biti s nama! 💐`,
      duration: 5000,
    })

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      attending: '',
      person2: { firstName: '', lastName: '' },
      message: ''
    })
    setShowPerson2(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name.startsWith('person2.')) {
      const field = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        person2: { ...prev.person2, [field]: value }
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  return (
    <section className="bg-white py-20 px-8">
      <div className="text-center mb-16">
        <p className="font-sans text-xs md:text-sm leading-loose text-gray-700 font-light max-w-2xl mx-auto">
          Molimo vas da svoj dolazak ili izostanak potvrdite najkasnije do<br />
          1. veljače 2026. Unaprijed vam zahvaljujemo i radujemo se što<br />
          ćete s nama podijeliti ovaj poseban dan!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        {/* First Name */}
        <div className="mb-10">
          <input
            type="text"
            name="firstName"
            placeholder="IME"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-3 border-0 border-b-[1px] border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent font-sans text-sm tracking-[2px] placeholder-gray-400 transition-colors duration-300"
          />
        </div>

        {/* Last Name */}
        <div className="mb-10">
          <input
            type="text"
            name="lastName"
            placeholder="PREZIME"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-3 border-0 border-b-[1px] border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent font-sans text-sm tracking-[2px] placeholder-gray-400 transition-colors duration-300"
          />
        </div>

        {/* Phone */}
        <div className="mb-10">
          <input
            type="tel"
            name="phone"
            placeholder="TELEFON"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-3 border-0 border-b-[1px] border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent font-sans text-sm tracking-[2px] placeholder-gray-400 transition-colors duration-300"
          />
          <p className="text-xs text-gray-400 mt-2 tracking-wider">za kontakt</p>
        </div>

        {/* Attendance Question */}
        <div className="mb-10 text-center">
          <label className="block font-sans text-xs text-gray-700 mb-4 tracking-[2px]">
            DOLAZITE LI NA NAŠE VJENČANJE?
          </label>
          <div className="font-sans text-lg tracking-[4px] text-gray-800 mb-6">
            DA / NE
          </div>
          <div className="flex justify-center gap-12">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="attending"
                value="da"
                checked={formData.attending === 'da'}
                onChange={handleInputChange}
                required
                className="w-4 h-4 cursor-pointer accent-gray-600"
              />
              <span className="font-sans text-sm tracking-wider">DA</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="attending"
                value="ne"
                checked={formData.attending === 'ne'}
                onChange={handleInputChange}
                required
                className="w-4 h-4 cursor-pointer accent-gray-600"
              />
              <span className="font-sans text-sm tracking-wider">NE</span>
            </label>
          </div>
        </div>

        {/* Add Person 2 Button */}
        {!showPerson2 && (
          <button
            type="button"
            onClick={() => setShowPerson2(true)}
            className="w-full py-4 px-6 font-sans text-sm font-medium uppercase tracking-[2px] transition-all duration-300 shadow-md hover:shadow-lg my-10"
            style={{
              backgroundColor: '#c8d5d0',
              color: '#ffffff',
              letterSpacing: '2px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#b8c9c3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#c8d5d0'}
          >
            + Dodaj još jednu osobu
          </button>
        )}

        {/* Person 2 Section */}
        {showPerson2 && (
          <div className="bg-gray-50 border border-gray-200 p-8 my-10">
            <h3 className="font-sans text-sm font-normal text-gray-800 mb-6 uppercase tracking-[2px]">
              Osoba 2
            </h3>
            <div className="mb-8">
              <input
                type="text"
                name="person2.firstName"
                placeholder="IME"
                value={formData.person2.firstName}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b-[1px] border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent font-sans text-sm tracking-[2px] placeholder-gray-400 transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="text"
                name="person2.lastName"
                placeholder="PREZIME"
                value={formData.person2.lastName}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b-[1px] border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent font-sans text-sm tracking-[2px] placeholder-gray-400 transition-colors duration-300"
              />
            </div>
          </div>
        )}

        {/* Message */}
        <div className="mb-10">
          <label className="block font-sans text-xs text-gray-700 mb-4 uppercase tracking-[2px]">
            Poruka (neobavezno)
          </label>
          <textarea
            name="message"
            placeholder="Vaša poruka za nas..."
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-0 py-3 border-0 border-b-[1px] border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent resize-none font-sans text-sm placeholder-gray-400 transition-colors duration-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-5 px-8 font-sans text-sm font-medium uppercase tracking-[3px] transition-all duration-300 shadow-lg hover:shadow-xl mt-8"
          style={{
            backgroundColor: '#c8d5d0',
            color: '#ffffff',
            letterSpacing: '3px'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#b8c9c3'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#c8d5d0'}
        >
          Pošalji prijavu
        </button>
      </form>
    </section>
  )
}
