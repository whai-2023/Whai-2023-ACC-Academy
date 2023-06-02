import Header from './header'
import Body3 from './body3'
import Footer3 from './footer3'
import { useState } from 'react'
import bloodData from '../data/blood.js'

function Questionnaire() {
  const [injuries, setInjuries] = useState(null as null | string[])

  function handleInjuriesChange(injuries: null | string[]) {
    setInjuries(injuries)
    injuryOutput()
  }

  const [injuryContent, setInjuryContent] = useState<string>('');

  
  function injuryOutput() {
    const database = bloodData
    const randomId = Math.floor(Math.random() * 12) + 1
    const dbentry = database.find((entry) => entry.id === randomId)

    setInjuryContent(dbentry?.phrase as string)
  } 

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body2">
        <Body3 onSubmit={handleInjuriesChange} />
      </div>
      <div className="footer2">
        <Footer3 injuries={injuries} injuryContent={injuryContent} />
      </div>
    </>
  )
}

export default Questionnaire
