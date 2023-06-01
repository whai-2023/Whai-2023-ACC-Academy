

export default function Body() {
  return (
    <>
      <div className="indexBodyContainer"> 
        <div className="indexQuestion">

            <input type="checkbox" name="answer" value="yes" /> Yes

        </div>
        <div className="indexQuestion">

            <input type="checkbox" name="answer" value="no" /> No

        </div>
        <div className="submitContainer">
          <button type="submit">Submit</button>
        </div> 
      </div> 
    </>  
  )
}