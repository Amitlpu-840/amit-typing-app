import React,{useEffect,useState} from 'react';
import { isCodeAllowed } from "../utils/helpers";


const KeyboardComponent = ({words}: {words: string}) => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const [pressedKey,setPressedKey] = useState(words[currentIndex]);

    useEffect(() => {
        setPressedKey(words[currentIndex]);
      
        const handleKeyDown = (event: KeyboardEvent) => {
          const { key } = event;
          if (isCodeAllowed(key)) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setPressedKey(key);
          }
        };
      
        window.addEventListener("keydown", handleKeyDown);
      
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [currentIndex, words]);

    return (
        <div>
            <div className='keyboard-cont'>
                <div className="keyboard-row">
                    <button className={`keyboard-button ${pressedKey === 'a' ? 'highlighted' : ''}`}>A</button>
                    <button className={`keyboard-button ${pressedKey === 's' ? 'highlighted' : ''}`}>S</button>
                    <button className={`keyboard-button ${pressedKey === 'd' ? 'highlighted' : ''}`}>D</button>
                    <button className={`keyboard-button ${pressedKey === 'f' ? 'highlighted' : ''}`}>F</button>
                </div>
                <div className="keyboard-row">
                    <button className={`keyboard-button ${pressedKey === 'j' ? 'highlighted' : ''}`}>J</button>
                    <button className={`keyboard-button ${pressedKey === 'k' ? 'highlighted' : ''}`}>K</button>
                    <button className={`keyboard-button ${pressedKey === 'l' ? 'highlighted' : ''}`}>L</button>
                    <button className={`keyboard-button ${pressedKey === ';' ? 'highlighted' : ''}`}>;</button>
                </div>
                
            </div>
                <div className="keyboard-row">
                    <button className={`keyboard-space ${pressedKey === ' ' ? 'highlighted' : ''}`}>SPACE</button>

                </div>
        </div>
    );
};

export default KeyboardComponent;
