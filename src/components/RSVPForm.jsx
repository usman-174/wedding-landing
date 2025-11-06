import { useState } from 'react'
import { toast } from 'sonner'
import { motion, AnimatePresence } from 'framer-motion'

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

  // Animation variants for form sections
  const person2Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.2
        }
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: {
        height: {
          duration: 0.3,
          ease: "easeOut"
        },
        opacity: {
          duration: 0.3,
          delay: 0.1
        },
        y: {
          duration: 0.3
        }
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.2
        }
      }
    }
  }

  const inputFocusVariants = {
    rest: { scale: 1 },
    focus: {
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="bg-white py-20 px-8">
      <div className="text-center mb-16">
        <motion.p
          className="font-sans text-xs md:text-sm leading-loose text-gray-700 font-light max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Molimo vas da svoj dolazak ili izostanak potvrdite najkasnije do<br />
          1. veljače 2026. Unaprijed vam zahvaljujemo i radujemo se što<br />
          ćete s nama podijeliti ovaj poseban dan!
        </motion.p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* First Name */}
        <motion.div
          className="mb-10"
          variants={inputFocusVariants}
          initial="rest"
          whileFocus="focus"
        >
          <input
            type="text"
            name="firstName"
            placeholder="IME"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-3 border-0 border-b-[1px] border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent font-sans text-sm tracking-[2px] placeholder-gray-400 transition-colors duration-300"
          />
        </motion.div>

        {/* Last Name */}
        <motion.div
          className="mb-10"
          variants={inputFocusVariants}
          initial="rest"
          whileFocus="focus"
        >
          <input
            type="text"
            name="lastName"
            placeholder="PREZIME"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-3 border-0 border-b-[1px] border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent font-sans text-sm tracking-[2px] placeholder-gray-400 transition-colors duration-300"
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          className="mb-10"
          variants={inputFocusVariants}
          initial="rest"
          whileFocus="focus"
        >
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
        </motion.div>

        {/* Attendance Question */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <label className="block font-sans text-xs text-gray-700 mb-4 tracking-[2px]">
            DOLAZITE LI NA NAŠE VJENČANJE?
          </label>

          <div className="flex justify-center gap-12">
            <motion.label
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
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
            </motion.label>
            <motion.label
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
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
            </motion.label>
          </div>
        </motion.div>

        {/* Add Person 2 Button */}
        {!showPerson2 && (
          <motion.button
            type="button"
            onClick={() => setShowPerson2(true)}
            className="w-full py-4 px-6 font-sans text-sm font-medium uppercase tracking-[2px] shadow-md hover:shadow-lg my-10 transition-shadow duration-200"
            style={{
              backgroundColor: '#c8d5d0',
              color: '#ffffff',
              letterSpacing: '2px'
            }}
            whileHover={{
              scale: 1.02,
              backgroundColor: '#b8c9c3'
            }}
            whileTap={{
              scale: 0.98
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut"
            }}
          >
            + Dodaj još jednu osobu
          </motion.button>
        )}

        {/* Person 2 Section */}
        <AnimatePresence>
          {showPerson2 && (
            <motion.div
              className="bg-gray-50 border border-gray-200 p-8 my-10 overflow-hidden"
              variants={person2Variants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-sans text-sm font-normal text-gray-800 uppercase tracking-[2px]">
                  Osoba 2
                </h3>
                <motion.button
                  type="button"
                  onClick={() => setShowPerson2(false)}
                  className="text-gray-500 hover:text-gray-700"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              <motion.div
                className="mb-8"
                variants={inputFocusVariants}
                initial="rest"
                whileFocus="focus"
              >
                <input
                  type="text"
                  name="person2.firstName"
                  placeholder="IME"
                  value={formData.person2.firstName}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-[1px] border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent font-sans text-sm tracking-[2px] placeholder-gray-400 transition-colors duration-300"
                />
              </motion.div>
              <motion.div
                variants={inputFocusVariants}
                initial="rest"
                whileFocus="focus"
              >
                <input
                  type="text"
                  name="person2.lastName"
                  placeholder="PREZIME"
                  value={formData.person2.lastName}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-[1px] border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent font-sans text-sm tracking-[2px] placeholder-gray-400 transition-colors duration-300"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message */}
        <motion.div
          className="mb-10"
          variants={inputFocusVariants}
          initial="rest"
          whileFocus="focus"
        >
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
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full py-5 px-8 font-sans text-sm font-medium uppercase tracking-[3px] shadow-lg hover:shadow-xl mt-8 transition-shadow duration-200"
          style={{
            backgroundColor: '#c8d5d0',
            color: '#ffffff',
            letterSpacing: '3px'
          }}
          whileHover={{
            scale: 1.02,
            backgroundColor: '#b8c9c3'
          }}
          whileTap={{
            scale: 0.98
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut"
          }}
        >
          Pošalji prijavu
        </motion.button>
      </motion.form>
    </section>
  )
}