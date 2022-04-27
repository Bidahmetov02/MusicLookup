import "./main.scss"
import Words from '../../components/Words/Words';
import { useEffect, useState } from "react"

const Main = () => {
  const [number, setNumber] = useState(0)
  const [words, setWords] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (words.length > 0) {
      setWords([])
    }
    setNumber(e.target[0].value)
  }

  console.log("Number", number)
  
  useEffect(() => {
    const Request = async () => {
      const response = await fetch("https://random-words-api.vercel.app/word")
      const data = await response.json()
      setWords(oldArray => [...oldArray, data])
    }

    if (number > 0) {
      for (let i = 0; i < number; i++) {
        Request()
      }
    }

  }, [number])

  console.log(words)


  return (
    <>
      <div className="mainContainer">
          <h2>Enter the number or words (max 20)</h2>
          <form onSubmit={handleSubmit}>
              <input type="number" max={20} required placeholder="" />
              <button type="submit">Submit</button>
          </form>
      </div>
      {words.length > 0 ? <Words words={words}/> : null}
    </>
  )
}

export default Main