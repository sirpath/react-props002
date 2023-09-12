import { DataProperty } from '../App'

const Detail: React.FC<DataProperty['detail']> = ({
  price,
  bedrooms,
  bathrooms,
  garage,
}) => {
  const thaiBaht = Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
  }).format(price)

  return (
    <ul className="detail">
      <li>
        <b>Price: </b>
        {thaiBaht}
      </li>
      <li>
        <b>Bedrooms: </b>
        {bedrooms}
      </li>
      <li>
        <b>Bathrooms: </b>
        {bathrooms}
      </li>
      <li>
        <b>Garage: </b>
        {garage}
      </li>
    </ul>
  )
}

export default Detail
