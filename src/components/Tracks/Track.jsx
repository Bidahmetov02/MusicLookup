import React from 'react'
import './tracks.scss'

const Track = ({tracks}) => {
  return (
    <div className='TracksContainer'>
      <h2>Fetched Recordings</h2>
      <table>
        <tr className='headings'>
          <th>Word</th>
          <th>Recording</th>
          <th>Artist</th>
          <th>Album</th>
        </tr>
        {tracks.sort((a, b) => 
            (a.word.toUpperCase() < b.word.toUpperCase()) ? -1 : (a.word.toUpperCase() > b.word.toUpperCase()) ? 1 : 0).map(i => (
          <tr key={i.word}>
            <td>{i.word}</td>
            <td>{i.track}</td>
            <td>{i.artist}</td>
            <td>{i.album}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Track