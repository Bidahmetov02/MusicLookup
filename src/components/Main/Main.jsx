import "./main.scss"
import Words from '../../components/Words/Words';
import Track from '../../components/Tracks/Track'
import { useEffect, useState } from "react"

const Main = () => {
  const [number, setNumber] = useState(0)
  const [words, setWords] = useState([])
  const [trackList, setTrackList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (words.length > 0) {
      setWords([])
    }

    if (trackList.length > 0) {
      setTrackList([])
    }

    setNumber(e.target[0].value)
  }

  const Request = async () => {
    const response = await fetch("https://random-words-api.vercel.app/word")
    const data = await response.json()
    setWords(oldArray => [...oldArray, data])

    const response2 = await fetch(`https://musicbrainz.org/ws/2/recording?query=${data[0].word}&limit=1&fmt=json`)
    const data2 = await response2.json()

    let tr = {word: data[0].word, artist: "Not Found", album: "Not Found", track: "Not Found"}

    if (data2.count != 0) {
      let artist = data2['recordings'][0]['artist-credit'][0]['name']
      let album = data2['recordings'][0]['releases'][0]['release-group']['title']

      tr = {word: data[0].word, artist: artist, album: album, track: data2.recordings[0].title}
    }

    setTrackList(oldArray => [...oldArray, tr])
  }
  
  useEffect(() => {
    if (number > 0) {
      for (let i = 0; i < number; i++) {
        Request()
      }
    }

  }, [number])

  return (
    <>
      <div className="mainContainer">
          <h2>Enter the number or words (max 20)</h2>
          <form onSubmit={handleSubmit}>
              <input type="number" max={20} min={1} required placeholder="" />
              <button type="submit">Submit</button>
          </form>
      </div>
      {words.length > 0 ? <Words words={words}/> : null}
      {trackList.length > 0 ? <Track tracks={trackList}/> : null}
    </>
  )
}

export default Main