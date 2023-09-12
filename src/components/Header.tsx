import { DataProperty } from '../App'

const Header: React.FC<Pick<DataProperty, 'headerName'>> = ({ headerName }) => {
  return <h1>{headerName}</h1>
}

export default Header
