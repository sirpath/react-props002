import { DataProperty } from '../App'

const Header: React.FC<Pick<DataProperty, 'headerName'>> = ({ headerName }) => {
  return (
    <header>
      <h1>{headerName}</h1>
    </header>
  )
}

export default Header
