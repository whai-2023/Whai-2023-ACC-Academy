import { useState, useEffect } from 'react';
import bloodData from '../data/blood.js';
import bonesData from '../data/bones.js';
import concussionData from '../data/concussion.js';

interface Props {
  injuries: null | string[];
}

export default function Footer3(props: Props) {
  const [injuryContent, setInjuryContent] = useState<string>('');

  useEffect(() => {
    if (props.injuries !== null) {
      const generateInjuryContent = () => {
        let content = ''
        for (let i = 0; i < props.injuries.length; i++) {
          const injury = props.injuries[i]
          const randomId = Math.floor(Math.random() * 12) + 1
          const databaseContent = getDatabaseContent(injury, randomId.toString())
          content += databaseContent
        }
        return content
      }
  
      const getDatabaseContent = (injury: string, randomId: string) => {
        let database
        switch (injury) {
          case 'blood':
            database = bloodData
            break;
          case 'bones':
            database = bonesData
            break;
          case 'concussion':
            database = concussionData
            break
          default:
            return ''
        }
        const selectedEntry = database.find((entry) => entry.id.toString() === randomId)
        return selectedEntry ? selectedEntry.phrase : ''
      };
  
      const content = generateInjuryContent()
      setInjuryContent(content)
    }
  }, [props.injuries])

  return (
    <div className="footer-container">
      <div className="left-content">
        <div>
          <div className="speech-balloon">
            <span className="text">What is your injury? {injuryContent}</span>
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
