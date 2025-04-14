import { useState } from 'react'
import { ArrowDown } from '@phosphor-icons/react'

const faqData = [
  {
    question: 'How do I delete my SideKick account?',
    answer: `If you no longer wish to keep your SideKick account`
  },
  {
    question: 'What is the range of the scooter?',
    answer: 'The battery should easily last for about 45km on a single charge.'
  },
  {
    question: 'How can I track my order?',
    answer: 'After your order is shipped, you’ll receive an email with tracking information.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section>
      <div className="max-w-7xl w-[80vw] mx-auto py-12">
        <div className="relative w-max mx-auto mb-8">
          <h2 className="text-center text-4xl font-bold relative z-10">FAQS</h2>
        </div>

        <div className="">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="py-2 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left cursor-pointer"
                >
                  <span className="text-xl font-semibold">{faq.question}</span>
                  <ArrowDown
                    size={24}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`px-4 overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-40 py-2' : 'max-h-0'
                    }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
