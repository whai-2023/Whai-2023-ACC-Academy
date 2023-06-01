import { Link } from 'react-router-dom'
import No from './no'

export default function Body() {
  return (
    <>
      <div className="indexBodyContainer"> 
        <div className="indexQuestion">
            <Link to={'/questionnaire/'}>
                <p>Yes</p>
            </Link>
        </div>
        <div className="indexQuestion">
            <Link to={'/no/'}>
                <p>No</p>
            </Link>
        </div>
      </div> 
    </>  
  )
}