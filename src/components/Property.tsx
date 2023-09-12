import { FC, PropsWithChildren } from 'react'
import { DataProperty } from '../App'

const Property: FC<DataProperty['property'] & PropsWithChildren> = (props) => {
  const { hotelName, img, children } = props
  return (
    <>
      <h2>{hotelName}</h2>
      <img className="property-image" src={img} alt={hotelName} />
      {children}
    </>
  )
}

export default Property
