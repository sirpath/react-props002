import React from 'react'
import { DataProperty } from '../App'

const Location: React.FC<DataProperty['location']> = ({
  street,
  city,
  state,
  zip,
}) => {
  return (
    <>
      <h3>Location</h3>
      <ul>
        <li>
          <b>Street:</b> {street}
        </li>
        <li>
          <b>City:</b> {city}
        </li>
        <li>
          <b>State:</b> {state}
        </li>
        <li>
          <b>ZIP:</b> {zip}
        </li>
      </ul>
    </>
  )
}

export default Location
