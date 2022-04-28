import "./words.scss"

const Words = ({words}) => {

  return (
    <div className="WordsContainer">
        <h2>Fetched Words</h2>
        <div className="wordsFlex">
            {words.map((i) => (
              <div className="word" key={i[0].word}>{i[0].word}</div>
            ))}
        </div>
    </div>
  )
}

export default Words