import React from 'react'
import { Consumer } from './../context'

const ChangeKana = () =>
  <Consumer>
    { ({ actions }) => (
      <select
        onChange={ (e) => actions.handleKanaChange(e.target.value) }
        className="kana"
      >
        <option value="both">All Kana</option>
        <option value="hiragana">Hiragana</option>
        <option value="katakana">Katakana</option>
      </select>
    )}
  </Consumer>

export default ChangeKana