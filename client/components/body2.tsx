import { Link } from 'react-router-dom'

export default function Body() {
  return (
    <>
      <div className="indexBodyContainer">
        <p>Listen to the Secretary.</p>
        <Link to="/">
          <button>Go Back Home</button>
        </Link>
      </div>
    </>
  )
}
