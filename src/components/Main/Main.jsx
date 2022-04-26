import "./main.scss"

const Main = () => {
  return (
    <div className="mainContainer">
        <h2>Enter the number or words (max 20)</h2>
        <form>
            <input type="number" max={20} required placeholder="" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Main