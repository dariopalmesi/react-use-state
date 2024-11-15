import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import languages from './data/languages'
import './App.css'

function App() {
  const [active, setActive] = useState(0)



  function handleClick(e) {
    console.log(e.target);
    const newActive = Number(e.target.getAttribute('data-index'));
    console.log(newActive);

    setActive(newActive)

  }

  return (
    <>
      <div className="langauges">
        {languages.map((language, index) => {
          <div className="language" key={language.id}>
            <h2 onClick={handleClick} data-index={index}>{language.title}</h2>
            <div className={active == index ? 'content' : 'hide'}>{language.description}</div>
          </div>
        })}
      </div>
    </>
  )
}

export default App
