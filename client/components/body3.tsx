import { Link } from 'react-router-dom'
import { useState, ChangeEvent, FormEvent } from 'react'
interface Props {
  onSubmit(injuries: null | string[]): void
}

export default function Body(props: Props) {
  const [formState, setFormState] = useState({
    blood: false,
    bones: false,
    concussion: false,
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.currentTarget
    setFormState({ ...formState, [name]: checked })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const injuries = []
    for (const [key, checked] of Object.entries(formState)) {
      if (checked) {
        injuries.push(key)
      }
    }
    props.onSubmit(injuries)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="indexBodyContainer">
        <p>Choices</p>
        <div>
          <div>
            <input
              type="checkbox"
              id="blood"
              name="blood"
              checked={formState.blood}
              onChange={handleChange}
            />
            <label htmlFor="blood">Is there blood?</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="bones"
              name="bones"
              checked={formState.bones}
              onChange={handleChange}
            />
            <label htmlFor="bones">Do you have a broken bone?</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="concussion"
              name="concussion"
              checked={formState.concussion}
              onChange={handleChange}
            />
            <label htmlFor="concussion">Do you have concussion?</label>
          </div>
        </div>

        <button type="submit">Submit</button>

        <Link to="/">
          <button>Go Back Home</button>
        </Link>
      </div>
    </form>
  )
}
