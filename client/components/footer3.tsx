import { useState, useEffect } from 'react'



interface Props {
  injuries: null | string[]
  injuryContent: string
}

export default function Footer3(props: Props) {


 

  return (
    <div className="footer-container">
      <div className="left-content">
        <div>
          <div className="speech-balloon">
            <span className="text">What is your injury? {props.injuryContent}</span>
          </div>
        </div>
      </div>
      <div className="right-content">
        <img
          className="image-size"
          src="/images/secretary.png"
          alt="Secretary Cartoon"
        />
      </div>
    </div>
  );
}
