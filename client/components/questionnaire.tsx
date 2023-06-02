import Header from './header'
import Body3 from './body3'
import Footer3 from './footer3'
import { useState } from 'react'

function Questionnaire() {
  const [injuries, setInjuries] = useState(null as null | string[])

  function handleInjuriesChange(injuries: null | string[]) {
    setInjuries(injuries)
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
        <Footer3 injuries={injuries} />
      </div>
    </>
  )
}

export default Questionnaire
