import React from 'react'

const data = [
  {
    question: `WHAT WE LOOK FOR?`,
    answer: `We are looking for the best and brightest founders and teams. In our experience, the quality, passion and commitment of a company's core team are more important than any other element.`
  },
  {
    question: `WHEN TO REACH OUT?`,
    answer: `We invest between seed and series B initially in each company. We like to get to know founders early, ideally well before they are ready to raise capital.`
  },
  {
    question: `HOW WE INVEST?`,
    answer: `We invest in companies primarily targeting the Indian market. We prefer to be the lead investor. We often invest on our own but also co-invest with other investors.`
  },
]

const Partnering = () => {
  return (
    <div className='sm:bg-secondary'>
      <div className='m-20 sm:m-10'>
        <h3 className='text-accent'>Partnering with Matrix?</h3>
        <div className="my-16 sm:my-10">
          {
            data.map((d, i) => (
              <div key={i}>
                <h6 className='mb-5 opacity-50'>{d.question}</h6>
                <div className="sub-h1 mb-16 sm:mb-10">
                  {d.answer}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Partnering
